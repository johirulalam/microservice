import { Router } from "express";
import controllers from '../controllers';
import userValidate from "../models/view-models/user-view-models";
import handleValidation from "../middlewares/handleValidation";


const router = Router();


router.post('/signup',handleValidation(userValidate), controllers.signup);
router.post('/login', controllers.login);

export default router;
