import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import PropTypes from "prop-types";
import styles from './LineChart.module.css';
import Loader from '../Loader';

/**
 * It is a function that takes an object as a prop and returns a Line Chart
 * @param {object} props  data from a average session length to Line Chart
 * @param {array} props.data table of object, average daily session length
 * @param {object} props.data[0] object representing the average activity of the day
 * @param {number} props.data[0].day string representing the day of the activity
 * @param {number} props.data[0].sessionLength number that represents the average duration of the day's session
 * @return {JSX.Element} Line Chart
 */

const GraphLineChart = ({data}) => {
  const tabDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  let renderLineChart;

  if (data !== undefined){
    const dataLineChart = data.map((obj, index) => {
      const newData = {
        day: tabDay[index],
        sessionLength: obj.sessionLength,
      }
        return newData;
    });
  
    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className={styles.customTooltip} >
            <p className={styles.label} >{`${payload[0].value} min`}</p>
          </div>
        );
      }
    
    };

    renderLineChart = (

      <LineChart 
        data={dataLineChart} 
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
      >
        <XAxis 
          dataKey="day" 
          tickLine={false} 
          tickMargin={0} 
          axisLine={false} 
          interval="preserveStartEnd"
          stroke='#FF8484'
          padding={{ right: 20, left: 20 }}
        />
        <YAxis 
          dataKey="sessionLength"
          hide={true}
          domain={['dataMin - 10', 'dataMax + 10']}
        />
        <Tooltip 
          offset={40}
          cursor={{stroke: '#C4C4C480'}}
          wrapperStyle={{outline: 'none'}}
          content={<CustomTooltip />}
        />
        <Line 
          strokeWidth={3}
          type="monotone" 
          dataKey="sessionLength" 
          stroke="#ffffff" 
          dot={false}
          activeDot={{ stroke: '#FF3333', strokeWidth: 5, r: 8 }}
        />
      </LineChart>
    );

  }


    return (
      <div className={styles.container} >
        <div className={styles.backgroundRight} ></div>

        <h3 className={styles.title} >Durée moyenne des sessions</h3>

        <ResponsiveContainer height={200}>
          {renderLineChart ? renderLineChart : < Loader />}
        </ResponsiveContainer>

      </div>
    );
}

GraphLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number
    })
  )
};

export default GraphLineChart;