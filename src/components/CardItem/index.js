import React from 'react'

import style from "./CardItem.module.scss";
import defaultImg from "../../assets/images/card-default.jpeg";

export const CardItem = ({card}) => (
  <div className={style.singleItem}>
    <div className={style.imageWrap}>
      <img
        src={
          card.links.flickr.original[0]
            ? card.links.flickr.original[0]
            : defaultImg
        }
        alt={card.name}
      />
    </div>
    <p>
      <strong>Name</strong>: {card.name}</p>
    <p>
      <strong>Success:</strong>
      &nbsp;{card.success === null ? '-' : card.success ? ' Yes' : ' No'}
    </p>
    <p>
      <strong>Upcoming:</strong>
      &nbsp;{card.upcoming === null ? '-' : card.upcoming ? ' Yes' : ' No'}
    </p>
    {card.details &&
    <p className={style.description}>
      <strong>Details:</strong>
      &nbsp;{card.details}
    </p>
    }
  </div>
)
