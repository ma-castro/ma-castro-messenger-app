import asyncHandler from 'express-async-handler';
import {generateToken} from '../helpers/jwt-helper';
import makeLogger from '../helpers/logger-helper';
import sendJSONResponse from '../helpers/response-helper';
import {User} from '../models';

const logger = makeLogger('controllers:auth-controller');

const loginUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if (user && (await user.matchPassword(password))) {
    return sendJSONResponse(res, 200, {
      status: 'success',
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        middleName: user.middleName,
        email: user.email,
        avatar: user.avatar,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      token: generateToken(user.id),
    });
  }

  const error = 'Invalid Email or Password.';
  logger.error(`@login: ${error}`);
  return sendJSONResponse(res, 401, {
    status: 'failed',
    message: error,
  });
});

const fetchAuthUser = asyncHandler(async (req, res) => {
  return sendJSONResponse(res, 200, {user: req.user});
});

export {loginUser, fetchAuthUser};
