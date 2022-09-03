import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import {ExtractJwt, Strategy as JWTStrategy} from 'passport-jwt';
import config from '../config';
import {User} from '../models';

const applyJwtAuthentication = server => {
  server.use(passport.initialize());

  passport.use(
    new JWTStrategy(
      {
        secretOrKey: config.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      asyncHandler(async (token, done) => {
        const userData = await User.findOne({id: token.id});

        if (userData) {
          done(null, userData);
        } else {
          done('User token is invalid.', false);
        }
      }),
    ),
  );
};

const generateToken = id => {
  return jwt.sign({id}, config.jwtSecret, {
    expiresIn: '30d',
  });
};

const protectRoute = () => {
  return passport.authenticate('jwt', {session: false});
};

export {applyJwtAuthentication, generateToken, protectRoute};
