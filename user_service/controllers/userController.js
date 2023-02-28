import {update, deleteById} from '../services/userService';


const updateUser = async(req, res)=>{
    const body = req.body;
    const user = await update(body);
    res.status(200).send(user);
}

const deleteUser = async(req,res)=>{
    console.log(req.query.id);
    const user = await deleteById(id);
    res.status(200).send(user);
}

export default {updateUser, deleteUser};