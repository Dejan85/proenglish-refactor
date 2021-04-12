const fs = require("fs");

exports.getCourse = async (req, res) => {
  await fs.readFile(
    __dirname + "/json/course/course.json",
    "utf8",
    (err, jsonString) => {
      if (err) {
        return console.log("File read failed:", err);
      }
      return res.json(JSON.parse(jsonString));
    }
  );
};

exports.gre = async (req, res) => {
  console.log(req.url);
  await fs.readFile(
    __dirname + "/json/exams/gre.json",
    "utf8",
    (err, jsonString) => {
      if (err) {
        return console.log("File read failed:", err);
      }
      return res.json(JSON.parse(jsonString));
    }
  );
};

exports.ielts = async (req, res) => {
  await fs.readFile(
    __dirname + "/json/exams/ielts.json",
    "utf8",
    (err, jsonString) => {
      if (err) {
        return console.log("File read failed:", err);
      }
      return res.json(JSON.parse(jsonString));
    }
  );
};

exports.gmat = async (req, res) => {
  await fs.readFile(
    __dirname + "/json/exams/gmat.json",
    "utf8",
    (err, jsonString) => {
      if (err) {
        return console.log("File read failed:", err);
      }
      return res.json(JSON.parse(jsonString));
    }
  );
};

exports.bocconi = async (req, res) => {
  await fs.readFile(
    __dirname + "/json/exams/bocconi.json",
    "utf8",
    (err, jsonString) => {
      if (err) {
        return console.log("File read failed:", err);
      }
      return res.json(JSON.parse(jsonString));
    }
  );
};

exports.toefl = async (req, res) => {
  await fs.readFile(
    __dirname + "/json/exams/toefl.json",
    "utf8",
    (err, jsonString) => {
      if (err) {
        return console.log("File read failed:", err);
      }
      return res.json(JSON.parse(jsonString));
    }
  );
};

exports.sat = async (req, res) => {
  await fs.readFile(
    __dirname + "/json/exams/sat.json",
    "utf8",
    (err, jsonString) => {
      if (err) {
        return console.log("File read failed:", err);
      }
      return res.json(JSON.parse(jsonString));
    }
  );
};
