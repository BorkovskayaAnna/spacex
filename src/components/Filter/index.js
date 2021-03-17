import React, {useState, useEffect} from 'react';

function Filter({ handleFilter, param, cards }) {
    return (
        <div className="filter-wrap">
            <p>diameter</p>

            <label htmlFor={param}>{param}
                <input type="checkbox" id={param} name={param} onClick={handleFilter} />
            </label>
        </div>
    )
}

export default Filter;
