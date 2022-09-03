import {check} from 'express-validator';
import callback from './callback';

const validateCreateConversation = [
  check('name', 'Conversation name cannot be empty.').not().isEmpty(),
  check('members', 'Members is not on a proper format.').isArray(),
  check('members', 'Members cannot be empty.').notEmpty(),
  callback,
];

export default validateCreateConversation;
