import express from 'express';
import {
  addProjects,
  getProjects,
  editProjects,
  deleteProject,
  getProfile,
  editProfile,
  getInquiries,
  addInquiry,
  deleteInquiry,
  getFeedback,
  addFeedback,
  deleteFeedback,
} from './controllers.js';
import upload from './multer.js';
const router = express.Router();

//project
router.get('/projects', getProjects);
router.post('/addProject', upload.array('image'), addProjects);
router.post('/editProject', upload.array('image'), editProjects);
router.post('/deleteProject', deleteProject);

//profile
router.get('/profile', getProfile);
router.post('/editProfile', editProfile);

//inquiry
router.get('/inquiries', getInquiries);
router.post('/addInquiry', addInquiry);
router.post('/deleteInquiry', deleteInquiry);

//feedback
router.get('/feedback', getFeedback);
router.post('/addFeedback', upload.array('image'), addFeedback);
router.post('/deleteFeedback', deleteFeedback);

export default router;
