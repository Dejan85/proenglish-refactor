//
// ─── POST VALIDATOR ─────────────────────────────────────────────────────────────
//

exports.createPostValidator = (req, res, next) => {
  // title
  req.check("title", "Write a title").notEmpty();
  req.check("title", "Title must be between 4 and 150 characters").isLength({
    min: 4,
    max: 150,
  });
  // body
  req.check("body", "Write a body").notEmpty();
  req.check("body", "Body must be between 4 and 2000 characters").isLength({
    min: 4,
    max: 2000,
  });
  // check for errors
  const errors = req.validationErrors();
  // if error show the first one as they happen
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  // proceed to next middleware
  next();
};

//
// ─── AUTH VALIDATOR ─────────────────────────────────────────────────────────────
//

exports.userSignupValidator = (req, res, next) => {
  // name
  req.check("firstname", "Name is required").notEmpty();
  req.check("firstname", "Name must be between 3 and 20 characters").isLength({
    min: 3,
    max: 20,
  });

  // lastname
  req.check("lastname", "lastname is required").notEmpty();
  req
    .check("lastname", "lastname must be between 3 and 20 characters")
    .isLength({
      min: 3,
      max: 20,
    });

  // email
  req.check("email", "Email is required").notEmpty();
  req
    .check("email", "Body must be between 4 and 2000 characters")
    .isLength({
      min: 3,
      max: 33,
    })
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @");

  // password
  req.check("password", "Password is required").notEmpty();
  req
    .check("password")
    .isLength({
      min: 3,
    })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");

  // check for errors
  const errors = req.validationErrors();
  // if error show the first one as they happen
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  // proceed to next middleware
  next();
};

// Create password reset validator method

exports.passwordResetValidator = (req, res, next) => {
  // check for password
  req.check("newPassword", "Password is required").notEmpty();
  req
    .check("newPassword")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 chars long")
    .matches(/\d/)
    .withMessage("must contain a number")
    .withMessage("Password must contain a number");

  // check for errors
  const errors = req.validationErrors();
  // if error show the first one as they happen
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  // proceed to next middleware or ...
  next();
};
