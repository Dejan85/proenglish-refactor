import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    time: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date
});

const EventsModel = mongoose.model("Event", eventsSchema);

export default EventsModel;
