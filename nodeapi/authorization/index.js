const expressJwt = require('express-jwt');
const dotenv = require('dotenv');
dotenv.config();

// require signin
exports.requireSignin = expressJwt({
  // if the token is valid, express jwt appends the verified users id
  // in an auth key to the erquest object
  secret: 'ASDLKJASLDKALSKDASKDLAKSLDAKSLDAKSLDKALKDSKAS',
  userProperty: 'auth'
});

// has authorization
exports.hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id && req.auth._id;
  if (!authorized) {
    return res.status(403).json({
      error: 'User is not aothorized to perform this action'
    });
  }
  next();
};

// is poster
exports.isPoster = (req, res, next) => {
  let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id;

  if (!isPoster) {
    return res.status(403).json({
      error: 'User is not authorized!'
    });
  }
  next();
};
