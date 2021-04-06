const express = require("express");
const router = express.Router();

// controllers
const { updateAbout, getAllAbout, addAbout } = require("../controllers/about");

//authorization
const { requireSignin } = require("../authorization");

router.post("/new", addAbout);
router.get("/get", getAllAbout);
router.put("/update/:id", requireSignin, updateAbout);

module.exports = router;
