import React, {useState, useEffect} from 'react'
import Filter from '../../components/Filter'
import Search from '../../components/Search'
import CardList from '../../components/CardList'
import { fetchData } from '../../api'

function CardPage() {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');

    const handleSearch = e => setSearch(e.target.value)

    const handleFilter = e => setFilter(e.target.value)

    const handeFetchData = async() => {
        const data = await fetchData()
        setCards(data);
    }

    useEffect(() => {
        handeFetchData()
    }, []);

    return (
        <>
        <Search search={search} handleSearch={handleSearch} />
        <Filter cards={cards} filter={filter} handleFilter={handleFilter} />
        <CardList cards={cards} search={search} />
        </>
    )
}

export default CardPage;
