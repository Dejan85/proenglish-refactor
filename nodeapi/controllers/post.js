const Post = require("../models/post");
const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");

// get all posts
exports.getPosts = (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .populate("comments", "text created")
    .populate("comments.postedBy", "_id name")
    .select("_id title body created likes")
    .sort({ created: -1 })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
    });
};

// create post
exports.createPost = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded"
      });
    }

    let post = new Post(fields);

    req.profile.salt = undefined;
    req.profile.hashed_password = undefined;

    post.postedBy = req.profile;
    if (files.photo) {
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }

    post.save((err, result) => {
      if (err) {
        res.status(400).json({
          err
        });
      }
      res.json(result);
    });
  });
};

// get all posts by user
exports.postsByUser = (req, res) => {
  Post.find({ postedBy: req.profile._id })
    .populate("postedBy", "_id name")
    .select("_id title body created likes")
    .sort("_created")
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      res.json(posts);
    });
};

// edit post
exports.updatePost = (req, res, next) => {
  let form = formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Photo could not be uploaded"
      });
    }

    // save post
    let post = req.post;
    post = _.extend(post, fields);
    post.updated = Date.now();

    if (files.photo) {
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }

    post.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }

      res.json(post);
    });
  });
};

// delete post
exports.deletePost = (req, res) => {
  let post = req.post;

  post.remove((err, post) => {
    if (err) {
      res.status(400).json(err);
    }
    res.json({
      message: "Post deleted succesfully!"
    });
  });
};

// get photo
exports.postPhoto = (req, res, next) => {
  res.set("Content-Type", req.post.photo.contentType);
  return res.send(req.post.photo.data);
};

// single post
exports.singlePost = (req, res) => {
  return res.json(req.post);
};

// like
exports.like = (req, res, next) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.body.userId }
    },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    } else {
      res.json(result);
    }
  });
};

// unlike
exports.unlike = (req, res, next) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.body.userId }
    },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    } else {
      res.json(result);
    }
  });
};

// comment
exports.comment = (req, res) => {
  let comment = req.body.comment;
  comment.postedBy = req.body.userId;

  Post.findByIdAndUpdate(
    req.body.postId,
    { $push: { comments: comment } },
    { new: true }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      } else {
        res.json(result);
      }
    });
};

// uncomment
exports.uncomment = (req, res, next) => {
  let comment = req.body.comment;

  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { comments: { _id: comment._id } }
    },
    { new: true }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      } else {
        res.json(result);
      }
    });
};
