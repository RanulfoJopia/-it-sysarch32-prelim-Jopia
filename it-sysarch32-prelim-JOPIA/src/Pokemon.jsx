// Pokemon.jsx
import React from 'react';

const Pokemon = ({ pokemon, language }) => {
  return (
    <div className="pokemon-container">
      <img src={pokemon.image} alt={pokemon.name[language]} className="image" />
      <div className="pokemon-info">
        <p>{pokemon.id} {pokemon.name[language]}</p>
        <div className="type">
          {pokemon.type.map((type, index) => (
            <div key={index} className="type-button">{type}</div>
          ))}
        </div>
        <div className="stats-container">
          <div>
            <p>HP: {pokemon.base.HP}</p>
            <p>Attack: {pokemon.base.Attack}</p>
            <p>Defense: {pokemon.base.Defense}</p>
          </div>
          <div>
            <p>Speed: {pokemon.base.Speed}</p>
            <p>Sp. Attack: {pokemon.base["Sp. Attack"]}</p>
            <p>Sp. Defense: {pokemon.base["Sp. Defense"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
