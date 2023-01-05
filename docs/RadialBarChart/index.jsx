import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import styles from './RadialBarChart.module.css';
import Loader from "../Loader";
import PropTypes from 'prop-types';

/**
 * It is a function that takes an object as a prop and returns a Radial chart
 * @param {object} props  data from a user to Radial Chart
 * @param {number} props.data number, user score
 * @return {JSX.Element} Radial Chart
 */

const GraphRadialBarChart = ({data}) => {
  let renderRadialChart;
  let renderScore;

  if (data !== undefined){
    const dataRadialBarChart = [
      {
        score: 1,
        fill: "#FFFFFF"
      },
      {
        score: data,
        fill: "#FF0000"
      }
    ];

    renderRadialChart = (
      <RadialBarChart 
        barSize={10} 
        data={dataRadialBarChart} 
        outerRadius='150%'
        startAngle={100}
        endAngle={460}
        style={{ background: "transparent"}}
      >

        <RadialBar  
          background={false}
          dataKey="score"
          cornerRadius={5}
        />

      </RadialBarChart>
    );

    renderScore = (
      <div className={styles.score} >
          <span>{data * 100}% </span>
          <span className={styles.objectif} >de votre objectif</span>
      </div>
    );

  }


    return (
      <div className={styles.container} >

        <h3 className={styles.title} >Score</h3>

        {renderRadialChart && renderScore}

        <ResponsiveContainer height={200} >
          {renderRadialChart ? renderRadialChart : < Loader />}
        </ResponsiveContainer>


      </div>
    );
}

GraphRadialBarChart.propTypes = {
  data: PropTypes.number
};

export default GraphRadialBarChart;