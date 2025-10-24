import { useState } from 'react';
import styles from './Homepage.module.scss';
import Recipe from './components/Recipe/Recipe';
import Loading from 'src/components/Loading/Loading';
import Search from './components/Search/Search';
import Wishlist from 'src/pages/Homepage/components/Wishlist/Wishlist';
import { useFetchRecipes } from 'src/hooks';
import { updateRecipe as updateR, deleteRecipe as deleteR } from 'src/apis';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { recipesState, selectFilteredRecipes, wishlistDisplayState } from 'src/state';



export function HomePage () {
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    //Context use for API
    const [isLoading]  = useFetchRecipes(page); //Personalized Hook with params (to not reload pages).
    const recipes = useRecoilValue(selectFilteredRecipes(filter));
    const setRecipes = useSetRecoilState(recipesState);
    //Wihlist show state atom
    const showWishlist = useRecoilValue(wishlistDisplayState);

    //Update recipe like function
    async function updateRecipe(updatedRecipe) {
        const savedRecipe= await updateR(updatedRecipe);
        setRecipes(
            recipes.map( (r) => (r._id === savedRecipe._id ? savedRecipe : r))
        );
    }

    //Delete recipe
    async function deleteRecipe(_id) {
        await deleteR(_id);
        setRecipes(recipes.filter( (r) => r._id !== _id));
    }
    return(
        <>
            <div className='flex-fill container d-flex flex-column'>
                <h1 className='my-30'>
                    Découvrez nos nouvelles recettes {' '}
                    <small className={styles.small}>- {recipes.length}</small>
                    </h1>
                <div className={`d-flex flex-column flex-fill card p-20 mb-20 ${styles.contentCard}`}>
                    <Search  setFilter={ setFilter } />
                    {/* Filter by the input value and map the result */}
                    {isLoading && !recipes.length ? (
                    <Loading />
                    ) : (
                        <div className={styles.grid}>
                        { recipes
                        .filter( (r) => r.title.toLowerCase().startsWith(filter))
                        .map ( (r) => (
                            <Recipe
                                key={r._id}
                                recipe={r}
                                updateRecipe = { updateRecipe }
                                deleteRecipe = { deleteRecipe }
                            />
                        ))}
                    </div>
                    )}
                    <div className=' d-flex flex-row all-center p-20'>
                        <button onClick={ () => setPage(page + 1) } className='btn btn-primary'>
                            Charger plus de recettes
                        </button>
                    </div>
                </div>
            </div>
            {showWishlist && <Wishlist />}
        </>
    )
}

export default HomePage;