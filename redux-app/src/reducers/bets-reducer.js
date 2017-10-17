import { FETCH_BETS, SAVE_BET, DELETE_BET } from '../actions/api-actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch( action.type )
    {
        case FETCH_BETS:

            const bets = action.payload.data.bets;
            bets.map(bet => {
                var prediction = bet.predictionType;
                
                if( new RegExp('other','gi').test(prediction)) {
                    bet.type = 'other';
                } else if(new RegExp('banker','gi').test(prediction)) {
                    bet.type = 'banker';
                }  else if( new RegExp('value','gi').test(prediction)) {
                    bet.type = 'value';
                }
            })

            return { ...state, bets : action.payload.data.bets }

        case SAVE_BET:
            const bet = action.payload.data.bet;
            return{ ...state, bet : bet}
        case DELETE_BET:
            console.log(action.payload)
            //console.log(state, action.payload)
            //state.bets
            var bets = state.bets.filter(bet => {
                return bet._id != action.payload
            })
            console.log( bets)
            return { ...state, bets: bets }
        default:
            return state;
    }

}