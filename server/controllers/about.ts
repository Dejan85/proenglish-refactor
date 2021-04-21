import { AboutModel } from '../models';

const getAboutData = async (req: any, res: any) => {
    try {
        const aboutData = await AboutModel.find();
        res.status(200).json(aboutData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};



export const about = { getAboutData };