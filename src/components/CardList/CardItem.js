import React from "react";
import defaultImg from "../../assets/images/card-default.jpeg";

import style from "./CardList.module.scss";
// Для этой компоненты нужно было создать папку внутри CardList и туда поместить эту компоненту и стили к ней
// Не используется imageLoaded
const CardItem = ({ card, imageLoaded }) => (
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
    {/* Тут немного в разнобой верстка ниже ты через span указываешь нужно придерживатся единого стиля что бы и тебе было потом удобнее читать твой код или другим) */}
    {/* В данном контексе можно было не использовать span, и можно пробелы указывать через &nbsp; в html разметке это не разрывный пробел */}
    <p>
      <strong>Name</strong>:&nbsp;{card.name}
    </p>
    <p>
      <strong>Success:</strong>
      <span>
        &nbsp;{card.success === null ? "-" : card.success ? " Yes" : " No"}
      </span>
    </p>
    <p>
      <strong>Upcoming:</strong>
      <span>
        &nbsp;{card.upcoming === null ? "-" : card.upcoming ? " Yes" : " No"}{" "}
      </span>
    </p>
    {card.details && (
      <p className={style.description}>
        <strong>Details:</strong>&nbsp;{card.details}
      </p>
    )}
  </div>
);
// Во всем проекте ты используешь именнованый export, а тут по default тоже лучше придерживатся одного вида import/export.
export default CardItem;
