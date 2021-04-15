import React, {useState, useEffect} from 'react';
import styles from './index.css'

// const diameter = [1.68, 3.7, 12.2, 9];
// const mass = [1335000, 1420788, 549054, 30146];

// const success = [2, 5, 10];
// const upcoming = [1000000, 500000, 50000];

function Filter({ handleFilter, filter, cards }) {
    // const [value, setValue] = useState(true)
    const [selected, setSelected] = useState(false)
    const [onChange, setOnChange] = useState(true)

    // console.log(filter)

    const handleSelect = (e) => {
        e.stopPropagation();
        const current = e.target.value
        setSelected(current)
        console.log(selected)
    }

    return (
        <div className="filter-wrap">
            <div className="filter_block">
                <h3>Upcoming</h3>
                <label htmlFor="upcoming" className={selected ? "selected" : ''} onClick={handleSelect}>
                    <span>Yes</span>
                    <input type="radio" name="upcoming" value="true" onChange={handleFilter} />
                </label>
                <label htmlFor="upcoming" className={selected && "selected"} onClick={handleSelect}>
                    <span>No</span>
                    <input type="radio" name="upcoming" value="false" onChange={handleFilter} />
                </label>
            </div>
            <div className="filter_block">
                <h3>Success</h3>
                <label htmlFor="success" className={selected && "selected"} onClick={handleSelect}>
                    <span>Yes</span>
                    <input type="radio" name="success" value="true" onChange={handleFilter} />
                </label>
                <label htmlFor="success" className={selected && "selected"} onClick={handleSelect}>
                    <span>No</span>
                    <input type="radio" name="success" value="false" onChange={handleFilter} />
                </label>
            </div>
        </div>
    )
}

export default Filter;
