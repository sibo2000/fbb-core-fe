import axios from 'axios';

export const FETCH_BETS = 'fetch_bets';
export const SAVE_BET = 'save_bet';
export const DELETE_BET = 'delete_bet';
export const FILTER_BETS = 'filter_bets';
const ROOT_URL = '/api/v1/';
const TOKEN = '?token=';

export function fetchBets(type) {
    const t = localStorage.getItem('token') || '';
    let url = `${ROOT_URL}/bets${TOKEN}${t}`
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
    const t = localStorage.getItem('token') || '';
    let url = `${ROOT_URL}bets/${bet._id}/edit${TOKEN}${t}`
    
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
