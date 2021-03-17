import React, {useState, useEffect} from 'react'
import Card from '../../components/Card'
import Filter from '../../components/Filter'
import Search from '../../components/Search'
import style from './index.css'

function CardList() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');

    const handleSearch = e => setSearch(e.target.value)

    const handleFilter = e => {
        console.log(e.target.value)
        setFilter(e.target.value)
    }

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://api.spacexdata.com/v4/rockets");
            const data = await res.json();
            setCards(data);
        }
        fetchData();
    }, []);

    return (
        <>
        <Search search={search} handleSearch={handleSearch} />
        <Filter cards={cards} param={filter} handleFilter={handleFilter} />

            {cards === null ? (
                <p>loading ...</p>
            ) : (
                cards.map(card => card.name.toLowerCase().includes(search)  ? (
                        <Card cards={card} />
                    ) : ''
                )
            )}
        </>
    )
}

export default CardList;
