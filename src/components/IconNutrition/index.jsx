import styles from './IconNutrition.module.css';
import PropTypes from "prop-types";

function IconNutrition({icon, color, data, type}) {
  let measure;
  
  if (color === 'red'){
    measure = 'kCal';
  } else{
    measure = 'g';
  }

  return (
    <div className={styles.container}>
      <div className={`${styles[color]} ${styles.iconContainer}`} >
          <img src={icon} alt="" className={styles.icon} />
      </div>

      
        <div className={styles.infos}>
          <span>{data === undefined ? '' : data + measure}</span>
            {type}
        </div>
      

    </div>
  );
}

IconNutrition.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  data: PropTypes.number,
  type: PropTypes.string
}

export default IconNutrition;