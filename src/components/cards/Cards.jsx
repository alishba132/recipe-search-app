import React from "react";
import clock from "../../assets/clock.png";
import ratingStar from "../../assets/star.png";
import "./cards.css";

const Cards = ({ recipe }) => {
  return (
    <div className="main-card">
      <img
        src={recipe.image}
        alt={recipe.name}
        width="350px"
        className="recipe-image"
      />
      <p className="recipe-name">{recipe.name}</p>
      <div className="recipe-info">
        <div className="make-time">
            <img src={clock} alt="clock" height="15px" width="15px"/>
          <p>{recipe.cookTimeMinutes}min</p>
        </div>
        <div className="recipe-ratings">
          <p>
            4.9{recipe.ratings}
            <img src={ratingStar}  alt="rating Star" width="15px" height="15px"/>
            
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cards;
