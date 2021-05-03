import { commitMutation } from 'react-relay'; 
import { initEnvironment } from '../relay/environment';
import fetch from 'isomorphic-unfetch';
import { createUserMutation } from "../graphql";

const environment = initEnvironment();
const BASE_URL = "https://api.arkflame.com";

export const register = (email, password, username) => {
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation: createUserMutation,
            variables: {
                payload: { email, password, username }
            },
            onCompleted: resolve,
            onError: reject,
        });
    });
}

export const login = (email, password) => {
    return new Promise(async (resolve, reject) => {
        const request = await fetch(BASE_URL + '/auth/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await request.json();

        if (request.status !== 200 && request.status !== 201) {
            const error =
                data.message === 'Unauthorized'
                    ? 'Credenciales incorrectas. (¡Recuerda que lAs MaYuScUlAs AfEcTaN!)'
                    : data.message;
            reject(error);
        } else {
            resolve(data);
        }
    });
};

export const logout = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

export const validate = (token) => {
    return new Promise(async (resolve) => {
        const request = await fetch(
            BASE_URL + '/auth/validate?token=' + token,
        );
        const data = await request.json();
        resolve(data.valid);
    });
}; 
