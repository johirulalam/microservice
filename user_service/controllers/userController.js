import {update, deleteById} from '../services/userService';


const updateUser = async(req, res, next)=>{
    try{
        const body = req.body;
        const user = await update(body);
        res.status(200).send(user);
    }catch(error){
        return next(error, req, res);
    }
}

const deleteUser = async(req,res, next)=>{
    try{
        const id = req.query.id;
        await deleteById(id);
        res.status(200).send('user deleted');

    }catch(error){
        return next(error, req, res);
    }
    
}

export default {updateUser, deleteUser};