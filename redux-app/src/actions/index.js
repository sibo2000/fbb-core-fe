import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER} from './types';
import { browserHistory } from 'react-router';
const APP_URL = 'http://localhost:3002/api/v1';

import config from 'config';

export function signinUser({email, password}) {
    var params = {email, password}
    params.secret = config.secret;
    return signIn('signin',params);
}

export function signupUser({email, password, userName}) {
    var params = {email, password, userName}
    params.secret = config.secret;
    return signUp('signup', params);
}

function signIn(type,params) { 
    return function(dispatch) {
        axios.post(`${APP_URL}/${type}`, params)
        .then(response => {
            dispatch({ type: AUTH_USER });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/bets');
        })
        .catch(response => {
            console.log(response);
            const message = type == 'signin' ? 'Please enter some data' : response.data.error
            dispatch(authError(message));
        })
    }
}

function signUp(type,params) { 
    return function(dispatch) {
        axios.post(`${APP_URL}/${type}`, params)
        .then(response => {
            dispatch({ type: AUTH_USER });
            console.log(response.data.message);
            browserHistory.push('/signin');
        })
        .catch(response => {
            console.log(response);
            const message = type == 'signin' ? 'Please enter some data' : response.data.error
            dispatch(authError(message));
        })
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER
    }
}