import { combineReducers } from 'redux';
import userReducer from './userReducer';
import pokemonReducer from './pokemonReducer';
import configReducer from './configReducer';

const rootReducer = combineReducers({
  user: userReducer,
  pokemon: pokemonReducer,
  config: configReducer,
});

export default rootReducer;
