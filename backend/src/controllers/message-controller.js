import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import makeLogger from '../helpers/logger-helper';
import sendJSONResponse from '../helpers/response-helper';
import {Conversation, Message} from '../models';

const logger = makeLogger('controllers:message-controller');

const sendMessage = asyncHandler(async (req, res) => {
  const {content} = req.body;
  const {conversationId} = req.params;

  if (!conversationId) {
    throw new Error('Conversation was not found.');
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const createdMessage = await Message.create(
      [
        {
          sender: req.user.id,
          content,
          conversation: conversationId,
        },
      ],
      {session},
    );

    const fullMessage = await Message.findOne({
      id: createdMessage[0].id,
    });

    const updatedLastMessage = await Conversation.findByIdAndUpdate(
      conversationId,
      {lastMessage: fullMessage},
    );

    if (!fullMessage || !createdMessage || !updatedLastMessage) {
      throw new Error('There is a problem sending your message.');
    }

    await session.commitTransaction();

    return sendJSONResponse(res, 201, {
      message: 'Message has been sent successfully.',
      messageData: fullMessage,
    });
  } catch (error) {
    await session.abortTransaction();
    logger.error(`@sendMessage: ${error.message}`);
    return sendJSONResponse(res, 500, {error: error.message});
  } finally {
    session.endSession();
  }
});

const fetchMessagesList = asyncHandler(async (req, res) => {
  const {conversationId} = req.params;

  if (!conversationId) {
    throw new Error('Conversation was not found.');
  }

  try {
    const messages = await Message.find({
      conversation: req.params.conversationId,
    });

    if (!messages) {
      throw new Error('There is a problem fetching messages.');
    }

    return sendJSONResponse(res, 200, {
      messages,
    });
  } catch (error) {
    logger.error(`@fetchMessagesList: ${error.message}`);
    return sendJSONResponse(res, 500, {error: error.message});
  }
});

export {sendMessage, fetchMessagesList};
