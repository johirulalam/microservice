import {update, deleteById} from '../services/userService';


const updateUser = async(req, res)=>{
    const body = req.body;
    const user = await update(body);
    res.status(200).send(user);
}

const deleteUser = async(req,res, next)=>{
    try{
        const id = req.query.id;
        const user = await deleteById(id);
        if(user instanceof Error){
            return next(user, req, res);
        }
        res.status(200).send(user);

    }catch(error){
        return next(error, req, res);
    }
    
}

export default {updateUser, deleteUser};