import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";
import styles from './RadarChart.module.css';
import Loader from "../Loader";

const GraphRadarChart = ({data, kind}) => {
  let renderRadarChart;

  if (data !== undefined && kind !== undefined){

    const dataRadarChart = data.map(obj => {
      kind = [
        "Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"
      ]
      
      const newData = {
        kind: kind[obj.kind - 1],
        value: obj.value,
      }
  
      return newData;
    });
  
    renderRadarChart = (
      <RadarChart 
        data={dataRadarChart} 
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
      >
        
        <PolarGrid />
        <PolarAngleAxis 
          dataKey="kind" 
          stroke={"#ffffff"}
          tickLine={false}   
        />
        <Radar 
          dataKey="value" 
          fill='#be0e0f' 
          opacity={0.9} 
        />
      </RadarChart>
    );
  }

    return (
      <div className={styles.container} >
        <ResponsiveContainer height={200} className={styles.responsiveContainer} >
          {renderRadarChart ? renderRadarChart : < Loader />}
        </ResponsiveContainer>
      </div>
    );
}

GraphRadarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.number
    })
  ),
  kind: PropTypes.objectOf(PropTypes.string)
};

export default GraphRadarChart;