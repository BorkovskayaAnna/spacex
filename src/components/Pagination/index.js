import React from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'
import styles from './index.css'

export const Pagination = ({cards}) => {

    return (
        <div className="pagination-wrap">
            <ReactPaginate />
        </div>
    )
}