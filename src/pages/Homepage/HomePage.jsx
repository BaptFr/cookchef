import { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import styles from './Homepage.module.scss';
import Recipe from './components/Recipe/Recipe';
import Loading from '../../components/Loading/Loading';



export function HomePage () {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFitler]= useState('');


    //Context use for API
    const BASE_URL_API = useContext(ApiContext);
    //Api request
    useEffect ( () => {
        let cancel = false; //For infos verification
        async function fetchRecipes () { //fetch is a GET by default
            try {
                setIsLoading(true)
                const response = await fetch (BASE_URL_API);
                if (response.ok && !cancel) {
                    const recipes = await response.json();
                    // Is an array  ?
                    setRecipes (Array.isArray(recipes) ? recipes : [recipes]);
                    console.log(recipes);
                }
            } catch (e) {
                console.log('ERREUR');
            } finally {
                //Stop the loading when datas ar loaded.
                if (!cancel) {
                    setIsLoading(false)
                }
            }
        }
        fetchRecipes();
        return () => (cancel = true);
    }, []);


    function handleInput (e) {
        const filter = e.target.value;
        setFitler(filter.trim().toLowerCase());
    }

    return(
        <div className='flex-fill container d-flex flex-column'>
            <h1 className='my-30'>Découvrez nos nouvelles recettes</h1>
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
                        <Recipe key={r._id} title={r.title} image = {r.image}/>
                    ))}
                </div>
                )}
            </div>
        </div>
    )
}

export default HomePage;