import { useState } from 'react';
import styles from './Homepage.module.scss';
import Recipe from './components/Recipe/Recipe';
import { data } from '../../data/recipes';

export function Content () {
    const recipes = data;
    const [filter, setFitler]= useState(''); 

    function handleInput (e) {
        const filter = e.target.value;
        setFitler(filter.trim().toLowerCase());
    }

    return(
        <div className='flex-fill container'>
            <h1 className='my-30'>Découvrez nos nouvelles recettes</h1>
            <div className={`d-flex flex-column card p-20 ${styles.contentCard} br`}>
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
                <div className={styles.grid}>
                    { recipes
                    .filter( (r) => r.title.toLowerCase().startsWith(filter))
                    .map ( (r) => (
                        <Recipe key={r._id} title={r.title} image = {r.image}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Content;