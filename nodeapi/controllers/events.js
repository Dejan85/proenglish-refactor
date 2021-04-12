const Events = require("../models/events");

//
// ─── CREATE EVENT ──────────────────────────────────────────────────────────────
//

exports.createEvent = async (req, res) => {
  console.log(req.body);
  const newEvents = new Events({
    title: req.body.title,
    time: req.body.time,
    description: req.body.description,
    date: req.body.date
  });

  await newEvents
    .save()
    .then(result => {
      res.status(200).json({ result });
    })
    .catch(err => {
      console.log(err);
    });
};

//
// ─── GET ALL EVENTS ─────────────────────────────────────────────────────────────
//

exports.getAllEvents = async (req, res) => {
  await Events.find({})
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      console.log(err);
    });
};

//
// ─── UPDATE EVENT ───────────────────────────────────────────────────────────────
//

exports.updateEvent = async (req, res) => {
  await Events.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ result });
    }
  });
};

//
// ─── DELETE EVENTS ───────────────────────────────────────────────────────────────
//

exports.deleteEvent = async (req, res) => {
  await Events.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      console.log("you cant delete this item");
    } else {
      res.status(200).json({ result });
    }
  });
};
