const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const teacherSchema = new mongoose.Schema({
  nameT: String,
  email: String,
  cedula: String,
  phone: String,
  password: String,
  roleId: { type: mongoose.Schema.ObjectId, ref: "role" },
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

teacherSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      nameT: this.nameT,
      cedula: this.cedula,
      phone: this.phone,
      roleId: this.roleId,
      iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};

const teacher = mongoose.model("teacher", teacherSchema);
module.exports = teacher;
