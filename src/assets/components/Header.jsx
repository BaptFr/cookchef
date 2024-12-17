
import styles from './Header.module.scss';


function Header () {

    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>Header
            {/* <i class="fa-solid fa-bars"></i> */}
            {/* <div>
            <i className="fa-solid fa-cookie-bite" style="color: #ff6348;"></i>
            </div> */}
            <ul>
                <button>panier</button>
                <button>connection</button>
            </ul>
        </header>
    );
}

export default Header;