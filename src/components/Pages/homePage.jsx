import { useState } from "react";
import Header from "../header/Header";
import RecipeSearchBar from "../recipeSearchBar/recipeSearchBar";
import Cards from "../cards/cards";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  console.log("Recipes: ", recipes);

  return (
    <div>
      <Header />
      <RecipeSearchBar addRecipes={setRecipes} />
      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <Cards recipe={recipe} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
