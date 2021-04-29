import React, {useState, useEffect} from 'react'
import { fetchData } from '../../api'
import CardList from '../../components/CardList'
import Filter from '../../components/Filter'
import Search from '../../components/Search'
import {Pagination} from '../../components/Pagination'
import CardItem from "../../components/CardList/CardItem";

const initialFilter = {
    success: '',
    upcoming: ''
}

function CardPage() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');

    const [filter, setFilter] = useState(initialFilter);
    const [checked, setChecked] = useState('');

    const handleSearch = e => {
        setSearch(e.target.value)
    }

    const handleFilter = e => {
        const current = e.target.name
        current === 'all' && setFilter(initialFilter)
        current === 'success' && setFilter({success : e.target.value})
        current === 'upcoming' && setFilter({upcoming : e.target.value})
    }

    const handlePageClick = (e) => {
        const selected = e.selected;
        setCurrentPage(selected + 1)
    };

    // pagination
    useEffect(() => {
        fetchData({
            pageNumber: currentPage,
            searchTerm: search,
            // success: filter.success,
            // upcoming: filter.upcoming
        })
        .then(data => setCards(data))
    }, [currentPage, search]);

    useEffect(() => {
        fetchData({success: filter.success, upcoming: filter.upcoming}).then(data => setCards(data))
    }, [filter]);


    return (
        <div className="container">
            <div className="filter-block">
                <Search search={search} handleSearch={handleSearch} />
                <Filter filter={filter} value={filter} handleFilter={handleFilter} />
                <br/><div>upcoming {filter.upcoming}</div><br/>
                <div>success {filter.success}</div>
            </div>
            <CardList card={cards} />
            <Pagination
                totalPages={cards.totalPages}
                offset={cards.offset}
                limit={cards.limit}
                handlePageClick={handlePageClick}
            />
        </div>
    )
}
export default CardPage;