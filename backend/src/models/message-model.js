import mongoose from 'mongoose';

const MessageSchema = mongoose.Schema(
  {
    sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    content: {type: String, trim: true},
    conversation: {type: mongoose.Schema.Types.ObjectId, ref: 'Conversation'},
    seenBy: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  },
  {timestamps: true},
);

MessageSchema.set('toJSON', {
  virtuals: true,
});

const Message = mongoose.model('Message', MessageSchema);

export default Message;
