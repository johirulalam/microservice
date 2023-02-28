import {Router} from "express";
import controllers from '../controllers';

const router = Router();

router.post('/user-update', controllers.updateUser);
router.delete('/user-delete', controllers.deleteUser);

export default router;