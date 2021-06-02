import React from "react";
import CardItem from "./CardItem";

import styles from "./CardList.module.scss";

export const CardList = ({ card }) => (
  <div className={styles.cardsWrap}>
    {card.docs.map((card) => (
      <CardItem card={card} key={card.id} />
    ))}
  </div>
);
