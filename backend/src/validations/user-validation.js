import {check} from 'express-validator';
import {User} from '../models';
import callback from './callback';

const validateUserRegistration = [
  check('firstName', 'First name is required.').not().isEmpty(),
  check('lastName', 'Last name is required.').not().isEmpty(),
  check('email', 'Email is required.').not().isEmpty(),
  check('email', 'Please enter a valid email address.').isEmail(),
  check('email', 'Email is already registered.').custom(async value => {
    const isExistingEmail = await User.findOne({email: value});
    return isExistingEmail
      ? // eslint-disable-next-line prefer-promise-reject-errors
        Promise.reject('Email is already registered.')
      : true;
  }),
  check('password', 'Password field is required.').not().isEmpty(),
  check('confirmPassword', 'Confirm Password field is required.')
    .not()
    .isEmpty(),
  check(
    'confirmPassword',
    'Confirm password field must have the same value as the password field.',
  ).custom((value, {req}) => value === req.body.password),
  callback,
];

const validateLogin = [
  check('email', 'Email is required.').not().isEmpty(),
  check('email', 'Please enter a valid email address.').isEmail(),
  check('password', 'Password is required.').not().isEmpty(),
  callback,
];

export {validateUserRegistration, validateLogin};
