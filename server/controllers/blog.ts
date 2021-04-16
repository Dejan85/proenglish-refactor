import { BlogModel } from '../models';

const getBlog = async (req: any, res: any) => {
    try {
        const blogs = await BlogModel.find();
        res.status(200).json(blogs);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const postBlog = async (req: any, res: any) => {
    const addBlog = req.body;
    const newBlog = new BlogModel(addBlog);

    try {
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};


export const blog = { getBlog, postBlog };