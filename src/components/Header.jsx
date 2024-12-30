
import styles from './Header.module.scss';
import { useState } from 'react';
import HeaderMenu from './HeaderMenu';

function Header () {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
                <div className='flex-fill align-items-center'>
                    <i className= "fa-solid fa-utensils mr-10 " style={{color: "#ff6348",}}></i>
                    COOK CHEF
                </div>
            <ul className={styles.headerList}>
                <button className='mr-5 btn btn-reverse-primary'>
                    <i className='fa-solid fa-basket-shopping mr-10'></i>
                    <span className=' primary-color'>Wishlist</span>
                </button>
                <button className='mr-5 btn btn-primary'>connection</button>
            </ul>
            <i
                onClick={() => setShowMenu(true)}
                className={`fa-solid fa-bars ${styles.headerXs}`}
                ></i>
            {showMenu && <HeaderMenu />}
        </header>
    );
}

export default Header;