const About = require("../models/about");
const fs = require("fs");
const formidable = require("formidable");
const _ = require("lodash");

//
// ─── GET ALL EVENTS ─────────────────────────────────────────────────────────────
//
exports.getAllAbout = async (req, res) => {
  await About.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
};

//
// ─── EDIT ABOUT ─────────────────────────────────────────────────────────────────
//

exports.updateAbout = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: err
      });
    }

    About.findById(req.params.id, (err, about) => {
      if (err) {
        console.log(err);
      }

      let data = _.extend(about, fields);
      data.update(Date.now());

      if (files.file) {
        data.photo.data = fs.readFileSync(files.file.path);
        about.photo.contentType = files.file.type;
      }

      about.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: err
          });
        }
        res.json(about);
      });
    });
  });
};

//
// ─── ADD ABOUT ──────────────────────────────────────────────────────────────────
//

exports.addAbout = async (req, res) => {
  const about = new About({
    title: req.body.title,
    description: req.body.description,
    body: req.body.body
  });

  await about
    .save()
    .then(result => {
      res.status(200).json({ result });
    })
    .catch(err => {
      console.log(err);
    });
};
