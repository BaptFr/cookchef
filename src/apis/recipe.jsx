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
export async function getRecipe() {}
export async function deleteRecipe() {}
export async function updateRecipe() {}
export async function createRecipe() {}