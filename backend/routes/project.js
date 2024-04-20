const express = require("express");
const router = express.Router();
const projectCtrl = require("../controllers/project");
const auth = require("../middlewares/auth");
const { upload, imageMiddleware } = require("../middlewares/multer-config");

router.get("/", projectCtrl.getAllProjects);
router.get("/:id", projectCtrl.getProjectById);

router.post("/", auth, upload, imageMiddleware, projectCtrl.createProject);

router.put("/:id", auth, upload, imageMiddleware, projectCtrl.modifyProject);

router.delete("/:id", auth, projectCtrl.deleteProject);

module.exports = router;
