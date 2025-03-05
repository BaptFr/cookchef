const RECIPE_API = 'https://restapi.fr/api/recipesdatas';

export async function getRecipes(queryParam) {
    const response = await fetch(`${RECIPE_API}${ queryParam ? `?${ queryParam }` : ''} `);
    if(response.ok) {
        const body = await response.json();
        return Array.isArray(body) ? body : [body];
        } else {
        throw new Error('Error fetch recipes');
    }
}
//GET Recipes
export async function getRecipe(_id) {
  const respone = await fetch(`${RECIPE_API}/${_id}`);
  if (respone.ok) {
    return response.json();
  } else {
    throw new Error ('Error fetch one recipe');
  }
}

//DELETE Recipes
export async function deleteRecipe(_id) {
    const response = await fetch (`${RECIPE_API}/${_id} `, {
         method: 'DELETE',
        });
    if (response.ok) {
        return_id;
    } else {
        throw new Error ('Error to delete the recipe');
    }
}

//UPDATED / LIKE Recipes
export async function updateRecipe(updatedRecipe) {
    //Id generate by API restapi.fr; no id in the data
    const{_id, ...restRecipe} = updatedRecipe;
    const response = await fetch (`${RECIPE_API}/${_id }`, {
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(restRecipe),
    });
    if (response.ok) {
        return response.json();
    } else {
        const errorMessage = await response.text(); //Debug search
        throw new Error (`${errorMessage} Error update the recipe `);
    }
}

//CREATE NEW RECIPE
export async function createRecipe(newRecipe) {
    const response = await fetch (RECIPE_API, {
        method:'PUT',
        header :{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRecipe),
    });
    if(response.ok) {
        return response.json();
    } else {
        throw new Error ('Error create recipe');
    }
}