const Exams = require("../models/exams");
const fs = require("fs");
const formidable = require("formidable");
const _ = require("lodash");

//create exams
exports.createExams = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  await form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "Image could not be uploaded"
      });
    }

    let exams = new Exams(fields);

    exams.postedBy = req.profile.firstname;

    if (files.file) {
      exams.photo.data = fs.readFileSync(files.file.path);
      exams.photo.contentType = files.file.type;
    }

    exams.save((err, result) => {
      if (err) {
        console.log(err);

        res.status(400).json({
          err
        });
      }
      res.json(result);
    });
  });
};

//get exams
exports.getExams = async (req, res) => {
  await Exams.find()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
};

//edit exams
exports.editExams = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: err
      });
    }

    Exams.findById(req.params.id, (err, exams) => {
      if (err) {
        console.log(err);
      }

      let data = _.extend(exams, fields);
      data.update(Date.now());

      if (files.file) {
        data.photo.data = fs.readFileSync(files.file.path);
        exams.photo.contentType = files.file.type;
      }

      exams.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: err
          });
        }
        res.json(exams);
      });
    });
  });
};

// delete exams
exports.deleteExams = async (req, res) => {
  await Exams.findOneAndDelete({ _id: req.params.id }, (err, response) => {
    if (err) {
      res.status(400).json(err);
    }
    res.json({
      message: "Exam deleted succesfully!"
    });
  });
};
