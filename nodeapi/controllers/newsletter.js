const request = require("request");
const dotenv = require("dotenv");
const Mailchimp = require("mailchimp-api-v3");
const mailchimp = new Mailchimp(process.env.NEWSLATTER_API_KEY);
dotenv.config();

exports.newsletter = (req, res, next) => {
  const email = req.body.email;
  const dataCenter = "";
  const apiKey = `apiKey ${process.env.NEWSLATTER_API_KEY}`;
  const listId = "";

  const options = {
    url: "https://us3.api.mailchimp.com/3.0/lists/7bbffb3ecc/members",

    method: "POST",
    headers: {
      "Content-Type": "appllication/json",
      Authorization: apiKey,
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  };

  // "merge_fields": {}

  request(options, (error, response, body) => {
    try {
      let respObj = {};
      if (response.statusCode === 200) {
        respObj = {
          success: `Subscribed using ${email}`,
          message: JSON.parse(response.body),
        };
      } else {
        respObj = {
          error: `Error trying to subscribe ${email}. Please try again.`,
          message: JSON.parse(response.body),
        };
      }
    } catch (err) {
      let respErrorObj = {
        error: "There was an error with your requiest",
        message: err.message,
      };
      res.json(JSON.stringify(respErrorObj));
    }
  });

  // next();
};
