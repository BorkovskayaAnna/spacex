import React, {useState, useEffect} from 'react'
import Filter from '../../components/Filter'
import Search from '../../components/Search'
import CardList from '../../components/CardList'
import { fetchData } from '../../api'
import ReactPaginate from 'react-paginate'
import {Pagination} from '../../components/Pagination'

function CardPage() {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [perPage, setPerPage] = useState(1);
    // const [offset, setOffset] = useState(0);
    // const [limit, setLimit] = useState(1);
    let [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');


    const handleSearch = e => setSearch(e.target.value)

    const handleFilter = e => {
        // console.log(e.target.value)
        setFilter(e.target.value)
    }

    const handleFetchData = async() => {
        fetchData().catch(error => error)
        const data = await fetchData()

        setCards(data);

        // console.log(data)
        // console.log(cards)
    };

    // const handleFetchNewData = async(data) => {
    //     setCards(data);
    //
    //     console.log(data)
    //     // console.log(cards)
    // };



    useEffect(() => {
        handleFetchData().then(() => console.log('loading'))
    }, []);

    const handlePageClick = (e) => {
        let selected = e.selected;
        currentPage = selected + 1;
        console.log(currentPage)
        // console.log(selected)
        // const newCardsOffset = cards.offset + selected
        // cards.offset = newCardsOffset
        // setCards(cards.offset);
        // let offset = Math.ceil(selected * cards.limit);
        // let test = cards.offset;
        // setCurrentPage({test: offset}, () =>{
        //
        // })
        // handleFetchNewData()
    };

    return (
        <>
            <Search search={search} handleSearch={handleSearch} />
            <Filter cards={cards} filter={filter} handleFilter={handleFilter} />
            <CardList card={cards} />
            <ReactPaginate
                pageCount={cards.totalPages}
                pageRangeDisplayed={cards.offset}
                marginPagesDisplayed={cards.limit}
                pageClassName="nav-item"
                containerClassName="pagination-nav"
                previousLabel="<<"
                nextLabel=">>"
                // disableInitialCallback={true}
                onPageChange={handlePageClick}
            />
        </>
    )
}

export default CardPage;
