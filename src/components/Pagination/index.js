import React, {useState} from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'
import styles from './index.css'

export const Pagination = ({cards}) => {
    const [currentPage, setCurrentPage] = useState(0)
    const [offset, setOfsset] = useState(0)
    const [perPage, setPerPage] = useState(10)


    return (
        <div className="pagination-wrap">
            <ReactPaginate />
        </div>
    )
}