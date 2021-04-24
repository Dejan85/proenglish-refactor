import { ExamsModel } from '../models';

const getExams = async (req: any, res: any) => {
    try {
        const exams = await ExamsModel.find();
        res.status(200).json(exams);

    } catch (error) {
        res.status(404).json({ error });
    }
};

export const exams = { getExams };