import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import adminUserRoutes from "./routes/admin/userRoutes";
import userRoutes from "./routes/userRoutes";
import models from "./models";
import {connectWithDb, url} from "./mongodb";
import { handleErrors } from "./middlewares/handleErrors";
import winston from "winston";
import expressWinston from "express-winston";
import winstonFile from "winston-daily-rotate-file";
import winstonMongo from "winston-mongodb";
import {ElasticsearchTransport} from "winston-elasticsearch";

const app = express();
app.use(bodyParser.json());

const processRequest = async(req, res, next)=>{
    let correlationId = req.headers['x-correlation-id'];
    if(!correlationId){
        correlationId = Date.now().toString();
        req.headers['x-correlation-id'] = correlationId;
    }
    res.set('x-correlation-id', correlationId);
    return next();
}

app.use(processRequest);
const log = (msg) => console.log(msg);

connectWithDb();
const getMessage = (req,res)=>{
    let obj = {
        correlationId: req.headers['x-correlation-id'],
        requestBody: req.body
    }

    return JSON.stringify(obj);
}
const fileInfoTransport = new(winston.transports.DailyRotateFile)({
    filename: 'log-info-%DATE%.log',
    datePattern: 'yyyy-MM-DD-HH'
});
const fileErrorTransport = new(winston.transports.DailyRotateFile)({
    filename: 'log-error-%DATE%.log',
    datePattern: 'yyyy-MM-DD-HH'
});
const mongoErrorTransport = new winston.transports.MongoDB({
    db: url,
    metaKey: 'meta'
});
const elasticsearchOptions = {
    level: 'info',
    clientOpts: { node: 'http://localhost:9200'},
    indexPrefix: 'log-users'
};
const esTransport = new(ElasticsearchTransport)(elasticsearchOptions);
const infoLogger = expressWinston.logger({
    transports: [
        new winston.transports.Console(),
        fileInfoTransport,
        esTransport
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
    meta:true,
    msg: '{"correlationId": "{{req.headers["x-correlation-id"]}}", "error": "{{err.message}}" }'
});

const ErrorLogger = expressWinston.logger({
    transports: [
        new winston.transports.Console(),
        fileErrorTransport,
        mongoErrorTransport,
        esTransport
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
    meta:true,
    msg: getMessage
})
app.use(infoLogger);

app.use(authRoutes);
app.use(adminUserRoutes);
app.use(userRoutes);

app.use(ErrorLogger);

app.use(handleErrors);


log(models);

export default app;