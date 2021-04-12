const fs = require("fs");

exports.nweBlog = async (req, res) => {
  const jsonString = JSON.stringify(req.body);
  await fs.writeFile(__dirname + "/json/blog/blog.json", jsonString, err => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
};
