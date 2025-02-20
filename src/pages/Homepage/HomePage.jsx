import { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import styles from './Homepage.module.scss';
import Recipe from './components/Recipe/Recipe';
import Loading from '../../components/Loading/Loading';



export function HomePage () {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFitler] = useState('');
    const [page, setPage] = useState(1);


    //Context use for API
    const BASE_URL_API = useContext(ApiContext);
    //Api request
    useEffect ( () => {
        let cancel = false; //For infos verification
        async function fetchRecipes () { //fetch is a GET by default
            try {
                setIsLoading(true)
                const response = await fetch (`${BASE_URL_API}?skip=${ (page - 1) * 18 }&limit=18`); //Dyma Restapi settings ; (page -1 first page = 1 - 1 = 0)
                if (response.ok && !cancel) {
                    const newRecipes = await response.json();
                    // Is an array  ?
                    setRecipes ( (x) =>
                        Array.isArray(recipes) 
                    ? [...x, ...newRecipes] 
                    : [...x, newRecipes]
                    );
                }
            } catch (e) {
                console.log('ERREUR');
            } finally {
                //Stop the loading when datas are loaded.
                if (!cancel) {
                    setIsLoading(false)
                }
            }
        }
        fetchRecipes();
        return () => (cancel = true);
    }, [BASE_URL_API, page]);

    //Update recipe like state
    function updateRecipe (updatedRecipe) {
        setRecipes(recipes.map( r =>r._id === updatedRecipe._id ? updateRecipe : r))
    }

    function handleInput (e) {
        const filter = e.target.value;
        setFitler(filter.trim().toLowerCase());
    }

    return(
        <div className='flex-fill container d-flex flex-column'>
            <h1 className='my-30'>
                Découvrez nos nouvelles recettes {' '}
                <small className={styles.small}>- {recipes.length}</small>
                </h1>
            <div className={`d-flex flex-column flex-fill card p-20 mb-20 ${styles.contentCard} br`}>
                <div className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar} `}>
                    <i className='fa-solid fa-magnifying-glass mr-15'></i>
                    <input
                        className='flex-fill'
                        type='text'
                        placeholder='Rechercher'
                        onInput={ handleInput }
                    />
                </div>
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