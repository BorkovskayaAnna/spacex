import React from 'react';
import classNames from 'classnames'
import styles from './Filter.module.scss'

const success = [
    {name: 'All', value: 'all'},
    {name: 'Yes', value: true},
    {name: 'No', value: false}
]

const upcoming = [
    {name: 'All', value: 'all'},
    {name: 'Yes', value: true},
    {name: 'No', value: false}
]

export const Filter = ({ handleFilter, checked }) => (
    <div className="container">
        <div className={styles.filterWrap}>
            <div className={styles.filterBlock}>
                <p>Upcoming launches</p>
                {upcoming.map((el, i) => (
                    <label
                        htmlFor={'u_'+el.value}
                        className={classNames(styles.label,{ [styles.selected]: checked.upcoming === String(el.value) })}
                        key={i}
                    >
                        <input
                            type="radio"
                            name="upcoming"
                            id={'u_'+el.value}
                            value={String(el.value)}
                            defaultChecked={i === 0}
                            onChange={handleFilter}
                        />
                        <span className={styles.labelText}>{el.name}</span>
                    </label>
                ))}
            </div>

            <div className={styles.filterBlock}>
                <p>Success launches</p>
                {success.map((el, i)=> (
                    <label
                        htmlFor={'s_'+el.value}
                        className={classNames(styles.label,{ [styles.selected]: checked.success === String(el.value) })}
                        key={i}
                    >
                        <input
                            type="radio"
                            name="success"
                            id={'s_'+el.value}
                            value={String(el.value)}
                            defaultChecked={i === 0}
                            onChange={handleFilter}
                        />
                        <span className={styles.labelText}>{el.name}</span>
                    </label>
                )) }
            </div>
        </div>
    </div>
)

