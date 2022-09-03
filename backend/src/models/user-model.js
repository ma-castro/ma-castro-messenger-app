import bcrypt from 'bcryptjs';
import capitalize from 'capitalize';
import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    firstName: {type: 'String', required: true},
    lastName: {type: 'String', required: true},
    middleName: {type: 'String'},
    email: {type: 'String', unique: true, required: true},
    password: {type: 'String', required: true},
    avatar: {type: 'String', required: true, default: 'anonymous-avatar.jpg'},
  },
  {timestamps: true},
);

UserSchema.set('toJSON', {
  virtuals: true,
});
UserSchema.path('firstName').set(v => {
  return capitalize.words(v);
});
UserSchema.path('lastName').set(v => {
  return capitalize.words(v);
});
UserSchema.path('middleName').set(v => {
  return capitalize.words(v);
});

// eslint-disable-next-line func-names
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  return next();
});

// eslint-disable-next-line func-names
UserSchema.methods.matchPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;
