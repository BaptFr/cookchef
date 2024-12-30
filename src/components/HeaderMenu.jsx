// Component menu for xs medias
import styles from './HeaderMenu.module.scss';

function HeaderMenu () {
    return (
        <ul className={ `${ styles.MenuContainer} card p-20`}>
            <li>WichList</li>
            <li>Connexion</li>
        </ul>
    )
};

export default HeaderMenu;