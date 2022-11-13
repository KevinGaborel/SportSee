import styles from './Header.module.css';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

function  Header() {
  return (
    <header className={styles.header} >
        <img src={logo} alt=""  className={styles.logo} />
        <nav className={styles.nav} >
            <ul className={styles.ul} >
                <li className={styles.li} >
                    <Link to={'/'} className={styles.link} >Accueil</Link>
                </li>

                <li className={styles.li} >
                    <Link to={'/profil'} className={styles.link} >Profil</Link> 
                </li>

                <li className={styles.li} >
                    <Link to={'/reglage'} className={styles.link} >Réglage</Link>
                </li>

                <li className={styles.li} >
                    <Link to={'/profil'} className={styles.link} >Communauté</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;