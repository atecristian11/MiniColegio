const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name1: String,
  jornada: String,
  school: String,
  matterId: { type: mongoose.Schema.ObjectId, ref: "matter" },
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const course = mongoose.model("course", courseSchema);
module.exports = course;
