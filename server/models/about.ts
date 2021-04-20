import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String,
        require: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date
});

const AboutModel = mongoose.model("About", aboutSchema);

export default AboutModel;
