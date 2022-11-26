import styles from './BtnSport.module.css';
import { Link } from "react-router-dom";

function  BtnSport({img}) {
  return (
    <button className={styles.button} >
        <img src={img} alt="" className={styles.img} />
    </button>
  );
}

export default BtnSport;