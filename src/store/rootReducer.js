import { combineReducers } from 'redux';
import pokeReducer from '../reducers/pokeListReducer';
import pokeInfoReducer from '../reducers/pokeInfoReducer';

export default combineReducers({
    pokeReducer,
    pokeInfoReducer
});