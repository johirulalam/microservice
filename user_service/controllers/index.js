import authController from './authController';
import userController from './userController';
const { signup, login } = authController;
const {updateUser, deleteUser} = userController;

const controllers = { signup, login,updateUser, deleteUser};
export default controllers