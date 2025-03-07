import { useFetchRecipes } from "../../../../../../hooks";
import { deleteRecipe as deleteR } from "../../../../../../apis";
import styles from './AdminRecipesList.module.scss';
import { NavLink } from "react-router-dom";

function AdminRecipesList () {

    const [[recipes, setRecipes]] = useFetchRecipes();
    async function deleteRecipe(_id) {
        await deleteR(_id);
        setRecipes(recipes.filter( (r) => r._id !== _id));
    };

    return (// If recipes , map recipes names
        <ul className={ styles.list}>
            {recipes.length
            ? recipes.map( (r) => (
                <li key={r._id} className='d-flex align-items-center'>
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