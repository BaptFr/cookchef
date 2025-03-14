import { useFetchRecipes } from "src/hooks";
import { deleteRecipe as deleteR } from "src/apis";
import styles from './AdminRecipesList.module.scss';
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { recipesState } from "src/state";


function AdminRecipesList () {
    useFetchRecipes();
    const [recipes, setRecipes] = useRecoilState(recipesState);
    async function deleteRecipe(_id) {
        await deleteR(_id);
        setRecipes(recipes.filter( (r) => r._id !== _id));
    };

    return (// If recipes , map recipes names
        <ul className={ styles.list}>
            {recipes.length
            ? recipes.map( (r) => (
                <li key={r._id}
                className={ `d-flex align-items-center ${styles.li}`}>
                    <span className="flex-fill">{r.title}</span>
                    {/* Redirection to edit recipe */}
                    <NavLink to={`../edit/${r._id}`}>
                        <button className='btn btn-primary mr-15'
                        >Editer</button>
                    </NavLink>
                    {/* To delete recipe */}
                    <button className='btn btn-danger'
                    onClick={ () => deleteRecipe(r._id)}
                    >
                    Supprimer
                    </button>
                </li>
            ))
            :  'Erreur récupération noms des recettes' }
        </ul>
    );
};

export default AdminRecipesList;