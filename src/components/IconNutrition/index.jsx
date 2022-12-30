import styles from './IconNutrition.module.css';

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

export default IconNutrition;