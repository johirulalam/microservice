import {update, deleteById} from '../services/userService';


const updateUser = async(req, res)=>{
    const body = req.body;
    const user = await update(body);
    res.status(200).send(user);
}

const deleteUser = async(req,res)=>{
    const id = req.query.id;
    const user = await deleteById(id);
    if(user instanceof Error){
        const code = user.getCode();
        res.status(code).send(user.message);
    }else{
        res.status(200).send(user);
    }
    
}

export default {updateUser, deleteUser};