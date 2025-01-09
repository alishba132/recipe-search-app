import recipeCard1 from "../../assets/recipe-card1.svg";
import "./cards.css";
import React from "react";
const Cards=()=>{
    return(
        <div className="main-card">
            <img src={recipeCard1} alt="recipeCard1"  width="200px"  className="recipe-image" />
            <p className="recipe-name">Pasta</p>
            <div className="recipe-info">
                <div className="make-time">
                    <p>30min</p>
                </div>
                <div className="recipe-ratings">
                    <p>4.5
                        <span className=" star full">★</span>
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star half">★</span>
                    </p>
                </div>

            </div>

        </div>
    )
}
export default Cards;