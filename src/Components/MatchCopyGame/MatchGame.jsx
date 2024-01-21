import React, { useEffect, useState } from "react";
import "./MatchGame.css";
import ReactCardFlip from "react-card-flip";
import axios from "axios";
import back from "./Frame 90.jpeg";



const MatchGame = () => {
  const [pressed, setPressed] = useState(false);
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    async function fetchPokes() {
      for (let i = 1; i < 6; i++) {
        let rnd = Math.floor(Math.random() * 500) + 1;
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rnd}`);
        setPokemons((prevState) => [
          ...prevState,
          { ...res.data, flipped: false },
        ]);
      }
    }
    fetchPokes()
  }, []);


  return (
    <>
      <h1>Match Copies</h1>
      <ReactCardFlip isFlipped={true} flipDirection="horizontal">
        <div className="card cardBack">
          <img src={back} />
        </div>
        <div className="card card-back cards">
          {pokemons.map(poke => <img src={poke.sprites.back_default} />)}
        </div>
      </ReactCardFlip>
    </>
  );
};

export default MatchGame;
