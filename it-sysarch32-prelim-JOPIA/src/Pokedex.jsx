import React from 'react';
import Pokemon from './Pokemon';

const Pokedex = ({ pokemonList, currentPage, totalPages, setCurrentPage, selectedLanguage, onLanguageChange }) => {

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div>
        <button className="l1" onClick={() => onLanguageChange('english')}>English</button>
        <button className="l1" onClick={() => onLanguageChange('japanese')}>Japanese</button>
        <button className="l1" onClick={() => onLanguageChange('chinese')}>Chinese</button>
        <button className="l1" onClick={() => onLanguageChange('french')}>French</button>
      </div>
      <div>
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
          <button
            key={page}
            className="pagination-button"
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {pokemonList.map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} language={selectedLanguage} />
      ))}
      <div>
        Current Page: {currentPage} / Total Pages: {totalPages}
      </div>
    </div>
  );
};

export default Pokedex;
