import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import pino from 'pino-http';

import config from './src/config';
import connectDB from './src/config/db';
import {applyJwtAuthentication} from './src/helpers/jwt-helper';
import makeLogger from './src/helpers/logger-helper';
import {errorHandler, notFoundHandler} from './src/middleware/error-handler';
import apiRoutes from './src/routes/index';

const morgan = require('morgan');

const app = express();
const logger = makeLogger('server');

app.use(pino());
app.use(morgan('dev'));

app.use(compression());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

applyJwtAuthentication(app);

// add api routes
app.use('/api', apiRoutes);

// error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(config.port, () => {
  connectDB();
  logger.info(`🚀 Server is running at http://${config.host}:${config.port}`);
});
