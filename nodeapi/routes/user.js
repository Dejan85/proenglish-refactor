const express = require("express");
const router = express();

// halpers
const { userById } = require("../halpers");

// authorization
const { requireSignin } = require("../authorization");

// validator

// controllers
const {
  allUsers,
  getUser,
  updateUser,
  deleteUser,
  userPhoto,
  addFollowing,
  addFollower,
  removeFollowing,
  removeFollower,
  findPeople,
} = require("../controllers/user");

// followers and following
router.put("/user/follow", requireSignin, addFollowing, addFollower);
router.put("/user/unfollow", requireSignin, removeFollowing, removeFollower);
// route
router.get("/users", allUsers);
router.get("/user/:userId", requireSignin, getUser);
router.put("/user/:userId", requireSignin, updateUser);
router.delete("/user/:userId", requireSignin, deleteUser);
// photo
router.get("/user/photo/:userId", userPhoto);
// who to follow
router.get("/user/findpeople/:userId", requireSignin, findPeople);

// param
router.param("userId", userById); // any route containing :userId, our app will first execute userById()

module.exports = router;
