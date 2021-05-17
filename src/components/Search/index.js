import React from 'react'

import styles from './Search.module.scss'

const Search = ({ handleSearch, search }) => (
    <div className="container">
        <div className={styles.searchWrap}>
            <input type="search" value={search} className={styles.inputSearch} placeholder="Looking for ..." onChange={handleSearch} />
        </div>
    </div>
)

export default Search;
