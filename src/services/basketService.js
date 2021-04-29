import fetch from 'isomorphic-unfetch';

const BASE_URL = "https://api.arkflame.com/rest";

export const calculateBasketPrice = (basket) => {
    return new Promise(async (resolve, reject) => {
        const request = await fetch(BASE_URL + '/basket/calculate', {
            method: 'POST',
            body: JSON.stringify({basket}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await request.json();

        if (request.status !== 200 && request.status !== 201) {
            const error =
                data.message === 'Unauthorized'
                    ? 'Invalid login credentials'
                    : data.message;
            reject(error);
        } else {
            resolve(data.total);
        }
    });
};
