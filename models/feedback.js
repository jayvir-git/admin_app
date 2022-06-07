import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  picture: {
    type: Object,
    required: true,
  },
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);
export default Feedback;
