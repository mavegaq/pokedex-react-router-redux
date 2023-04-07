import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  FETCH_POKEMON_DETAILS_REQUEST,
  FETCH_POKEMON_DETAILS_SUCCESS,
  FETCH_POKEMON_DETAILS_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  pokemons: [],
  error: "",
  pokemonDetails: {},
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: action.payload,
        error: "",
      };
    case FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        loading: false,
        pokemons: [],
        error: action.payload,
      };
    case FETCH_POKEMON_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonDetails: action.payload,
        error: "",
      };
    case FETCH_POKEMON_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        pokemonDetails: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
