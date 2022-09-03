import express from 'express';
import {
  fetchUserData,
  fetchUsersList,
  registerUser,
} from '../controllers/user-controller';
import {protectRoute} from '../helpers/jwt-helper';
import {validateUserRegistration} from '../validations/user-validation';

const router = express.Router();

router.post('/', validateUserRegistration, registerUser);
router.get('/', protectRoute(), fetchUsersList);
router.get('/:id', protectRoute(), fetchUserData);

export default router;
