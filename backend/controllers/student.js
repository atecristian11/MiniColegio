const bcrypt = require("bcrypt");
const Student = require("../models/student");
const Role = require("../models/role");
const Course = require("../models/course");
const Matter = require("../models/matter");

const registerStudent = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.cedula ||
    !req.body.phone ||
    !req.body.name1 ||
    !req.body.password
  )
    return res.status(400).send("Incomplete data");

  let existingUser = await Student.findOne({ email: req.body.email });
  if (existingUser)
    return res.status(400).send("The student is already registered");

  let hash = await bcrypt.hash(req.body.password, 10);

  let role = await Role.findOne({ name: "user" });
  if (!role) return res.status(400).send("No role was assigned");

  let course = await Course.findOne({ name1: req.body.name1 });
  if (!course) return res.status(400).send("No course was assigned");

  let student = new Student({
    name: req.body.name,
    email: req.body.email,
    cedula: req.body.cedula,
    phone: req.body.phone,
    password: hash,
    roleId: role._id,
    courseId: course._id,
    dbStatus: true,
  });

  let result = await student.save();
  if (!result) return res.status(400).send("Failed to register student");
  try {
    let jwtToken = student.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }
};

const listStudent = async (req, res) => {
  let student = await Student.find({
    name: new RegExp(req.params["name"], "i"),
  })
    .populate("roleId")
    .populate("courseId")
    .exec();
  if (!student || student.length === 0)
    return res.status(400).send("No search results");
  return res.status(200).send({ student });
};

module.exports = { registerStudent, listStudent };
