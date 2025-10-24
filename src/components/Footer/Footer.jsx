import styles from './Footer.module.scss';

function Footer () {
    return (
        <footer className={`${styles.footer} d-flex flex-row all-center p-20 text-align-center`} >
            <p>Copyright © 2024  - Cookchef - B.Salazar</p>
        </footer>
    )
}

export default Footer;