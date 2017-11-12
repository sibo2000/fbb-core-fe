import { FETCH_BETS, SAVE_BET, DELETE_BET, FILTER_BETS} from '../actions/api-actions';
import _ from 'lodash';

export default function(state = {}, action) {
    let bets = [];
    switch( action.type )
    {
        case FETCH_BETS:

            bets = action.payload.data.bets;
            bets = bets.map(bet => {
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

            return { ...state, bets : bets }
        break;
        case SAVE_BET:
            const bet = action.payload.data.bet;
            return{ ...state, bet : bet}
        break;
        case DELETE_BET:
            bets = state.bets.filter(bet => {
                return bet._id != action.payload
            })
            return { ...state, bets: bets }
        break;
        case FILTER_BETS:
            return { ...state, filter: action.payload }

        default:
        return state;
                
            
    }

}