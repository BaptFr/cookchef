
import styles from './Header.module.scss';
import { useState } from 'react';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import { NavLink, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { wishlistDisplayState } from 'src/state';

function Header () {
    const [showMenu, setShowMenu] = useState(false);
    //Wishlist show state
    const setWishlistDisplay = useSetRecoilState(wishlistDisplayState);
    const location = useLocation();

    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
            <div className='flex-fill align-items-center cursor-pointer'>
                <NavLink to='/' style={{color: '#ff6348',}}>
                    <i  className= "fa-solid fa-utensils mr-10 " style={{color: '#ff6348',}} alt='cook-chef'></i>
                    COOK CHEF
                </NavLink>
            </div>
            <ul className={styles.headerList}>
                <NavLink to='/admin'>
                    <button className='btn btn-primary mr-15'>Admin</button>
                </NavLink>
                 {/* If in the panel Admin no wishlist nutton avalaible. Using location. */}
                { !location.pathname.includes('admin') && (
                    <button
                    className='mr-5 btn btn-reverse-primary mr-15'
                    onClick={() =>  setWishlistDisplay (true)}>
                    <i className="fa-solid fa-heart mr-5" />
                    <span className=' primary-color'>Wishlist</span>
                </button>
                )}
                {/* Next fonctionnality ?  <button className='mr-5 btn btn-primary'>connection</button> */}
            </ul>
            <i
                onClick={() => setShowMenu(true)}
                className={`fa-solid fa-bars ${styles.headerXs}`}
            ></i>
            {showMenu &&
                <>
                <div onClick={() => setShowMenu(false)} className='calc'></div>
                <HeaderMenu
                    displayWishlist = {  () => setWishlistDisplay(true)}
                    hideMenu= {() => setShowMenu(false)}
                />
                </>
            }
        </header>
    );
}

export default Header;