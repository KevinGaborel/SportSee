import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './GraphAreaChart.module.css';

const GraphAreaChart = ({data}) => {
    const tabDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    console.log(data);

    const dataAreaChart = data.map((obj, index) => {
        const newData = {
          day: tabDay[index],
          sessionLength: obj.sessionLength,
        }
        return newData;
      });

    return (
      <div className={styles.containerAreaChart} >

        <h3 className={styles.title} >Durée moyenne des sessions</h3>

        <ResponsiveContainer height={200} className={styles.container}>
          <AreaChart data={dataAreaChart} >
              <XAxis 
                dataKey="day" 
                tickLine={false} 
                tickMargin={10} 
                axisLine={false} 
              />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="sessionLength" 
                stroke="#ffffff" 
                fill="#8884d8" 
                unit='min'
              />
          </AreaChart>
        </ResponsiveContainer>

      </div>
    );
}

export default GraphAreaChart;