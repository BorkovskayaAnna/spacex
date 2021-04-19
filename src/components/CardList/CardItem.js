import React from "react";

const CardItem = ({ card }) => (
    <div className="single-item">
        <img src={card.links.flickr.original[0]} alt={card.name} />
        <p>Name: {card.name}</p>
        <p>Success: {card.success ? 'Yes' :'No'}</p>
        <p>Upcoming: {card.upcoming ? 'Yes' :'No'}</p>
        <p>Flight number: {card.flight_number}</p>
        <p>Details: {card.details}</p>
    </div>
)

export default CardItem;
