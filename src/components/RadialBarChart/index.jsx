import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import styles from './RadialBarChart.module.css';

const GraphRadialBarChart = ({data}) => {

    console.log(data);

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

    return (
      <div className={styles.container} >

        <h3 className={styles.title} >Score</h3>

        <div className={styles.score} >
          <span>{data * 100}% </span>
          <span className={styles.objectif} >de votre objectif</span>
        </div>

        <ResponsiveContainer height={200} >
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
        </ResponsiveContainer>


      </div>
    );
}

export default GraphRadialBarChart;