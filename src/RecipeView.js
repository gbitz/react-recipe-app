import React from "react";

function RecipeView({recipe}) {
    console.log(recipe);
    

    return (
            <>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo}></img></td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <td>
                <button name="delete">Delete</button>
            </td>
            </>
    )
}

export default RecipeView