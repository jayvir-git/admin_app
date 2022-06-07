import express from 'express';
import {
  addProjects,
  getProjects,
  editProjects,
  getProfile,
  editProfile,
  getInquiries,
  addInquiry,
  getFeedback,
  addFeedback,
} from './controllers.js';
import upload from './multer.js';
const router = express.Router();

//project
router.get('/projects', getProjects);
router.post('/addProject', upload.array('image'), addProjects);
router.post('/editProject', upload.array('image'), editProjects);

//profile
router.get('/profile', getProfile);
router.post('/editProfile', editProfile);

//inquiry
router.get('/inquiries', getInquiries);
router.post('/addInquiry', addInquiry);

//feedback
router.get('/feedback', getFeedback);
router.post('/addFeedback', upload.array('image'), addFeedback);

export default router;
