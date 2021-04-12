const express = require("express");
const router = express.Router();

// controllers
const {
  getCourse,
  gre,
  ielts,
  gmat,
  bocconi,
  toefl,
  sat
} = require("../controllers/data/data");

const { nweBlog } = require("../controllers/data/blogData");

// course
router.get("/", getCourse);

// exams
router.get("/gre", gre);
router.get("/ielts", ielts);
router.get("/gmat", gmat);
router.get("/bocconi", bocconi);
router.get("/toefl", toefl);
router.get("/sat", sat);

//blog
router.post("/blog/new", nweBlog);

module.exports = router;
