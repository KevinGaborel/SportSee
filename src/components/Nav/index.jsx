import styles from './Nav.module.css';
import { Link } from "react-router-dom";
import BtnSport from '../BtnSport';
import imgYoga from '../../assets/icons/yoga.png';
import imgRide from '../../assets/icons/ride.png';
import imgFit from '../../assets/icons/fit.png';
import imgSwim from '../../assets/icons/swim.png';


function  Nav() {
  return (
    <nav className={styles.nav} >
        <ul className={styles.ul} >
            <li className={styles.li} >
                <Link to={'/'} className={styles.link} > <BtnSport img={imgYoga} > </BtnSport> </Link>
            </li>

            <li className={styles.li} >
                <Link to={'/profil'} className={styles.link} > <BtnSport img={imgSwim} > </BtnSport> </Link> 
            </li>

            <li className={styles.li} >
                <Link to={'/reglage'} className={styles.link} > <BtnSport img={imgRide} > </BtnSport> </Link>
            </li>

            <li className={styles.li} >
                <Link to={'/profil'} className={styles.link} > <BtnSport img={imgFit} > </BtnSport> </Link>
            </li>
        </ul>

        <span className={styles.copi} >Copiryght, SportSee 2020</span>
    </nav>
  );
}

export default Nav;