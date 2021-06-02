import React from "react";
import classNames from "classnames";
import styles from "./Filter.module.scss";

const success = [
  { name: "All", value: "all" },
  { name: "Yes", value: true },
  { name: "No", value: false },
];
// Этот массив лучше помещать в саму компоненту, через функцию useMemo и компонента не будет пересоздавать этот массив
const upcoming = [
  { name: "All", value: "all" },
  { name: "Yes", value: true },
  { name: "No", value: false },
];

export const Filter = ({ handleFilter, checked }) => (
  <div className="container">
    <div className={styles.filterWrap}>
      <div className={styles.filterBlock}>
        <p>Upcoming launches</p>
        {
          // Не называй переменные одной буквой, из-за этого сложнее код читать. Лучше назвать item, index это будет.
          upcoming.map((el, i) => (
            <label
              htmlFor={"u_" + el.value}
              className={classNames(styles.label, {
                [styles.selected]: checked.upcoming === String(el.value),
              })}
              // Как ключ индекс не стоит передавать это может потом повлиять на перерисоку этих элементов, если один из элементов поменяет свое расположение или удалится из массива.
              key={i}
            >
              <input
                type="radio"
                name="upcoming"
                id={"u_" + el.value}
                value={String(el.value)}
                defaultChecked={i === 0}
                onChange={handleFilter}
              />
              <span className={styles.labelText}>{el.name}</span>
            </label>
          ))
        }
      </div>

      <div className={styles.filterBlock}>
        <p>Success launches</p>
        {success.map((el, i) => (
          <label
            htmlFor={"s_" + el.value}
            className={classNames(styles.label, {
              [styles.selected]: checked.success === String(el.value),
            })}
            key={i}
          >
            <input
              type="radio"
              name="success"
              id={"s_" + el.value}
              value={String(el.value)}
              defaultChecked={i === 0}
              onChange={handleFilter}
            />
            <span className={styles.labelText}>{el.name}</span>
          </label>
        ))}
      </div>
    </div>
  </div>
);
