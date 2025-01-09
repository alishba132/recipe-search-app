import React from "react";
import "./recipeSearchBar.css";
const RecipeSearchBar=()=>{
    return(
        <div className="recipe-control-search-app">
            <input type="text" placeholder="Enter your favrouite recipe" className="search-bar"/>
            <button className="search-btn">Search recipe of your choice</button>

        </div>
    )
}
export default RecipeSearchBar;