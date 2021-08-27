const Course = require("../models/course");
const Matter = require("../models/matter");

const registerCourse = async (req, res) => {
  if (
    !req.body.name1 ||
    !req.body.jornada ||
    !req.body.school ||
    !req.body.nameM
  )
    return res.status(400).send("Incomplete data");

  let existingCourse = await Course.findOne({ name1: req.body.name1 });
  if (existingCourse) return res.status(400).send("The course already exists");

  let matter = await Matter.findOne({ nameM: req.body.nameM });
  if (!matter) return res.status(400).send("No matter was assigned");

  let course = new Course({
    name1: req.body.name1,
    jornada: req.body.jornada,
    school: req.body.school,
    matterId: matter._id,
    dbStatus: true,
  });

  let result = await course.save();
  if (!result) return res.status(400).send("Failed to register course");
  return res.status(200).send({ result });
};

const listCourse = async (req, res) => {
  let course = await Course.find({
    name1: new RegExp(req.params["name1"], "i"),
  })
    .populate("matterId")
    .exec();
  if (!course || course.length === 0)
    return res.status(400).send("No search results");
  return res.status(200).send({ course });
};

module.exports = { registerCourse, listCourse };
