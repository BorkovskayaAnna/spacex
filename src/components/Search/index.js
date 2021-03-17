import React from 'react';

const Search = ({ handleSearch, search }) => (
    <div className="search-wrap">
        <input type="search" onChange={handleSearch} value={search} />
    </div>
)

export default Search;
