import axios, { AxiosResponse } from 'axios';


export const getData = async (url: string) => {
    try {
        return await axios.get(url);
    } catch (err) {
        return err;
    }
};