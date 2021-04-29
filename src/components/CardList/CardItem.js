import React from "react";

const CardItem = ({ card }) => (
    <div className="single-item">
        <img src={card.links.flickr.original[0]} alt={card.name} />
        <p>Name: {card.name}</p>
        <p>Success:
            <span style={{color: card.success ? 'green' : 'red'}}>{card.success ? ' Yes' :'No'}</span>
        </p>
        <p>Upcoming:
            <span style={{color: card.upcoming ? 'green' : 'red'}}> {card.upcoming ? ' Yes' :'No'}</span>
        </p>
        <p>Flight number: {card.flight_number}</p>
        <p>TBD: {card.tbd ? 'Yes' :'No'}</p>
        <p>Details: {card.details}</p>
    </div>
)

export default CardItem;
