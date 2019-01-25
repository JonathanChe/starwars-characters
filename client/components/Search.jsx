import React from 'react';

const Search = ({ fetchNext }) => {

  const autocomplete = (event) => {
    fetchNext(`https://swapi.co/api/people/?search=${event.target.value}`);
  };

  return (
    <>
      <input
        id="search"
        placeholder="Search..."
        onChange={autocomplete}
      />
    </>
  );
};

export default Search;
