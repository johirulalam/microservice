import models from '../../models';

const getAllUsers = async () => {
    const user =  models.User;
    const users = await user.find();
    return users;
}

export default  getAllUsers ;