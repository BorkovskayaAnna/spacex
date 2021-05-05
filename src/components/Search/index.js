import React from 'react'
import style from './index.css'

const Search = ({ handleSearch, search }) => (
    <div className="search-wrap">
        <input type="search" value={search} className="input-search" placeholder="Looking for ..." onChange={handleSearch} />
    </div>
)

export default Search;
