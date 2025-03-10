import { useSetRecoilState } from 'recoil';
import styles from './Wishlist.module.scss';
import { wishlistDisplayState } from 'src/state';


function Wishlist () {
    const setWishlistDisplay = useSetRecoilState(wishlistDisplayState);
    return(
        <div className={ styles.container} onClick={ () => setWishlistDisplay(false)}>
            <div className={ styles.wishlist } onClick={(e) => e.stopPropagation()}>
                <h2>Wishlist</h2>
            </div>
        </div>
    );
};

export default Wishlist;