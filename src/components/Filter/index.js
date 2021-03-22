import React, {useState, useEffect} from 'react';

function Filter({ handleFilter, filter, cards }) {
    return (
        <div className="filter-wrap">
            <div className="filter_block">
                {cards.map(card => (
                    <label htmlFor={card.mass.kg} key={card.id}>{card.mass.kg}
                        <input type="checkbox" id={card.mass.kg} name={card.mass.kg} onClick={handleFilter} />
                    </label>
                ))}
            </div>
            <div className="filter_block">
                {cards.map(card => (
                    <label htmlFor={card.diameter.meters} key={card.id}>{card.diameter.meters}
                        <input type="checkbox" id={card.diameter.meters} name={card.diameter.meters} onClick={handleFilter} />
                    </label>
                ))}
            </div>
            <div className="filter_block">
                {cards.map(card => (
                    <label htmlFor={card.height.meters} key={card.id}>{card.height.meters}
                        <input type="checkbox" id={card.height.meters} name={card.height.meters} onClick={handleFilter} />
                    </label>
                ))}
            </div>
        </div>
    )
}

export default Filter;
