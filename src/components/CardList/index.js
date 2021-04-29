import React from 'react'
import CardItem from './CardItem'
import styles from './index.css'

function CardList({card}) {
    return (
        <div className="cards-wrap">
        {card.docs == null ? 'Loading...' :
            card.docs.map(card => (
                <CardItem card={card} key={card.id} />
            ))
        }
        </div>
    )
}

export default CardList;
