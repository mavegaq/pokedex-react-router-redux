import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsername } from "../../store/slices/actions/userActions";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const [username, setUsernameInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      dispatch(setUsername(username));
      navigate("/pokedex"); // Cambiar esto
    }
  };

  return (
    <div className={styles.homeContainer}>
      <h1>Hello Trainer!</h1>
      <img src="trainer.png" alt="trainer" className={styles.trainerImg} />
      <p>Give me your name to start</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsernameInput(e.target.value)}
          className={styles.usernameInput}
        />
        <button type="submit" className={styles.continueButton}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default Home;


