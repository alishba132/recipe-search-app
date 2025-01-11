import React, { useState } from "react";
import "./recipeSearchBar.css";
const RecipeSearchBar=()=>{
    const [recipes,setRecipes]=useState([]);
    const [keyword,setKeyword]=useState("");
    const getSearchedRecipes=(recipe)=>{
        fetch(`https://dummyjson.com/recipes/search?q=${recipe}`)
        .then((response)=>response.json())
        .then((data)=>console.log(data));

    }
    return(
        <div className="recipe-control-search-app">
            <input type="text" placeholder="Enter your favrouite recipe" className="search-bar" onChange={(e)=>setKeyword(e.target.value)}/>
            <button className="search-btn" onClick={()=>getSearchedRecipes(keyword)}>Search recipe of your choice</button>

        </div>
    )
}
export default RecipeSearchBar;