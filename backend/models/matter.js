const mongoose = require("mongoose");

const matterSchema = new mongoose.Schema({
  nameM: String,
  teacherId: { type: mongoose.Schema.ObjectId, ref: "teacher" },
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const matter = mongoose.model("matter", matterSchema);
module.exports = matter;
