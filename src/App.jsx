import React from "react";
import Header from "./components/header/Header";
import RecipeSearchBar from "./components/recipeSearchBar/recipeSearchBar";
import Cards from "./components/cards/cards";


function App() {
  return (
    <>
    <div>
      <Header/>
      <RecipeSearchBar/>
      <Cards/>
      
      </div>
    </>
  );
}

export default App;
