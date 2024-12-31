import List from "./ingredient-list";
import React from "react";

export default function Search() {
    const [ingredient, setIngredients] = React.useState("");

    const handleSubmission = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const freshItem = formData.get("ingredient");
        if(freshItem){
            setIngredients(freshItem);
            event.currentTarget.reset(); 
        }
    }

 return (
    <main>
        <form action="" className="add-ingredient-form" onSubmit={handleSubmission}>
            <input 
            type="text"
            aria-label="Add ingredient"
            placeholder="e.g. oregano"
            name="ingredient"
            />
            <button className="btn-search">Add ingredient</button>
        </form>
        <List 
            newItem={ingredient}
        />
    </main>
 )
}