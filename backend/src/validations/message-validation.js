import {check} from 'express-validator';
import callback from './callback';

const validateSendingMessage = [
  check('content', 'Message content cannot be empty.')
    .escape()
    .trim()
    .not()
    .isEmpty(),
  callback,
];

export default validateSendingMessage;
