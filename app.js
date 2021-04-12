const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 6000;
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const cookieParser = require("cookie-parser");
// const fs = require('fs');
const cors = require("cors");
const path = require("path");

//
// ─── DB ─────────────────────────────────────────────────────────────────────────
//
// novi DB
// mongodb+srv://branka:<password>@proenglish.amejb.mongodb.net/proenglish?retryWrites=true&w=majority
mongoose
  // .connect("mongodb://branka:branka123456@ds263156.mlab.com:63156/proenglish", {
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}@proenglish.amejb.mongodb.net/proenglish?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Db Connected");
  });
mongoose.set("useFindAndModify", false);

mongoose.connection.on("error", (err) => {
  console.log(`Db connection error: ${err.message}`);
});

//
// ─── MIDDLEWARE ─────────────────────────────────────────────────────────────────
//

// morgan
app.use(morgan("dev"));
// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// cookie parser
app.use(cookieParser());
// express validator
app.use(expressValidator());
// cors
app.use(cors());

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//

const post = require("./nodeapi/routes/post");
const auth = require("./nodeapi/routes/auth");
const user = require("./nodeapi/routes/user");
const data = require("./nodeapi/routes/data");
const contact = require("./nodeapi/routes/contact");
const newsletter = require("./nodeapi/routes/newsletter");
const blog = require("./nodeapi/routes/blog");
const exams = require("./nodeapi/routes/exams");
const events = require("./nodeapi/routes/events");
const about = require("./nodeapi/routes/about");

app.use("/", post);
app.use("/", auth);
app.use("/", user);
app.use("/data", data);
app.use("/contact", contact);
app.use("/newsletter", newsletter);
app.use("/blog", blog);
app.use("/exams", exams);
app.use("/events", events);
app.use("/about", about);

// express jwt (this is must be below route)
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({
      err: "Unauthorized!",
    });
  }
});

//
// ─── THIS IS SETUP FOR HEROKU DEPLOY ────────────────────────────────────────────
//

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

//
// ─── SERVER CONNECT ─────────────────────────────────────────────────────────────
//

app.listen(port, () => {
  console.log(`Proenglish start on port: ${port}`);
});
