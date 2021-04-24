import { EventsModel } from '../models';

const getEvents = async (req: any, res: any) => {
    try {
        const events = await EventsModel.find();
        res.status(200).json(events);

    } catch (error) {
        res.status(404).json({ error });
    }

};

export const events = { getEvents };