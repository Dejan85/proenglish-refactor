const User = require("../models/user");
const Blog = require("../models/post");
const nodeMailer = require("nodemailer");
const defaultEmailData = { from: "noreply@node-react.com" };

// get user by id
exports.userById = (req, res, next, id) => {
  User.findById(id)
    .populate("following", "_id name")
    .populate("followers", "_id name")
    .exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: "User not found"
        });
      }
      req.profile = user; // adds profile object in req with user info
      next();
    });
};

// post by id
exports.postById = (req, res, next, id) => {};

exports.sendEmail = emailData => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "youremail@gmail.com",
      pass: "kshzlmomlthllktq"
    }
  });
  return transporter
    .sendMail(emailData)
    .then(info => console.log(`Message sent: ${info.response}`))
    .catch(err => console.log(`Problem sending email: ${err}`));
};
