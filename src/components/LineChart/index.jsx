import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import styles from './LineChart.module.css';
import Loader from '../Loader';

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

export default GraphLineChart;