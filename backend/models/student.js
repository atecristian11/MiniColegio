const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  cedula: String,
  phone: String,
  password: String,
  roleId: { type: mongoose.Schema.ObjectId, ref: "role" },
  courseId: { type: mongoose.Schema.ObjectId, ref: "course" },
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

studentSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      cedula: this.cedula,
      phone: this.phone,
      roleId: this.roleId,
      courseId: this.courseId,
      iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};

const student = mongoose.model("student", studentSchema);
module.exports = student;
