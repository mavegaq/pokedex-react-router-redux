import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setItemsPerPage, toggleDarkMode } from '../../store/slices/actions/configActions';
import styles from './Config.module.css';

const Config = () => {
  const dispatch = useDispatch();
  const itemsPerPage = useSelector((state) => state.config.itemsPerPage);
  const darkMode = useSelector((state) => state.config.darkMode);

  const handleItemsPerPageChange = (e) => {
    dispatch(setItemsPerPage(parseInt(e.target.value)));
  };

  const handleDarkModeChange = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <label htmlFor="itemsPerPage">Items per page:</label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div className={styles.darkModeContainer}>
        <label htmlFor="darkMode">Dark mode:</label>
        <input
          id="darkMode"
          type="checkbox"
          checked={darkMode}
          onChange={handleDarkModeChange}
        />
        
      </div>
      
    </div>
  );
};

export default Config;
