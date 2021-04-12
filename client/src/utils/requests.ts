export const request = async (url: string, method: string) => {


    const test = `http://localhost:6000/${url}`;
    return fetch(test, { method, credentials: 'include' }).then((res) => res.json());
}