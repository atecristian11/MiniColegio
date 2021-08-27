const express = require("express");
const router = express.Router();
const MatterController = require("../controllers/matter");

router.post("/registerMatter", MatterController.registerMatter);
router.get("/listMatter", MatterController.listMatter);

module.exports = router;
