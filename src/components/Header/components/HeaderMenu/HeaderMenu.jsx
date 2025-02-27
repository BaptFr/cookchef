// Component menu for xs medias
import styles from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';

function HeaderMenu () {
    return (
        <ul className={ `${ styles.MenuContainer} card p-20`}>
            <li>
                <NavLink to='/admin' >Ajouter une recette</NavLink>
            </li>
            <li>WichList</li>
            <li>Connexion</li>
        </ul>
    )
};

export default HeaderMenu;