import express from 'express';
import {fetchAuthUser, loginUser} from '../controllers/auth-controller';
import {protectRoute} from '../helpers/jwt-helper';
import {validateLogin} from '../validations/user-validation';

const router = express.Router();

router.post('/', validateLogin, loginUser);
router.get('/', protectRoute(), fetchAuthUser);

export default router;
