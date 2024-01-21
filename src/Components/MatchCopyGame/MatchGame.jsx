import "./MatchGame.css";
import axios from "axios";
import { useState, useEffect } from "react";
import back from "./Frame 90.jpeg";
import ReactCardFlip from "react-card-flip";

function App() {
  const [pressed, setPressed] = useState(false);
  const [closed, setClosed] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [flip, setFlip] = useState(false);
  const [copies, setCopies] = useState([]);
  useEffect(() => {
    setCopies(pokemons)

  }, [pokemons])
  useEffect(() => {
    setPokemons(prev => [...prev, ...copies])
  }, [])
  console.log(copies)
  console.log(pokemons)
  async function getPoke() {
    try {
      for (let i = 1; i < 9; i++) {
        let rnd = Math.floor(Math.random() * 500) + 1;
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rnd}`);
        setPokemons((prevState) => [
          ...prevState,
          { ...res.data, flipped: false },
        ]);
      }
      setPressed(true);
    } catch (err) {
      console.log(err);
    }
  }

  const pereverni = (e, pokeId) => {
    e.preventDefault();
    setFlip((prev) => !prev);
    setPokemons((prevState) =>
      prevState.map((pokemon) =>
        pokemon.id === pokeId
          ? { ...pokemon, flipped: !pokemon.flipped }
          : { ...pokemon, flipped: false }
      )
    );
    setClosed(false);
  };
  return (
    <div className="allCards">
      {pressed ? (
        <div className="randomDiv">
          {pokemons.map((pokemon) => {
            let pokeId = pokemon.id;
            return (
              <>
                {/* {pokemon.flipped ? ( */}
                <ReactCardFlip
                  isFlipped={pokemon.flipped}
                  flipDirection="horizontal"
                >
                  <div className="card">
                    <div
                      onClick={(e) => pereverni(e, pokeId)}
                      className="perev"
                    >
                      <img src={back} />
                    </div>
                  </div>

                  <div className="card card-back">
                    <div
                      onClick={(e) => pereverni(e, pokeId)}
                      className="pokemons"
                    >
                      <div>
                        <div>
                          <img
                            className="pokemonimg"
                            src={
                              pokemon.sprites.other["official-artwork"][
                                "front_default"
                              ]
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </ReactCardFlip>
                {/* )} */}
              </>
            );
          })}
        </div>
      ) : (
        <button onClick={getPoke}>Deal Cards</button>
      )}
    </div>
  );
}

export default App;
