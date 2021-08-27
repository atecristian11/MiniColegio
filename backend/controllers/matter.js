const Teacher = require("../models/teacher");
const Matter = require("../models/matter");

const registerMatter = async (req, res) => {
  if (!req.body.nameM || !req.body.nameT)
    return res.status(400).send("Incomplete data");

  let existingMatter = await Matter.findOne({ nameM: req.body.name1 });
  if (existingMatter) return res.status(400).send("The matter already exists");

  let teacher = await Teacher.findOne({ nameT: req.body.nameT });
  if (!teacher) return res.status(400).send("No teacher was assigned");

  let matter = new Matter({
    nameM: req.body.nameM,
    teacherId: teacher._id,
    dbStatus: true,
  });

  let result = await matter.save();
  if (!result) return res.status(400).send("Failed to register matter");
  return res.status(200).send({ result });
};

const listMatter = async (req, res) => {
  let matter = await Matter.find();
  if (!matter || matter.length === 0)
    return res.status(400).send("Empty role list");
  return res.status(200).send({ matter });
};

module.exports = { registerMatter, listMatter };
