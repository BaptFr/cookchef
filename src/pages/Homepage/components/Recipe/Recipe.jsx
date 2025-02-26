import { useContext } from 'react';
import styles from './Recipe.module.scss';
import { ApiContext } from '../../../../context/ApiContext';

//Infos://Rest api services to test front-end. need underscor "_id" (mongoDB)
    //double deconstruction
function Recipe({
        recipe: { _id, liked, title, image },
        toggleLikedRecipe,
        deleteRecipe,
    }) {
    //Context used for API URL recup
    const BASE_URL_API = useContext(ApiContext);
    //Async because Server request
    async function handleClickLike () {
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
            console.log('ERREUR lors de la récupération des recettes aimées');
        }
    }

    async function handleClickDelete (e) {
        e.stopPropagation();
        try {
            const response = await fetch (`${BASE_URL_API}/${_id} `,
                { method: 'DELETE', });
            if (response.ok) {
                deleteRecipe(_id);
            };
        } catch (e) {
            console.log ('Erreur');
        }
    }

    return (
        <div onClick={handleClickLike} className={styles.recipe}>
            <i onClick={handleClickDelete} className="fa-solid fa-xmark"></i>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} />
            </div>
            <div className= {`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}>
                <h3>{ title }</h3>
                <i className={ `fa-solid fa-heart ${liked ? "text-primary" : "" }`}></i>
            </div>
        </div>
    )
}

export default Recipe;