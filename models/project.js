import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  screenshots: {
    type: [Object],
    required: true,
  },
});

const Project = mongoose.model('Project', ProjectSchema);
export default Project;
