import dontenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
dontenv.config();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;
import { blogRouts } from './routes';


app.use(bodyParser.json({ limit: "150kb" }));
app.use(bodyParser.urlencoded({ limit: "150kb", extended: true }));
app.use(cors());


app.use("/blog", blogRouts);


mongoose
  .connect(`${mongoURI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
  )
  .catch((err) => console.log("test", err.message));

mongoose.set("useFindAndModify", false);

