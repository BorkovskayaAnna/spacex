import React from 'react'

import styles from './Search.module.scss'

export const Search = ({handleSearch, search}) => {
  return (
    <div className={styles.searchWrap}>
      <div className="container">
        <input
          type="search"
          value={search}
          className={styles.inputSearch}
          placeholder="Looking for ..."
          onChange={handleSearch}
        />
      </div>
    </div>
  )
}

