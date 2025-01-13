import { useState } from "react";
import Header from "../header/Header";
import RecipeSearchBar from "../recipeSearchBar/recipeSearchBar";
import Cards from "../cards/cards";
import { FadeLoader } from "react-spinners";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const[isLoading,setIsLoading]=useState(false);
  
  console.log("Recipes: ", recipes);

  return (
    <div>
      <Header />
      <RecipeSearchBar addRecipes={setRecipes} setLoader={setIsLoading} />
      {isLoading ?
      <div className="loader">
        <FadeLoader
        color="#16C47F"
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"/>
      </div> :
       <div className="recipe-cards">
       {recipes.map((recipe) => (
         <Cards recipe={recipe} />
       ))}
     </div>

      }
      
    
    
      
    </div>
  );
};
export default HomePage;
