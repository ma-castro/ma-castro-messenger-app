import createError from 'http-errors';
import makeLogger from '../helpers/logger-helper';

const logger = makeLogger('route');

const notFoundHandler = (req, res, next) => {
  next(createError(404, 'The page you requested was not found.'));
};

const errorHandler = (err, req, res) => {
  logger.error({err});
  return res.status(err.statusCode || 500).json({
    error: {
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    },
  });
};

export {notFoundHandler, errorHandler};
