import express from 'express';
import {
  createOrGetConversation,
  fetchConversationsList,
} from '../controllers/conversation-controller';
import {protectRoute} from '../helpers/jwt-helper';
import validateCreateConversation from '../validations/conversation-validation';

const router = express.Router();

router.get('/', protectRoute(), fetchConversationsList);
router.post(
  '/',
  protectRoute(),
  validateCreateConversation,
  createOrGetConversation,
);

export default router;
