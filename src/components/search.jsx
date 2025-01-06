import React from "react";
import List from "./ingredient-list";
import RecipeView from "./recipeview";

export default function Search() {
  const [ingredient, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false)

  function getRecipe() {
    setRecipeShown(prevState => !prevState)
  }

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
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={getRecipe}>Get a recipe</button>
          </div>
        )}
      </div>

      {
        recipeShown ? RecipeView() : null 
      }
    </main>
  );
}
