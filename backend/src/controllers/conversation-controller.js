import asyncHandler from 'express-async-handler';
import makeLogger from '../helpers/logger-helper';
import sendJSONResponse from '../helpers/response-helper';
import {Conversation} from '../models';

const logger = makeLogger('controllers:conversation-controller');

const fetchConversationsList = asyncHandler(async (req, res) => {
  try {
    const conversations = await Conversation.find({
      members: {$in: [req.user.id]},
    });

    if (!conversations) {
      throw new Error('There is a problem fetching conversations.');
    }

    return sendJSONResponse(res, 200, {
      conversations,
    });
  } catch (error) {
    logger.error(`@fetchConversationsList: ${error.message}`);
    return sendJSONResponse(res, 500, {error: error.message});
  }
});

const createOrGetConversation = asyncHandler(async (req, res) => {
  const {name, members} = req.body;

  try {
    const hasExistingConversation = await Conversation.findOne({
      members: {
        $all: members,
      },
    }).populate('members', '-password');

    if (hasExistingConversation) {
      return sendJSONResponse(res, 200, {
        message: 'Conversation has been retrieved.',
        conversation: hasExistingConversation,
      });
    }

    const isGroupChat = members.length > 2;

    const createdConversation = await Conversation.create({
      name,
      isGroupChat,
      members,
      admins: [req.user.id],
    });

    const fullConversation = await Conversation.findById(
      createdConversation.id,
    ).populate('members', '-password');

    if (!createdConversation || !fullConversation) {
      throw new Error(
        'There is a problem processing your request, Please try again.',
      );
    }

    return sendJSONResponse(res, 200, {
      message: 'Conversation has been created.',
      conversation: fullConversation,
    });
  } catch (error) {
    logger.error(`@createOrGetConversation: ${error.message}`);
    return sendJSONResponse(res, 500, {error: error.message});
  }
});

export {fetchConversationsList, createOrGetConversation};
