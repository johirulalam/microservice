import mongoose from "mongoose";

const url = "mongodb://localhost:27017/user_service";
const options ={};
const log = (msg) => console.log(msg);
const connectWithDb = () =>{
    mongoose.connect(url, options, (err,db)=>{
        if(err){
            console.error(err);
        }
        else log("database connected");
    })
}

export default connectWithDb;