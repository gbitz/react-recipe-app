import React from "react";

function RecipeView({recipe}) {


    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo}></img></td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default RecipeView