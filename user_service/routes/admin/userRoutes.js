import { Router } from "express";
import controllers from '../../controllers/admin/userController';

const router = Router();

router.get('/get_all_users', controllers.getUsers);

export default router;