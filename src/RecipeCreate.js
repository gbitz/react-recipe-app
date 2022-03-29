import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  const [formData, setFormData] = useState({...initialFormState});

  const handleChange =({target}) => {
    const value = target.value
    setFormData({
      ...formData,
      [target.name]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData])
    setFormData({...initialFormState});
  }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr className="row">
            <td>
              <input
                id="name"
                name="name"
                placeholder="Name"
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine" 
                placeholder="Cuisine"
                onChange={handleChange}
              />
            </td>
            <td>
              <input 
                id="photo"
                name="photo" 
                placeholder="URL"
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea 
                id="ingredients" 
                name="ingredients" 
                placeholder="Ingredients"
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea 
                id="preparation"
                name="preparation" 
                placeholder="Preparation" 
                onChange={handleChange}
              />
            </td>
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
