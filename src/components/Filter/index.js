import React from 'react';
import styles from './index.css'

const success = [
    {name: 'All', value: 'all'},
    {name: 'Yes', value: 'true'},
    {name: 'No', value: 'false'}
];
const upcoming = [
    {name: 'All', value: 'all'},
    {name: 'Yes', value: 'true'},
    {name: 'No', value: 'false'}
];

function Filter({ handleFilter, checked }) {
    // console.log(checked)
    return (
        <div className="filter-wrap">
            <div className="filter_block">
                <h3>Upcoming</h3>

                {upcoming.map((el, i)=> (
                    <label htmlFor={'u_'+el.value} key={i}>
                        <span>{el.name}</span>
                        <input
                            type="radio"
                            name="upcoming"
                            id={'u_'+el.value}
                            value={el.value}
                            defaultChecked={i === 0}
                            onChange={handleFilter}
                        />
                    </label>
                ))}
            </div>

            <div className="filter_block">
                <h3>Success</h3>
                {success.map((el, i)=> (
                    <label htmlFor={'s_'+el.value.toString()} className={checked ? "selected" : ''} key={i}>
                        <span>{el.name}</span>
                        <input
                            type="radio"
                            name="success"
                            id={'s_'+el.value}
                            value={el.value}
                            defaultChecked={i === 0}
                            onChange={handleFilter}
                        />
                    </label>
                )) }
            </div>
        </div>
    )
}

export default Filter;
