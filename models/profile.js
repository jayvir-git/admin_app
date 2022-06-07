import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  linkedin: String,
  Whatsapp: String,
  Skype: String,
  Behance: String,
  Dribble: String,
});

const Profile = mongoose.model('Profile', ProfileSchema);
export default Profile;
