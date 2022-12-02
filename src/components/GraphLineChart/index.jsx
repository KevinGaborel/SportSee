import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './GraphLineChart.module.css';

const GraphLineChart = ({data}) => {
    const tabDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    console.log(data);

    const dataLineChart = data.map((obj, index) => {
        const newData = {
          day: tabDay[index],
          sessionLength: obj.sessionLength,
        }
        return newData;
      });

    return (
        <LineChart width={400} height={200} data={dataLineChart}>
            <XAxis dataKey="day" />
            <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
    );
}

export default GraphLineChart;