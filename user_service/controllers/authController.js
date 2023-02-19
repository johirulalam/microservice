import saveUser from "../services/userService";

const signup = async (req, res) =>{
   const body = req.body;
   const user = await saveUser(body);
   res.status(202).send(user._id);
}

const login = (req, res) =>{
    res.send('new login')
}

export default { signup, login }