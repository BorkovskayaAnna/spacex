import React, { useState, useEffect } from 'react'
import { fetchData } from '../../api'
import { CardList } from '../../components/CardList'
import { Filter } from '../../components/Filter'
import { Search } from '../../components/Search'
import { Pagination } from '../../components/Pagination'
import { Loading } from '../../components/Loading'

export const CardPage = () => {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [filterSuccess, setFilterSuccess] = useState('all');
    const [filterUpcoming, setFilterUpcoming] = useState('all');
    const [checked, setChecked] = useState({
        success: 'all',
        upcoming: 'all'
    });

    const handleSearch = e =>  setSearch(e.target.value);

    const handleFilter = e => {
        const currentName = e.target.name
        switch (currentName) {
            case 'success':
                setFilterSuccess(e.target.value)
                setChecked({...checked, success: e.target.value})
                break
            case 'upcoming':
                setFilterUpcoming(e.target.value)
                setChecked({...checked, upcoming: e.target.value})
                break
            default:
                break
        }
    }

    const handlePageClick = (e) => {
        const selected = e.selected;
        setCurrentPage(selected + 1)

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        fetchData({
            pageNumber: currentPage,
            searchTerm: search,
            success: filterSuccess,
            upcoming: filterUpcoming
        })
        .then(data => setCards(data))
    }, [currentPage, search, filterSuccess, filterUpcoming]);

    return (
       <>
       <div className="filterBlock">
           <Search search={search} handleSearch={handleSearch} />
           <Filter checked={checked} handleFilter={handleFilter} />
       </div>
       <div className="container">
           {cards.docs == null ?
               <Loading /> :
               cards.docs.length === 0 ?
                   <div className="text-center">
                       <p>Nothing found</p>
                   </div> :
               <CardList card={cards} />
           }
           {cards.totalPages > 1 && (
               <Pagination
                   totalPages={cards.totalPages}
                   handlePageClick={handlePageClick}
               />
           )}
       </div>
       </>
    )
}
