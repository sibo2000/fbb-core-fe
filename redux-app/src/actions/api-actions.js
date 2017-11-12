import axios from 'axios';

export const FETCH_BETS = 'fetch_bets';
export const SAVE_BET = 'save_bet';
export const DELETE_BET = 'delete_bet';
export const FILTER_BETS = 'filter_bets';
const ROOT_URL = 'http://localhost:3002/api/v1/';
const API_KEY = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjU5YTliZGYyNDE3ZjQyNGFjMmVhMzM0MyIsInVzZXJOYW1lIjoic3RldmVwMTI0IiwicGFzc3dvcmQiOiIkMmEkMTAka25DNDV6YklYejhUWDBCRUVuaWhQLi54LkpidEJTdXVnaHlNTTZGZ1RLYzZUTVJUckpBY0siLCJlbWFpbCI6InN0ZXBoZW4ucGVycnk4M0BnbWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE1MDcxODc0MjQsImV4cCI6MTUwNzE5NDYyNH0.rnP6u4aFby5x-BJIC385XtS_8dVUNNrAGe0HbeO_Dho';
export function fetchBets(type) {
    let url = `${ROOT_URL}/bets${API_KEY}`
    if( type === 'errors'){
        url += '&betfair=false';
    }
    let request = axios.get(url)
    
    return {
        type : FETCH_BETS,
        payload: request
    }
}

export function saveBet(bet) {
    let url = `${ROOT_URL}bets/${bet._id}/edit${API_KEY}`
    
    let request = axios.patch(url, bet)
    return {
        type : SAVE_BET,
        payload: request
    }
}

export function removeBet(id, callback) {
    //const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    //.then(() => callback());

    return {
        type : DELETE_BET,
        payload : id
    }
}

export function filterBets(filter) {
    return {
        type : FILTER_BETS,
        payload : filter
    }
}
