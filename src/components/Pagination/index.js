import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

export const Pagination = ({totalPages, handlePageClick}) => (
  <div className={styles.paginationWrap}>
    <ReactPaginate
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      containerClassName={styles.paginationNav}
      pageClassName={styles.navItem}
      activeClassName={styles.selected}
      disabledClassName={styles.disabled}
      previousClassName={styles.navItem}
      nextClassName={styles.navItem}
      previousLabel='<'
      nextLabel='>'
      breakLabel='...'
      breakClassName={`${styles.navItem} ${styles.ellipsis}`}
      onPageChange={handlePageClick}
    />
  </div>
)
