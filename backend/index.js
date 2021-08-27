const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Student = require("./routes/student");
const Role = require("./routes/role");
const Course = require("./routes/course");
const Teacher = require("./routes/teacher");
const Matter = require("./routes/matter");
require("dotenv").config();

require("dotenv").config();

const cri = express();

cri.use(express.json());
cri.use(cors());
cri.use("/api/student", Student);
cri.use("/api/role", Role);
cri.use("/api/course", Course);
cri.use("/api/teacher", Teacher);
cri.use("/api/matter", Matter);

cri.listen(process.env.PORT, () =>
  console.log("Backend server running OK, on port: ", process.env.PORT)
);

dbConnection();
