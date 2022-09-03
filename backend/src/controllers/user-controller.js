import asyncHandler from 'express-async-handler';
import makeLogger from '../helpers/logger-helper';
import sendJSONResponse from '../helpers/response-helper';
import {User} from '../models';

const logger = makeLogger('controllers:user-controller');

const registerUser = asyncHandler(async (req, res) => {
  const {firstName, lastName, middleName, email, password, avatar} = req.body;

  try {
    const userCreated = await User.create({
      firstName,
      lastName,
      middleName,
      email,
      password,
      avatar,
    });

    if (!userCreated) {
      throw new Error(
        'There was an error with your registration, Please try again.',
      );
    }

    const fullUser = await User.findOne({id: userCreated.id});

    return sendJSONResponse(res, 201, {
      message: 'User has been registered successfully.',
      data: fullUser,
    });
  } catch (error) {
    logger.error(`@registerUser: ${error.message}`);
    return sendJSONResponse(res, 500, {error: error.message});
  }
});

const fetchUsersList = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});

    if (!users) {
      throw new Error('There is a problem fetching users.');
    }

    return sendJSONResponse(res, 200, {
      data: users,
    });
  } catch (error) {
    logger.error(`@fetchUsersList: ${error.message}`);
    return sendJSONResponse(res, 500, {error: error.message});
  }
});

const fetchUserData = asyncHandler(async (req, res) => {
  const {id} = req.params;

  try {
    const user = await User.findOne({id});

    if (!user) {
      throw new Error('There is a problem fetching user data.');
    }

    return sendJSONResponse(res, 200, {
      data: user,
    });
  } catch (error) {
    logger.error(`@fetchUserData: ${error.message}`);
    return sendJSONResponse(res, 500, {error: error.message});
  }
});

export {registerUser, fetchUserData, fetchUsersList};
