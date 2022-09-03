import pino from 'pino';
import config from '../config';

const logger = pino({
  level: config.isProd ? 'info' : 'debug',
});

const makeLogger = name => {
  return logger.child({module: name});
};

export default makeLogger;
