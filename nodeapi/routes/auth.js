const express = require("express");
const router = express.Router();

// validator
const { userSignupValidator, passwordResetValidator } = require("../validator");

// controllers
const {
  signup,
  signin,
  signout,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

// halpers
const { userById } = require("../halpers");

// route
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);
// password forgot and reset routes
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);

// param
router.param("userId", userById); // any route containing :userId, our app will first execute userById()

module.exports = router;
