const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/student");
const Teacher = require("../middleware/validateStudent")

router.post("/registerStudent", validateStudent, StudentController.registerStudent);
router.get("/listStudent", validateStudent, StudentController.listStudent);

module.exports = router;
