import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {handleSearch} = useGlobalContext()
  return <form onSubmit={(e) => handleSearch()}>
    <input></input>

    </form>
}

export default SearchForm
