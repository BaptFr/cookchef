import { useState,  useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import styles from './Homepage.module.scss';
import Recipe from './components/Recipe/Recipe';
import Loading from '../../components/Loading/Loading';
import Search from './components/Search/Search';
import { useFetchData } from '../../hooks/useFetchData';



export function HomePage () {
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    //Context use for API
    const BASE_URL_API = useContext(ApiContext);
    const [[recipes, setRecipes], isLoading] = useFetchData(BASE_URL_API, page);

    //Update recipe like state
    function updateRecipe (updatedRecipe) {
        setRecipes(recipes.map( r =>r._id === updatedRecipe._id ? updateRecipe : r))
    }

    return(
        <div className='flex-fill container d-flex flex-column'>
            <h1 className='my-30'>
                Découvrez nos nouvelles recettes {' '}
                <small className={styles.small}>- {recipes.length}</small>
                </h1>
            <div className={`d-flex flex-column flex-fill card p-20 mb-20 ${styles.contentCard} br`}>
                <Search  setFilter={ setFilter } />
                {/* Filter by the input value and map the result */}
                { isLoading ? (
                   <Loading />
                ) : (
                    <div className={styles.grid}>
                    { recipes
                    .filter( (r) => r.title.toLowerCase().startsWith(filter))
                    .map ( (r) => (
                        <Recipe
                            key={r._id}
                            recipe={r}
                            toggleLikedRecipe= { updateRecipe }
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
    )
}

export default HomePage;