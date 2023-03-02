import saveUser from "../services/userService";

const signup = async (req, res, next) =>{
   try{
    const body = req.body;
    const user = await saveUser(body);
    res.status(202).send(user._id);
   }catch(error){
    return next(error, req, res);
   }
}

const login = (req, res) =>{
    res.send('new login')
}

export default { signup, login }