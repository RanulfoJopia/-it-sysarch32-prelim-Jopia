// App.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Pokedex from './Pokedex';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://us-central1-it-sysarch32.cloudfunctions.net/pagination?page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.data);
        setTotalPages(data.totalPages);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <div>
      <Header />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Pokedex
          pokemonList={pokemonList}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default App;
