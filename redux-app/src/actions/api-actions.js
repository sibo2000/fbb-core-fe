import axios from 'axios';
import config from 'config';

export const FETCH_BETS = 'fetch_bets';
export const FETCH_BETS_DATE = 'fetch_bets_date';
export const SAVE_BET = 'save_bet';
export const DELETE_BET = 'delete_bet';
export const FILTER_BETS = 'filter_bets';
export const REFRESH_BET = 'refresh_bet';
export const FETCH_ERRORS = 'fetch_errors';

const BASE_URL = config[ process.env.NODE_ENV || 'dev'].baseurl || '/';
const ROOT_URL = 'api/v1/';
const TOKEN = '?token=';

export function fetchBets(type) {
    let url = `${BASE_URL}${ROOT_URL}bets`
    let request = axios.get(url)
    
    return {
        type : type==='errors' ? FETCH_ERRORS : FETCH_BETS,
        payload: request
    }
}

export function fetchBetsByDate(time) {
    var today = new Date()
    var today1 = new Date()
    today1.setDate(today.getDate()+1)
    var today2 = new Date()
    today2.setDate(today.getDate()+2)
    var today3 = new Date()
    today3.setDate(today.getDate()+3)
    
    let url = `${BASE_URL}${ROOT_URL}bets`;
    var query = '';
    switch(time) {
        case 'DATE_TODAY':
        query = `?dateStart=${formatDate(today)}&dateEnd=${formatDate(today1)}`;
        break;
        case 'DATE_TODAY+1':
        query = `?dateStart=${formatDate(today1)}&dateEnd=${formatDate(today2)}`;
        break;
        case 'DATE_TODAY+2':
        query = `?dateStart=${formatDate(today2)}&dateEnd=${formatDate(today3)}`;
        break;
    }

    let request = axios.get(url+query)
    
    return {
        type : FETCH_BETS_DATE,
        payload: request
    } 
}

function formatDate(date) {
    var d = date.toLocaleDateString().split('/')
    d.splice(1,0,d.shift())
    return d.join('-');
}

export function saveBet(bet) {
    const t = localStorage.getItem('token') || '';
    let url = `${BASE_URL}${ROOT_URL}bets/${bet._id}/edit${TOKEN}${t}`
    
    let request = axios.patch(url, bet)
    return {
        type : SAVE_BET,
        payload: request
    }
}

export function refreshBet(bet) {
    const t = localStorage.getItem('token') || '';
    let url = `${BASE_URL}${ROOT_URL}bets/${bet._id}/getBetfairData${TOKEN}${t}`

    let request = axios.patch(url);

    return {
        type : REFRESH_BET,
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
