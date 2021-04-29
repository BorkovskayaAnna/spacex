import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './index.css'

export const Pagination = ({totalPages, offset, limit, handlePageClick}) => (
    <div className="pagination-wrap">
        <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={offset}
            marginPagesDisplayed={limit}
            containerClassName="pagination-nav"
            pageClassName="nav-item"
            previousLabel="<<"
            nextLabel=">>"
            onPageChange={handlePageClick}
        />
    </div>
)