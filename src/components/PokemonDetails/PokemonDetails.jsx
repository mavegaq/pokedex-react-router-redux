import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './PokemonDetails.module.css';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.detailsContainer}>
      <img className={styles.detailsImg} src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h1 className={styles.detailsName}>{pokemon.name}</h1>
      <div className={styles.detailsInfo}>
        <div className={styles.detailsItem}>
          <span className={styles.detailsLabel}>Height:</span>
          <span>{pokemon.height}</span>
        </div>
        <div className={styles.detailsItem}>
          <span className={styles.detailsLabel}>Weight:</span>
          <span>{pokemon.weight}</span>
        </div>
        <div className={styles.detailsItem}>
          <span className={styles.detailsLabel}>Types:</span>
          <span>{pokemon.types.map((type) => type.type.name).join(', ')}</span>
        </div>
        <div className={styles.detailsItem}>
          <span className={styles.detailsLabel}>Abilities:</span>
          <span>{pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
