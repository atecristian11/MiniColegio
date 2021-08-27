const express = require("express");
const router = express.Router();
const TeacherController = require("../controllers/teacher");

router.post("/registerTeacher", TeacherController.registerTeacher);
router.get("/listTeacher", TeacherController.listTeacher);

module.exports = router;
