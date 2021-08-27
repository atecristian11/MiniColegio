const bcrypt = require("bcrypt");
const Teacher = require("../models/teacher");
const Role = require("../models/role");

const registerTeacher = async (req, res) => {
  if (
    !req.body.nameT ||
    !req.body.email ||
    !req.body.cedula ||
    !req.body.phone ||
    !req.body.password
  )
    return res.status(400).send("Incomplete data");

  let existingTeacher = await Teacher.findOne({ email: req.body.email });
  if (existingTeacher)
    return res.status(400).send("The teacher is already registered");

  let hash = await bcrypt.hash(req.body.password, 10);

  let role = await Role.findOne({ name: "admin" });
  if (!role) return res.status(400).send("No role was assigned");

  let teacher = new Teacher({
    nameT: req.body.nameT,
    email: req.body.email,
    cedula: req.body.cedula,
    phone: req.body.phone,
    password: hash,
    roleId: role._id,
    dbStatus: true,
  });

  let result = await teacher.save();
  if (!result) return res.status(400).send("Failed to register teacher");
  try {
    let jwtToken = teacher.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }
};

const listTeacher = async (req, res) => {
  let teacher = await Teacher.find({
    nameT: new RegExp(req.params["nameT"], "i"),
  })
    .populate("roleId")
    .exec();
  if (!teacher || teacher.length === 0)
    return res.status(400).send("No search results");
  return res.status(200).send({ teacher });
};

module.exports = { registerTeacher, listTeacher };
