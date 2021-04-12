import express from 'express';

export const blog = express.Router();

blog.get('/', (req, res) => {
    res.send("this works");
});

