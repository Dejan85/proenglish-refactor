import axios from 'axios';

export const request = async (url: string, method: string) => {


    const urlX = `http://localhost:5000/${url}`;
    return axios(urlX).then((res) => res);
};