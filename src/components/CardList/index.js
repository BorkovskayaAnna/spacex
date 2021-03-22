import React from 'react'
import CardItem from './CardItem'
import styles from './index.css'

function CardList({cards, search}) {
    return (
        <>
        {cards === null ? (
            <p>loading ...</p>
        ) : (
            cards.map(card => card.name.toLowerCase().includes(search)  ? (
                    <CardItem cards={card} />
                ) : ''
            )
        )}
        </>
    )
}

export default CardList;
