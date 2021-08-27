const express = require("express");
const router = express.Router();
const TeacherController = require("../controllers/teacher");
const Teacher = require("../middleware/validateTeacher")

router.post("/registerTeacher", validateTeacher, TeacherController.registerTeacher);
router.get("/listTeacher", validateTeacher, TeacherController.listTeacher);

module.exports = router;
