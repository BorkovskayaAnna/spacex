import React, {useState, useEffect} from 'react'
import {fetchData} from '../../api'
import {CardItem} from '../../components/CardItem'
import {Filter} from '../../components/Filter'
import {Search} from '../../components/Search'
import {Pagination} from '../../components/Pagination'
import {Loading} from '../../components/Loading'
import {useDebounce} from '../../hooks/useDebounce'

export const CardPage = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState({
    success: 'all',
    upcoming: 'all'
  });

  const handleSearch = e => {
    setSearch(e.target.value);
    setCurrentPage(1)
  }

  const debouncedSearch = useDebounce(search, 1000);

  const handleFilter = e => {
    const currentName = e.target.name
    switch (currentName) {
      case 'success':
        setChecked({...checked, success: e.target.value})
        break
      case 'upcoming':
        setChecked({...checked, upcoming: e.target.value})
        break
      default:
        break
    }

    setCurrentPage(1)
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
    const query = {}

    if (checked.upcoming !== 'all') {
      query.upcoming = checked.upcoming === 'true'
    }

    if (checked.success !== 'all') {
      query.success = checked.success === 'true'
    }

    if (search) {
      query["$text"] = {
        $search: search,
        $caseSensitive: false,
        $diacriticSensitive: false,
      }
    }

    fetchData(
      currentPage,
      query
    )
      .then(data => setCards(data))
  }, [currentPage, debouncedSearch, checked.success, checked.upcoming])

  if(!cards.docs) {
    return <Loading/>
  }

  return (
    <>
    <div className="filterBlock">
      <Search search={search} handleSearch={handleSearch}/>
      <Filter checked={checked} handleFilter={handleFilter}/>
    </div>
    <div className="container">
       { cards.docs.length === 0
         ? <div className="textCenter">
           <p>Nothing found</p>
           </div>
         : <div className="grid">
             <CardItem cards={cards}/>
           </div>
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
