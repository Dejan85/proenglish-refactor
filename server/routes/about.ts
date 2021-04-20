import express from 'express';
import { about } from '../controllers';
const getAboutRoute = express.Router();


getAboutRoute.get("/get", getAboutRoute);

export default getAboutRoute;