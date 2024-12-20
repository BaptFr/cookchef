import styles from './Recipe.module.scss';
import recipe from '../images/recette.jpg';

function Recipe() {

    return (
        <div className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={recipe} alt='recipe' />
            </div>
            <div className= {`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}>
                <h3>Poulet gnocchis et kale</h3>
            </div>
        </div>
    )
}

export default Recipe;