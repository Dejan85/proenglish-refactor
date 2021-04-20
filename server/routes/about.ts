import express from 'express';
import { about } from '../controllers';
const { getAboutData } = about;
const getAboutRoute = express.Router();


getAboutRoute.get("/get", getAboutData);

export default getAboutRoute;