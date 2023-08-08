import axios from "axios";
import React, { useState } from "react";

import "./app.scss";
function App() {
  const [PockName, setPockName] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    attack: "",
    defense: "",
    type: "",
  });
  const fetchPokemon = () => {
    axios
      .get(` https://pokeapi.co/api/v2/pokemon/${PockName}`)
      .then((res) => {
        setPokemon({
          name: PockName,
          species: res.data.species.name,
          img: res.data.sprites.front_default,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          type: res.data.types[0].type.name,
        });
      })
      .catch(() => {
        console.error("error");
      });
  };
  return (
    <div className="App">
      <h1 className="Pokemon">Pokemon API working by me</h1>
      <div className="searchArea">
        <input
          type="text"
          className="search"
          placeholder="SEARCH HERO"
          onChange={(e) => {
            setPockName(e.target.value);
          }}
        />
        <button onClick={fetchPokemon}>Search</button>
      </div>
      <div className="resultsCard">
        <div className="Card">
          <h1 className="name">{pokemon.name}</h1>
          <img className="pokemon_img" src={pokemon.img} alt="" />
          <p className="pokemon__p">{pokemon.species}</p>
          <h3 className="name">{pokemon.attack}</h3>
          <h4 className="name">{pokemon.defense}</h4>
          <p className="pokemon__p">{pokemon.type}</p>
        </div>
      </div>
      <h1 className="Pokemon">Pokemon API End</h1>
    </div>
  );
}

export default App;
