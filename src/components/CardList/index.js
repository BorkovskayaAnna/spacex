import React from 'react'
import CardItem from './CardItem'
import styles from './index.css'

function CardList({card}) {
// console.log(card)
    return (
        <div className="cards-wrap">
        {card.docs == null ? 'Loading...' :
            card.docs.map(card => (
                <CardItem card={card} key={card.id} />
            ))
        }

        {/*{cards === null ? (*/}
        {/*    <>*/}
        {/*        <p>loading ...</p>*/}

        {/*    </>*/}
        {/*) : (*/}
        {/*    <>*/}
        {/*        {*/}
        {/*            cards.map(card => (*/}
        {/*                    <>*/}
        {/*                        <CardItem cards={card} />*/}

        {/*                    </>*/}
        {/*                )*/}
        {/*            )*/}
        {/*        }*/}
        {/*    </>*/}
        {/*)}*/}
        </div>
    )
}

export default CardList;
