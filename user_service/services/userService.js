import models from "../models";
import mongoose from "mongoose";
import { NotFound } from "../utils/GeneralError";

export const saveUser = async (user)=>{
    const model = new models.User(user);
    const savedUser = await model.save();
    return savedUser;
}

export const update = async(user)=>{
    const id = user._id;
    const User = models.User;
    let model = await User.findById(id);
    if(model){
        model.username  = user.username;
        model.save();
        return model;
    }
    throw new NotFound('User not found by the id: '+id);
}

export const deleteById = async(id)=>{
    let user = models.User;
    if(mongoose.Types.ObjectId.isValid(id)){
        if(await user.findById(id)){
            let result = user.deleteOne({_id:id});
            return result;
        }
    }
    throw new NotFound('User not found by the id: '+id);
    
}

export default saveUser;