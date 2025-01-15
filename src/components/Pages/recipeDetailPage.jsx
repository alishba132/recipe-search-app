import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const RecipeDetailPage = () => {
    const [searchParams]=useSearchParams();
    const recipeId= searchParams.get("id");
  let [recipeDetail, setRecipeDetail] = useState({});
  

  const getSingleRecipeDetail = () => {
    fetch(`https://dummyjson.com/recipes/${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipeDetail(data);
      });
  };

  useEffect(() => {
    getSingleRecipeDetail();
  }, []);
  return (
    <div className="recipe-detail" >
      <div className="recipe-image">
        <img src={recipeDetail.image} alt={recipeDetail.name} width="500px" height="500px" />
      </div>
      <div className="detail">
        <div className="recipe-detail-info">
          <p className="heading">Name</p>
          <p className="recipe">{recipeDetail.name}</p>
        </div>
        <div className="recipe-detail-info">
          <p className="heading">Cuisine</p>
          <p className="recipe">{recipeDetail.cuisine}</p>
        </div>

        <div className="recipe-detail-info">
          <p className="heading">Calories</p>
          <p className="recipe">
            {recipeDetail.caloriesPerServing} Per Serving
          </p>
        </div>

        <div className="recipe-detail-info-ingredients">
          <p className="heading">Ingredients</p>
          <div className="ingredients">
            <ul>
              {recipeDetail?.ingredients?.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeDetailPage;
