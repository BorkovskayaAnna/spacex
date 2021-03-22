import React from "react";

const CardItem = ({ cards }) => (
    <li className="single-item" >
        <h1>{cards.name}</h1>
        <img src={cards.flickr_images[0]} alt={cards.name} />
        <div className="item-gallery">
            {cards.flickr_images.map((img, i)=>(
                <img key={i} src={img} alt={cards.name} />
            ))}
        </div>
        <p><strong>Type</strong>: {cards.type}</p>
        <p><strong>Description</strong>: {cards.description}</p>
    </li>
)

export default CardItem;
