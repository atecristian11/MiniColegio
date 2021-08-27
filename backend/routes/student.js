const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/student");

router.post("/registerStudent", StudentController.registerStudent);
router.get("/listStudent", StudentController.listStudent);

module.exports = router;
