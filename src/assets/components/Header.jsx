
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCookieBite, faBasketShopping } from '@fortawesome/free-solid-svg-icons';



function Header () {

    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
                <FontAwesomeIcon icon={faBars} style={{color: "#ff6348", }}  />
                <div className='flex-fill align-items-center'>
                    <FontAwesomeIcon icon={faCookieBite} style={{color: "#ff6348",}} />
                    COOK CHEF
                </div>
            <ul >
                <button className='mr-5 btn btn-reverse-primary'>
                    <FontAwesomeIcon icon={faBasketShopping} />
                    <span>panier</span>
                </button>
                <button className='mr-5 btn btn-primary'>connection</button>
            </ul>
        </header>
    );
}

export default Header;