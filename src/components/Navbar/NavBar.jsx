import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Config from "../Config/Config";

const NavBar = () => {
  const [showConfig, setShowConfig] = useState(false);

  const toggleConfig = () => {
    setShowConfig(!showConfig);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarItem}>
        Inicio
      </Link>
      <Link to="/pokedex" className={styles.navbarItem}>
        Pokedex
      </Link>
      <button onClick={toggleConfig} className={styles.navbarItem}>
        Configuración
      </button>
      {showConfig && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <Config />
            <button onClick={toggleConfig} className={styles.closeButton}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
