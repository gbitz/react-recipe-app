import React from "react";

function RecipeView({recipe, handleDelete, index}) {
    return (
            <tr className="row" key={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img style={{objectFit:"scale-down", width:"100%", height:"100%"}} src={recipe.photo}></img></td>
                <td className="content_td"><p>{recipe.ingredients}</p></td>
                <td className="content_td"><p>{recipe.preparation}</p></td>
                <td>
                    <button name="delete" onClick={() => handleDelete(index)}>Delete</button>
                </td>
            </tr>
    )
}

export default RecipeView