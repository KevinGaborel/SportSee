import styles from './BtnSport.module.css';
import PropTypes from "prop-types";

function  BtnSport({img}) {
  return (
    <button className={styles.button} >
        <img src={img} alt="" className={styles.img} />
    </button>
  );
}

BtnSport.propTypes = {
  img: PropTypes.string
};

export default BtnSport;