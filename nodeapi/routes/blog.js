const express = require("express");
const router = express.Router();

//halpers
const { userById, postById } = require("../halpers");

// controllers
const {
  createBlog,
  getBlog,
  postPhoto,
  editBlog,
  deleteBlog
} = require("../controllers/blog");

const { requireSignin } = require("../authorization");

router.post("/new/:userId", requireSignin, createBlog);
router.get("/get", getBlog);
router.get("/image/:id", postPhoto);
router.put("/edit/:id", requireSignin, editBlog);
router.delete("/remove/:id", requireSignin, deleteBlog);

// param
router.param("userId", userById);
// router.param("postId", postById); // any route containing :postById, our app will first execute postById()

module.exports = router;
