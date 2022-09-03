import express from 'express';
import authRoutes from './auth-route';
import conversationRoutes from './conversation-route';
import messageRoutes from './message-route';
import userRoutes from './user-route';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/message', messageRoutes);
router.use('/conversation', conversationRoutes);

export default router;
