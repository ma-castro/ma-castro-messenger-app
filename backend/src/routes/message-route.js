import express from 'express';
import {
  fetchMessagesList,
  sendMessage,
} from '../controllers/message-controller';
import {protectRoute} from '../helpers/jwt-helper';
import validateSendingMessage from '../validations/message-validation';

const router = express.Router();

router.post(
  '/:conversationId',
  protectRoute(),
  validateSendingMessage,
  sendMessage,
);
router.get('/:conversationId', protectRoute(), fetchMessagesList);

export default router;
