import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PokemonCard.module.css';
import axios from 'axios';

const PokemonCard = ({ pokemon }) => {
  const { name, url } = pokemon;
  const id = url.split('/')[6];
  const [pokemonSprite, setPokemonSprite] = useState('');

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setPokemonSprite(response.data.sprites.front_default);
      })
      .catch((error) => {
        console.error('Error fetching sprite:', error);
      });
  }, [id]);

  return (
    <Link to={`/pokedex/${id}`} className={styles.cardContainer}>
      <div className={styles.cardName}>{name.toUpperCase()}</div>
      <img className={styles.cardImg} src={pokemonSprite} alt={name} />
    </Link>
  );
};

export default PokemonCard;
