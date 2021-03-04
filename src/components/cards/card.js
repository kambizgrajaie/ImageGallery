import React from "react";
import './card.css';

const Card = ({ card }) => (
  <div className="card">
    <a href={card.img}>
      <img src={card.img} alt={card.title} />
    </a>
    <div className="desc">{card.title}</div>
    <div className="location"><i className="fa fa-map-marker-alt icon"></i>{card.location}</div>
  </div>
);

export default Card;
