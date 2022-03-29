import React, { useState } from "react";

function RecipeCreate() {


  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td><input name="name" placeholder="Name"></input></td>
            <td><input name="cuisine" placeholder="Cuisine"></input></td>
            <td><input name="url" placeholder="URL"></input></td>
            <td><textarea name="ingredients" placeholder="Ingredients"></textarea></td>
            <td><textarea name="preparation" placeholder="Preparation"></textarea></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
