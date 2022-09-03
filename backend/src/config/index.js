import dotenv from 'dotenv';

dotenv.config();

export default {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 5000,
  isProduction: process.env.NODE_ENV === 'production',
  jwtSecret: process.env.JWT_SECRET,
  mongoDbUrl: process.env.MONGODB_URI,
};
