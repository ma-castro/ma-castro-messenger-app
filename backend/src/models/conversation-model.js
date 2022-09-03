import mongoose from 'mongoose';

const ConversationSchema = mongoose.Schema(
  {
    name: {type: String, trim: true, required: true},
    isGroupChat: {type: Boolean, default: false},
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },
    admins: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  },
  {timestamps: true},
);

ConversationSchema.set('toJSON', {
  virtuals: true,
});

const Conversation = mongoose.model('Conversation', ConversationSchema);

export default Conversation;
