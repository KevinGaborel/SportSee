import PropTypes from "prop-types";
import styles from "./CustomTooltip.module.css"

/**
* It is a function that takes an object as a prop and returns a Tooltip
* @param {object} props  data from a content to be displayed in the tooltip
* @param {boolean} props.active boolean, if set true, the tooltip is displayed. If set false, the tooltip is hidden
* @param {array} props.payload array, the source data of the content to be displayed in the tooltip
* @return {JSX.Element} Tooltip
*/
  
export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    if (payload[0].dataKey === 'weight'){
      
      return (
        <div className={styles.customTooltipBarChart} >
          <p className={styles.labelBarChart} >{`${payload[0].value}kg`}</p>
          <p className={styles.labelBarChart} >{`${payload[1].value}Kcal`}</p>
        </div>
      );
    } else{

        return (
          <div className={styles.customTooltipLineChart} >
            <p >{`${payload[0].value} min`}</p>
          </div>
      );
    }
  }
};

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.any,
        PropTypes.object
      ])),
  };