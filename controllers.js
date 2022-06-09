import Project from './models/project.js';
import Profile from './models/profile.js';
import Inquiry from './models/inquiry.js';
import Feedback from './models/feedback.js';

import uploads from './cloudinary.js';
import * as fs from 'fs';

//project routes
export const getProjects = async (req, res) => {
  try {
    const data = await Project.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const addProjects = async (req, res) => {
  // console.log(cloudinary);
  const uploader = async (path) => await uploads(path, 'Images');
  const urls = [];

  if (req.method === 'POST') {
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
  } else {
    console.log('error occured while image uploading');
  }

  // console.log('form data : ', req.body);
  const { title, description, github } = req.body;
  const newProject = new Project({
    title,
    description,
    github,
    screenshots: urls,
  });
  try {
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const editProjects = async (req, res) => {
  // console.log(cloudinary);
  const uploader = async (path) => await uploads(path, 'Images');
  const urls = [];

  if (req.method === 'POST') {
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
  } else {
    console.log('error occured while image uploading');
  }

  const { _id, title, description, github } = req.body;
  Project.updateOne(
    { _id },
    { title, description, github, screenshots: urls },
    (err, updRes) => {
      if (err) {
        console.log('error occured while updating : ', err);
        // res.send(err);
      } else {
        res.status(201).json(updRes);
        // console.log('project updated : ', res);
      }
    }
  );
};

export const deleteProject = async (req, res) => {
  const { toDelete, id } = req.body;
  if (toDelete) {
    const delResponse = await Project.deleteOne({ _id: id });
    res.status(201).json(delResponse);
  }
};

//profile routes
export const getProfile = async (req, res) => {
  try {
    const data = await Profile.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const editProfile = async (req, res) => {
  const data = req.body;
  Profile.replaceOne(
    { _id: data._id },
    data,
    { upsert: true },
    (err, updRes) => {
      if (err) {
        console.log('error occured while updating : ', err);
        // res.send(err);
      } else {
        res.status(201).json(updRes);
        // console.log('project updated : ', res);
      }
    }
  );
};

//inquiries
export const getInquiries = async (req, res) => {
  try {
    const data = await Inquiry.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const addInquiry = async (req, res) => {
  const data = req.body;
  console.log('form data : ', req.body);
  const newInquiry = new Inquiry(data);
  try {
    await newInquiry.save();
    res.status(201).json(newInquiry);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const deleteInquiry = async (req, res) => {
  const { toDelete, id } = req.body;
  if (toDelete) {
    const delResponse = await Inquiry.deleteOne({ _id: id });
    res.status(201).json(delResponse);
  }
};

//feedback
export const getFeedback = async (req, res) => {
  try {
    const data = await Feedback.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const addFeedback = async (req, res) => {
  const uploader = async (path) => await uploads(path, 'Images');
  const urls = [];

  if (req.method === 'POST') {
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
  } else {
    console.log('error occured while image uploading');
  }

  const { name, info } = req.body;
  const newFeedback = new Feedback({
    name: name,
    info: info,
    picture: urls[0],
  });
  try {
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const deleteFeedback = async (req, res) => {
  const { toDelete, id } = req.body;
  if (toDelete) {
    const delResponse = await Feedback.deleteOne({ _id: id });
    res.status(201).json(delResponse);
  }
};
