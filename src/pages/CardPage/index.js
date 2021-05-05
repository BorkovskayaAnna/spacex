import React, {useState, useEffect} from 'react'
import { fetchData } from '../../api'
import CardList from '../../components/CardList'
import Filter from '../../components/Filter'
import Search from '../../components/Search'
import {Pagination} from '../../components/Pagination'
import CardItem from "../../components/CardList/CardItem";

// const initialFilter = {
//     success: 'all',
//     upcoming: 'all'
// }

function CardPage() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');

    const [filterSuccess, setFilterSuccess] = useState('all');
    const [filterUpcoming, setFilterUpcoming] = useState('all');
    const [checked, setChecked] = useState({
        suc: 'all',
        up: 'all'
    });

    const handleSearch = e => setSearch(e.target.value)

    const handleFilter = e => {
        const currentName = e.target.name
        const currentVal = e.target.value
        // current === 'success' && setFilterSuccess(e.target.value)
        // current === 'upcoming' && setFilterUpcoming(e.target.value)

        switch (currentName) {
            case 'success':
                setFilterSuccess(e.target.value)
                setChecked({...checked, suc: e.target.value})
                // setChecked(e.target.value)
                break
            case 'upcoming':
                setFilterUpcoming(e.target.value)
                setChecked({...checked, up: e.target.value})
                break
            default:
                break
        }

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
            success: filterSuccess,
            upcoming: filterUpcoming
        })
        .then(data => setCards(data))
    }, [currentPage, search, filterSuccess, filterUpcoming]);
    //console.log(filterSuccess)

    return (
        <div className="container">
            <div className="filter-block">
                <Search search={search} handleSearch={handleSearch} />
                <Filter checked={checked} handleFilter={handleFilter} />
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