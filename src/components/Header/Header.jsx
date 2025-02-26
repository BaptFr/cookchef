
import styles from './Header.module.scss';
import { useState } from 'react';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';

function Header ({ setPage }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
                <div onClick={() => setPage("homepage")} className='flex-fill align-items-center cursor-pointer'>
                    <i  className= "fa-solid fa-utensils mr-10 " style={{color: '#ff6348',}} alt='cook-chef'></i>
                    COOK CHEF
                </div>
            <ul className={styles.headerList}>
                <button onClick={() => setPage("admin")} className='btn btn-primary'>Ajouter une recette </button>
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
            {showMenu &&
                <>
                <div onClick={() => setShowMenu(false)} className='calc'></div>
                <HeaderMenu />
                </>
            }
        </header>
    );
}

export default Header;