import styles from './BtnSport.module.css';
import PropTypes from "prop-types";

/**
 * It's a function that takes an object as a prop and returns a button with an image
 * @param {object} props  object containing the address of the button image
 * @param {string} props.img string, the address of the image
 * @return {JSX.Element} Button Sport
 */

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