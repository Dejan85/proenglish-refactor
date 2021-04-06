const express = require("express");
const router = express.Router();

//halpers
const { userById, postById } = require("../halpers");

// controllers
const {
  createEvent,
  getAllEvents,
  deleteEvent,
  updateEvent
} = require("../controllers/events");

//authorization
const { requireSignin } = require("../authorization");

router.post("/new", createEvent);
router.get("/get", getAllEvents);
router.put("/update/:id", updateEvent);
router.delete("/remove/:id", deleteEvent);

// param
router.param("userId", userById);

module.exports = router;
