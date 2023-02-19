import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import models from "./models";
import connectWithDb from "./mongodb";

const app = express();
app.use(bodyParser.json());
const log = (msg) => console.log(msg);

connectWithDb();
app.use(authRoutes);


app.listen(3000, 'localhost', ()=>{
    console.log('node server is run in port 3000');

})

log(models);