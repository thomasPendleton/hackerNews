import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { handleSearch, query } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input
        placeholder="search here"
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchForm
