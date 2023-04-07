import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorText}>404 - Página no encontrada</div>
      <Link to="/" className={styles.returnHome}>
        Regresar a la página de inicio
      </Link>
    </div>
  );
};

export default NotFound;
