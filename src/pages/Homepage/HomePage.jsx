import { useState,  useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';
import styles from './Homepage.module.scss';
import Recipe from './components/Recipe/Recipe';
import Loading from '../../components/Loading/Loading';
import Search from './components/Search/Search';
import { useFetchRecipes } from '../../hooks';


export function HomePage () {
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    //Context use for API
    const BASE_URL_API = useContext(ApiContext);
    const [[recipes, setRecipes], isLoading] = useFetchRecipes( page);

    //Update recipe like function
    async function updateRecipe (updatedRecipe) {
        try {
            //Id generate by API restapi.fr; no id in the data
            const{_id, ...restRecipe} = updatedRecipe
            const response = await fetch (`${ BASE_URL_API }/${_id }`, {
                method:'PATCH',
                header :{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(restRecipe),
            });
            if (response.ok) {
                const updatedRecipe =  await response.json();
                setRecipes(recipes.map( (r) => (r._id === updatedRecipe._id ? updatedRecipe : r))
            );

            }
        }catch(e){
            console.log('ERREUR lors de la récupération des recettes aimées');
        }
    }
    //Delete recipe
    async function deleteRecipe (_id) {
        try {
            const response = await fetch (`${BASE_URL_API}/${_id} `,
                { method: 'DELETE', });
            if (response.ok) {
                setRecipes(recipes.filter( (r) => r._id !== _id));
            };
        } catch (e) {
            console.log ('Erreur');
        }
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
                            updateRecipe= { updateRecipe }
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
    )
}

export default HomePage;