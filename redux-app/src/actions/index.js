import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER} from './types';
import { browserHistory } from 'react-router';
const ROOT_URL = 'http://localhost:3090';
export function signinUser({email, password}) {
    return sign('signin',{email, password});
}

export function signupUser({email, password}) {
    return sign('signup', {email, password});
}

function sign(type,{email, password}) { 
    return function(dispatch) {
        axios.post(`${ROOT_URL}/${type}`, { email, password })
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