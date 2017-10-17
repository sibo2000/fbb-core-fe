import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth-reducer';
import betsReducer from './bets-reducer';
const rootReducer = combineReducers({
    form,
    auth:authReducer,
    bets:betsReducer
})

export default rootReducer;