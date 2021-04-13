import axios, { AxiosResponse } from 'axios';

export const request = async (urlProp: string, method: string): Promise<AxiosResponse<any>> => {
    const urlX = `${process.env.API_URL}/${urlProp}`;
    return await axios(urlX).then((res) => res);
};