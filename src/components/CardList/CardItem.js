import React from 'react'
import defaultImg from '../../assets/images/card-default.jpeg'

import style from './CardList.module.scss'

const CardItem = ({ card, imageLoaded }) => (
    <div className={style.singleItem}>
        <div className={style.imageWrap}>
            <img
                src={card.links.flickr.original[0] ? card.links.flickr.original[0] : defaultImg}
                alt={card.name}
            />
        </div>
        <p><strong>Name</strong>: {card.name}</p>
        <p><strong>Success:</strong>
            <span>{card.success === null ? ' -' : card.success ? ' Yes' : ' No'}</span>
        </p>
        <p><strong>Upcoming:</strong>
            <span>{card.upcoming === null ? ' -' : card.upcoming ? ' Yes' : ' No'} </span>
        </p>
        {card.details && <p className={style.description}><strong>Details:</strong> {card.details}</p>}
    </div>
)

export default CardItem;
