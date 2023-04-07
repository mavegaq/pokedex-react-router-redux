import axios from "axios";
import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  FETCH_POKEMON_DETAILS_REQUEST,
  FETCH_POKEMON_DETAILS_SUCCESS,
  FETCH_POKEMON_DETAILS_FAILURE,
} from "./actionTypes";

export const fetchPokemonsRequest = () => ({
  type: FETCH_POKEMONS_REQUEST,
});

export const fetchPokemonsSuccess = (pokemons) => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: pokemons,
});

export const fetchPokemonsFailure = (error) => ({
  type: FETCH_POKEMONS_FAILURE,
  payload: error,
});

export const fetchPokemonDetailsRequest = () => ({
  type: FETCH_POKEMON_DETAILS_REQUEST,
});

export const fetchPokemonDetailsSuccess = (pokemon) => ({
  type: FETCH_POKEMON_DETAILS_SUCCESS,
  payload: pokemon,
});

export const fetchPokemonDetailsFailure = (error) => ({
  type: FETCH_POKEMON_DETAILS_FAILURE,
  payload: error,
});

export const fetchPokemons = () => {
  return (dispatch) => {
    dispatch(fetchPokemonsRequest());
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        const pokemons = response.data.results;
        dispatch(fetchPokemonsSuccess(pokemons));
      })
      .catch((error) => {
        dispatch(fetchPokemonsFailure(error.message));
      });
  };
};

export const fetchPokemonDetails = (pokemonId) => {
  return (dispatch) => {
    dispatch(fetchPokemonDetailsRequest());
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        const pokemon = response.data;
        dispatch(fetchPokemonDetailsSuccess(pokemon));
      })
      .catch((error) => {
        dispatch(fetchPokemonDetailsFailure(error.message));
      });
  };
};
