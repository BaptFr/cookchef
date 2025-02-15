import { useContext } from 'react';
import styles from './Recipe.module.scss';
import { ApiContext } from '../../../../context/ApiContext';

//double deconstruction
function Recipe({ recipe: { _id, liked, title, image }, toggleLikedRecipe }) {
    //Context use for API URL recup
    const BASE_URL_API = useContext(ApiContext);
    //Async because Server request
    async function handleClick () {
        try {
            const response = await fetch (`${ BASE_URL_API }/${ _id }`, {
                method:'PATCH',
                header :{
                    'Content-Type': 'application/json'
                },
                body: JSON.stirngify({
                    liked: !liked
                })
            });
            if (response.ok) {
                const updatedRecipe =  await response.json();
                toggleLikedRecipe(updatedRecipe);
            }
        }catch(e){
            console.log('ERREUR lors de la récupération des likes');
        }
    }

    return (
        <div onClick={ handleClick } className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={ image } alt='recipe' />
            </div>
            <div className= {`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}>
                <h3>{ title }</h3> <bh/>
                <i className={ `fa-solid fa-heart ${liked ? "text-primary" : "" }`}></i>
            </div>
        </div>
    )
}

export default Recipe;