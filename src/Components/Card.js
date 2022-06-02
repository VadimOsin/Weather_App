import React from 'react';
import './Card.css'
const Card = ({name, description, temp, icon}) => {
    return (
        <div className="card">
            <div className="card__title">{name}</div>
            <img className="card__img" alt="weather img" src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
            <div className="card__description">{description}</div>
            <div className="card__temp">{Math.round(temp)}°C</div>
        </div>
    );
};

export default Card;