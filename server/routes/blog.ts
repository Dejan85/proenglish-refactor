import express from 'express';
import { blog } from '../controllers';
const { getBlog } = blog;
const blogRouts = express.Router();

blogRouts.get('/get', getBlog);

export default blogRouts;




