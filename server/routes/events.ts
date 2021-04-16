import express from 'express';
import { events } from '../controllers';
const { getEvents } = events;
const eventsRoutes = express.Router();

eventsRoutes.get("/get", getEvents);

export default eventsRoutes;
