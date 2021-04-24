import express from 'express';
import { exams } from '../controllers';
const { getExams } = exams;
const getExamsRoute = express.Router();

getExamsRoute.get("/get", getExams);

export default getExamsRoute;