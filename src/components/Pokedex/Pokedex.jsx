import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonCard from '../PokemonCard/PokemonCard';
import NavBar from '../Navbar/Navbar'; 
import styles from './Pokedex.module.css';

const Pokedex = () => {
  const username = useSelector((state) => state.user.username);
  const itemsPerPage = useSelector((state) => state.config.itemsPerPage);
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    axios
      .get('https://pokeapi.co/api/v2/type')
      .then((response) => {
        setPokemonTypes(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching types:', error);
      });
  }, []);

  useEffect(() => {
    const filtered = pokemons.filter((pokemon) => {
      const matchesType = type === '' || pokemon.types.includes(type);
      const matchesSearch = pokemon.name.toLowerCase().includes(search.toLowerCase());
      return matchesType && matchesSearch;
    });

    setFilteredPokemons(filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
  }, [search, type, pokemons, currentPage, itemsPerPage]);

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);

  return (
    <div>
      <NavBar /> {/* Agregar el componente Navbar */}
      <h1 className={styles.welcomeMessage}>Welcome, {username}!</h1>
      <div className={styles.filtersContainer}>
        <div className={styles.typeFilter}>
          <label htmlFor="type">Type:</label>
          <select id="type" onChange={(e) => setType(e.target.value)}>
            <option value="">All</option>
            {pokemonTypes.map((pokemonType) => (
              <option key={pokemonType.name} value={pokemonType.name}>
                {pokemonType.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.searchFilter}>
          <label htmlFor="search">Search:</label>
          <input id="search" type="text" onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
      <div className={styles.pokemonsContainer}>
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={styles.pageButton}
            onClick={() => handlePageClick(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
