import mongoose from 'mongoose';
import makeLogger from '../helpers/logger-helper';
import config from './index';

const logger = makeLogger('db');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.info(`🔗 MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    logger.error(`❌ Error: ${err.message}`);
    process.exit();
  }
};

export default connectDB;
