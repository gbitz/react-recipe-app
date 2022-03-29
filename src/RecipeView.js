import React from "react";

function RecipeView({recipe, handleDelete, index}) {
    return (
            <>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo}></img></td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <td>
                <button name="delete" onClick={() => handleDelete(index)}>Delete</button>
            </td>
            </>
    )
}

export default RecipeView