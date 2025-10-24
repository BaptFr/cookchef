import { useSetRecoilState, useRecoilValue, useResetRecoilState} from 'recoil';
import styles from './Wishlist.module.scss';
import { recipesState, selectWishedRecipe, wishlistDisplayState } from 'src/state';
import { updateRecipe } from 'src/apis';
import { useState } from 'react';

function Wishlist () {
    //Liked/wish recipes state
    const setWishlistDisplay = useSetRecoilState(wishlistDisplayState);
    //Wished recipes
    const wishedRecipes = useRecoilValue(selectWishedRecipe);
    const setRecipes = useResetRecoilState(recipesState);
    const [remove, setRemove] = useState(false);
    //Function to removed Wishlist recipe after unliked click
    async function handleClick (recipe) {
        const updatedRecipe = await updateRecipe ({ ...recipe, liked: false});
        setRecipes((oldRecipes) =>
            oldRecipes.map( (or) =>
                or._id === updatedRecipe._id ? updatedRecipe : or
            )
        );
    }
    //Function for the Wishlist desapear add a delay for the animation before desapear from the DOM
    function handleRemoveWishList() {
        if(!remove) {
            setTimeout (() => {
                setWishlistDisplay(false)
            }, 400);
            setRemove(true);
        }
    };


    return(
        <div className={ styles.container} onClick={handleRemoveWishList}>
            <div onClick={(e) => e.stopPropagation()} className= {`${ styles.wishlist} ${ remove ? styles.remove : '' }`}>
                <h4 className='mb-20'>Wishlist</h4>
                <ul>
                    {wishedRecipes.length &&
                    wishedRecipes.map ( r =>  (
                        <li key= {r._id} className='d-flex align-items-center'>
                            <span className='flex-fill mr-15'>{r.title} </span>
                            <button className='btn btn-danger' onClick={ () => handleClick(r._id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Wishlist;