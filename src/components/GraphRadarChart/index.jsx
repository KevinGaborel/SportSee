import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styles from './GraphRadarChart.module.css';

const GraphRadarChart = ({data, kind}) => {

    console.log(data, kind);

    const dataRadarChart = data.map((obj, index) => {
        switch (obj.kind) {
          case 1:
            obj.kind = "Cardio";
            break;
          case 2: 
            obj.kind = "Energie";
            break;
          case 3:
            obj.kind = "Endurance";
            break;
          case 4:
            obj.kind = "Force";
            break;
          case 5:
            obj.kind = "Vitesse";
            break;
          case 6:
            obj.kind = "Intensité";
            break;
          default:
            break;
        }

        const newData = {
          kind: obj.kind,
          value: obj.value,
        }
        return newData;
      });

    return (
      <div className={styles.container} >
        <ResponsiveContainer height={200} >
          <RadarChart data={dataRadarChart} 
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
        </ResponsiveContainer>
      </div>
    );
}

export default GraphRadarChart;