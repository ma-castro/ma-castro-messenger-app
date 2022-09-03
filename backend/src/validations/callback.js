import {validationResult} from 'express-validator';
import makeLogger from '../helpers/logger-helper';

const logger = makeLogger('validation');

const sendJSONResponse = (res, status, content) => {
  res.status(status).send(content);
};

const callback = (req, res, next) => {
  const errors = validationResult(req);
  logger.error(errors.array());

  if (!errors.isEmpty()) {
    return sendJSONResponse(res, 400, {errors: errors.array()});
  }
  return next();
};

export default callback;
