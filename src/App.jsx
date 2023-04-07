import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Home from './components/Home/Home';
import Pokedex from './components/Pokedex/Pokedex';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import Config from './components/Config/Config';
import NotFound from './components/NotFound/NotFound';
import './App.css';

const App = () => {
  const darkMode = useSelector((state) => state.config.darkMode);

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <header>Pokédex App</header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<ProtectedRoute><Pokedex /></ProtectedRoute>} />
          <Route path="/pokedex/:id" element={<ProtectedRoute><PokemonDetails /></ProtectedRoute>} />
          <Route path="/config" element={<ProtectedRoute><Config /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer>Made with by Manuel Vega</footer>
      </div>
    </Router>
  );
};

export default App;
