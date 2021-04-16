import React, {useState, useEffect} from 'react'
import Filter from '../../components/Filter'
import Search from '../../components/Search'
import CardList from '../../components/CardList'
import { fetchData } from '../../api'
import ReactPaginate from 'react-paginate'
import {Pagination} from '../../components/Pagination'

function CardPage() {

    const [searchTerm, setSearchTerm] = useState("");
    const [pagination, setPagination] = useState(0);

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [offset, setOffset] = useState(0);
    // const [limit, setLimit] = useState(1);

    let [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');

    const handleSearch = e => setSearch(e.target.value)

    const handleFilter = e => setFilter(e.target.value)

    const handleFetchData = async() => {
        setLoading(true)
        fetchData().catch(error => error)
        const data = await fetchData()
        setCards(data);
        setLoading(false)
    };

    const handlePageClick = (e) => {
        let selected = e.selected;
        currentPage = selected + 1;
        setCurrentPage(currentPage)
        console.log(currentPage)
    };


    useEffect(() => {
        handleFetchData()
    }, []);



    return (
        <>
            <ReactPaginate
                pageCount={cards.totalPages}
                pageRangeDisplayed={cards.offset}
                marginPagesDisplayed={cards.limit}
                pageClassName="nav-item"
                containerClassName="pagination-nav"
                previousLabel="<<"
                nextLabel=">>"
                currentPage={currentPage}
                onPageChange={handlePageClick}
            />
            {/*<Search search={search} handleSearch={handleSearch} />*/}
            {/*<Filter cards={cards} filter={filter} handleFilter={handleFilter} />*/}
            <CardList card={cards} />

        </>
    )
}

export default CardPage;
