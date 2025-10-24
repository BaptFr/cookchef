import { selector, selectorFamily } from "recoil";
import { recipesState } from "./atoms";
import { getRecipe } from "src/apis";

//Selector family for a dynamic filter
export const selectFilteredRecipes = selectorFamily({
    key: 'selectFilteredRecipes',
    get: (filter) =>
        ({ get }) => {
        const recipes = get(recipesState);
        return (
        recipes.length &&
        recipes.filter((r) => r.title.toLowerCase().startsWith(filter))
        );
    },
});

export const selectActiveRecipe = selectorFamily ({
    key:'selectActiveRecipe',
    get: recipeId => async () => recipeId && (await getRecipe(recipeId)),
});

//To select liked recipes
export const selectWishedRecipe = selector({
    key:'selectWishedRecipe',
    get: ({ get }) => get(recipesState)?.filter( r => r.liked),
});