import React, { useRef } from "react";
import List from "./ingredient-list";
import RecipeView from "./recipeview";
import { getRecipeFromMistral } from "../../ai";

export default function Search() {
  const [ingredient, setIngredients] = React.useState([]);
  const [recipeShown, setUiState] = React.useState({
    isLoading: false,
    recipe: null,
    error: null
  });

  async function getRecipe() {
    try {
    setUiState({ isLoading: true, recipe: null, error: null });
    const recipe = await getRecipeFromMistral(ingredient);
    setUiState({ isLoading: false, recipe, error: null });
    console.log("data",recipe);
    }
    catch(err){
      setUiState({ isLoading: false, recipe: null, error: err });
    }
  }

  const recipeRef = useRef(null);
  console.log(recipeRef)

  React.useEffect(() => {
    if(recipeShown.recipe){
      recipeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

  }, [recipeShown])

  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission
    const formData = new FormData(event.target);
    const freshItem = formData.get("ingredient");
    if (freshItem) {
      setIngredients((prevIngredien) => [...prevIngredien, freshItem]);
      event.target.reset();
    }
  }


  

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit} className="add-ingredient-form">
          <input
            type="text"
            aria-label="Add ingredient"
            placeholder="e.g. oregano"
            name="ingredient"
          />

          <button className="btn-search">Add ingredient</button>
        </form>
        <List newItem={ingredient} />
        {ingredient.length > 3 && (
          <div className="get-recipe-container"
          >
            <div ref={recipeRef}>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={getRecipe}>{recipeShown.isLoading ? "Loading..." : "Get a recipe"}</button>
          </div>
        )}
      </div>

      {
        recipeShown.recipe ? RecipeView(recipeShown.recipe) : null 
      }
    </main>
  );
}
