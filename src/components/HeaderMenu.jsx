// Component menu for xs medias
import styles from './HeaderMenu.module.scss';

function HeaderMenu () {
    return (
        <ul className={ `${ styles.MenuContainer} card`}>
            <li>WichList</li>
            <li>Connexion</li>
        </ul>
    )
};

export default HeaderMenu;