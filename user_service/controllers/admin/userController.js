import getAllUsers from "../../services/admin/userService";

const getUsers = async (req,res) =>{
    const users = await getAllUsers().catch((error)=>{
        console.log(error);
    });
    res.status(202).send(users);
}

export default {getUsers} 