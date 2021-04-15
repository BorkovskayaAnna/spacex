import React from "react";

const CardItem = ({ card }) => (
    <div className="single-item">
        <img src={card.links.flickr.original[0]} alt={card.name} />
        Name: <h1>{card.name}</h1>
        <p>Success: {card.success ? 'Yes' :'No'}</p>
        <p>Upcoming: {card.upcoming ? 'Yes' :'No'}</p>
        <p>Flight number: {card.flight_number}</p>

        {/*{!card.links === false ? (*/}
        {/*    card.links.flickr.original.map(imgSrc => (*/}
        {/*        <img src={imgSrc} alt={card.name} />*/}
        {/*    ))*/}
        {/*)  : '' };*/}


        {/*<img src={cards.flickr_images[0]} alt={cards.name} />*/}
        {/*<div className="item-gallery">*/}
        {/*    {cards.flickr_images.map((img, i)=>(*/}
        {/*        <img key={i} src={img} alt={cards.name} />*/}
        {/*    ))}*/}
        {/*</div>*/}
        {/*<p><strong>Type</strong>: {cards.type}</p>*/}
        {/*<p><strong>Description</strong>: {cards.description}</p>*/}
    </div>
)

export default CardItem;
