import React, {useState, useEffect} from 'react'
import Filter from '../../components/Filter'
import Search from '../../components/Search'
import CardList from '../../components/CardList'
import { fetchData } from '../../api'
import {Pagination} from '../../components/Pagination'

function CardPage() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');

    const handleSearch = e => setSearch(e.target.value)
    const handleFilter = e => {
        // console.log(e.target.value)
        setFilter(e.target.value)
    }

    useEffect(() => {
        fetchData({pageNumber: currentPage})
        .then(data => setCards(data))
        // .then(setCards)
    }, [currentPage]);


    const handlePageClick = (e) => {
        let selected = e.selected;
        setCurrentPage(selected + 1)
    };

    return (
        <>
            <Search search={search} handleSearch={handleSearch} />
            <Filter cards={cards} filter={filter} handleFilter={handleFilter} />
            <CardList card={cards} />
            <Pagination
                totalPages={cards.totalPages}
                offset={cards.offset}
                limit={cards.limit}
                handlePageClick={handlePageClick}
            />
        </>
    )
}
export default CardPage;