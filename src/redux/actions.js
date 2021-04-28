 
import { sessionService } from 'redux-react-session';
import * as sessionApi from '../services/authService';

export const login = (payload, history) => {
    return sessionApi.login(payload).then((response) => {
        const { access_token } = response;
        sessionService.saveSession({ token: access_token }).then(() => {
            sessionService.saveUser(response.user).then(() => {
                history.push('/');
            });
        });
    });
};

export const logout = (history) => {
    return sessionApi
        .logout()
        .then(() => {
            sessionService.deleteSession();
            sessionService.deleteUser();
            history.push('/');
        })
        .catch((err) => {
            throw err;
        });
};
