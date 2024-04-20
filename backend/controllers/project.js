const Project = require("../models/Project.js");
const fs = require("fs").promises;

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });

    if (project) res.status(200).json(project);
    else res.status(404).json({ message: "Project not found" });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createProject = async (req, res) => {
  try {
    const projectObject = JSON.parse(req.body.project);
    delete projectObject._id;
    delete projectObject._userId;
    const project = new Project({
      ...projectObject,
      userId: req.auth.userId,
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
    });

    await project.save();
    res.status(201).json({ message: "Project created" });
  } catch (error) {
    res.status(500).json(error);
  }
};


exports.modifyProject = async (req, res) => {
  try {
    const projectObject = req.file
      ? {
          ...JSON.parse(req.body.project),
          imageUrl: `${req.protocol}://${req.get("host")}/images/${
            req.file.filename
          }`,
        }
      : { ...req.body };

    delete projectObject._userId;
    const project = await Project.findOne({ _id: req.params.id });

    if (!project) return res.status(404).json({ message: "Project not found" });

    if (project.userId != req.auth.userId)
      return res.status(403).json({ message: "unauthorized request" });

    const oldImageFilename = project.imageUrl.split("/images/")[1];

    const updatedProject = await Project.updateOne(
      { _id: req.params.id },
      { ...projectObject, _id: req.params.id }
    );

    if (updatedProject) {
      if (req.file) {
        await fs.unlink(`images/${oldImageFilename}`);
      }
      res.status(200).json({ message: "Project modified" });
    } else {
      res.status(400).json({ error: "Error during modification" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (project.userId != req.auth.userId)
      return res.status(403).json({ message: "unauthorized request" });

    const filename = project.imageUrl.split("/images/")[1];

    await Project.deleteOne({ _id: req.params.id });
    await fs.unlink(`images/${filename}`);
    res.status(200).json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};
