// Component menu for xs medias
import styles from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';

function HeaderMenu ({ displayWishlist, hideMenu }) {
    return (
        <ul className={ `${ styles.MenuContainer} card p-20`} onClick = {hideMenu}>
            <li>
                <NavLink to='/admin' >Admin</NavLink>
            </li>
            <li onClick={displayWishlist}>WichList</li>
            {/* <li>Connexion</li>  Next fonctionnality ? */}
        </ul>
    )
};

export default HeaderMenu;