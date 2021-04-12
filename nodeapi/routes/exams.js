const express = require("express");
const router = express.Router();

//halpers
const { userById, postById } = require("../halpers");

// controllers
const {
  createExams,
  getExams,
  editExams,
  deleteExams
} = require("../controllers/exams");

const { requireSignin } = require("../authorization");

router.post("/new/:userId", requireSignin, createExams);
router.get("/get", getExams);
router.put("/edit/:id", requireSignin, editExams);
router.delete("/remove/:id", requireSignin, deleteExams);

// param
router.param("userId", userById);
// router.param("postId", postById); // any route containing :postById, our app will first execute postById()

module.exports = router;
