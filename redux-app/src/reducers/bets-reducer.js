import {
    FETCH_BETS, SAVE_BET, DELETE_BET, REFRESH_BET, FILTER_BETS, FETCH_BETS_DATE,
    FETCH_ERRORS
} from '../actions/api-actions';
import _ from 'lodash';

export default function(state = {}, action) {
    let bets = [];
    let bet = {};
    switch( action.type )
    {
        case FETCH_BETS:
            bets = action.payload.data.bets;
            return { ...state, bets : setPredictionType(bets) }
        break;
        case FETCH_ERRORS:
        bets = action.payload.data.bets.filter( bet => {
            return bet.betfair == null || bet.betfair.price == null
        });

        return { ...state, bets: bets }
        case FETCH_BETS_DATE:
            bets = action.payload.data.bets;
            return { ...state, bets : setPredictionType(bets) }
        break;
        case SAVE_BET:
            bet = action.payload.data.bet;
            return{ ...state, bet : bet}
        break;
        case DELETE_BET:
            bets = state.bets.filter(bet => {
                return bet._id != action.payload
            })
            return { ...state, bets: bets }
        break;
        case REFRESH_BET:
            //console.log(state.bets, action.payload.data.bets._id)
            var betfairdata = action.payload.data.bets.betfair;
            if(betfairdata && betfairdata.price) {
                bets = state.bets.filter(bet => {
                    return bet._id != action.payload.data.bets._id
                })
                return { ...state, bets: bets};
            }
            //console.log(bets)
            return { ...state};
        break;
        case FILTER_BETS:
            return { ...state, filter: action.payload }
        default:
        return state;
                
            
    }

}

function setPredictionType(bets) {
    return bets.map(bet => {
        var prediction = bet.predictionType;
        
        if( new RegExp('other','gi').test(prediction)) {
            bet.type = 'other';
        } else if(new RegExp('banker','gi').test(prediction)) {
            bet.type = 'banker';
        }  else if( new RegExp('value','gi').test(prediction)) {
            bet.type = 'value';
        }

        return bet
    })
}