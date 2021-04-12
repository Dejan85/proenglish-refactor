import express from 'express';
import { getBlog } from '../controllers/blog';

export const blog = express.Router();

blog.get('/', getBlog);



