import mongoose from "mongoose";

const examsSchema = new mongoose.Schema({
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
        required: true
    },
    postedBy: {
        type: String,
        required: true
    },
    // photo: {
    //   data: Buffer,
    //   contentType: String
    // },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date
});

const ExamsModel = mongoose.model("Exams", examsSchema);

export default ExamsModel;
