import React, { useMemo } from 'react';
import classNames from 'classnames'

import styles from './Filter.module.scss'

export const Filter = ({handleFilter, checked}) => {
  const success = useMemo(()=>{
    return [
      {name: 'All', value: 'all'},
      {name: 'Yes', value: 'true'},
      {name: 'No', value: 'false'}
      ]
  },[])

  const upcoming = useMemo(()=> {
    return [
      {name: 'All', value: 'all'},
      {name: 'Yes', value: 'true'},
      {name: 'No', value: 'false'}
    ]
  },[])

  return (
    <div className="container">
      <div className={styles.filterWrap}>
        <div className={styles.filterBlock}>
          <p>Success launches</p>
          {
            success.map((item, index) => (
              <label
                htmlFor={'s_' + item.value}
                className={classNames(styles.label, {[styles.selected]: checked.success === item.value})}
                key={item.name}
              >
                <input
                  type="radio"
                  name="success"
                  id={'s_' + item.value}
                  value={item.value}
                  defaultChecked={index === 0}
                  onChange={handleFilter}
                />
                <span className={styles.labelText}>{item.name}</span>
              </label>
            ))
          }

        </div>
        <div className={styles.filterBlock}>
          <p>Upcoming launches</p>
          {
            upcoming.map((item, index) => (
              <label
                htmlFor={'u_' + item.value}
                className={classNames(styles.label, {[styles.selected]: checked.upcoming === item.value})}
                key={item.name}
              >
                <input
                  type="radio"
                  name="upcoming"
                  id={'u_' + item.value}
                  value={item.value}
                  defaultChecked={index === 0}
                  onChange={handleFilter}
                />
                <span className={styles.labelText}>{item.name}</span>
              </label>
            ))
          }
        </div>
      </div>
    </div>
  )
}


