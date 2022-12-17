import { BarChart, Tooltip, CartesianGrid, XAxis, YAxis, Legend, Bar, ResponsiveContainer } from 'recharts';
import styles from './BarChart.module.css';

function GraphBarChart({data}) {
  
  const weightMax = Math.max(...data.map(value => value.kilogram));
  const weightMin = Math.min(...data.map(value => value.kilogram));

  const dataBarChart = data.map((obj) => {
    const newData = {
      day: new Date(obj.day).getDate(),
      calories: obj.calories,
      weight: obj.kilogram, 
      kg: weightMax
    }
    return newData;
  });

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.customTooltip} >
          <p className={styles.label} >{`${payload[0].value}kg`}</p>
          <p className={styles.label} >{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }
  
    return null;
  };
    
  const renderBarChart = (
    <BarChart 
      data={dataBarChart}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }} 
      barGap={'8'}
      barSize={7}
    >

      <CartesianGrid 
        strokeDasharray="2 2" 
        vertical={false} 
      />

      <XAxis 
        dataKey="day" 
        stroke="#9B9EAC" 
        tickSize={0} 
        tickMargin={16} 
        scale='point'
        padding={{left: 12}}
      />

      <YAxis  
        dataKey="kg" 
        orientation='right' 
        domain={[weightMin - 1, weightMax + 1]} 
        stroke="#9B9EAC" 
        yAxisId="right" 
        tickCount={4} 
        tickSize={0} 
        tickMargin={45} 
        axisLine={false} 
      />

      <YAxis  
        dataKey="calories" 
        orientation='left' 
        domain={['dataMin - 100', 'dataMax + 50']} 
        stroke="#9B9EAC" 
        yAxisId="left" 
        hide 
      />

      <Tooltip 
        offset={40}
        cursor={{stroke: '#C4C4C480'}}
        position={{y: -25}}
        wrapperStyle={{outline: 'none'}}
        content={<CustomTooltip />}
        
      />

      <Legend 
        verticalAlign='top' 
        align='right' 
        iconSize={8}
        iconType="circle"
        width={277} 
        height={14}
        wrapperStyle={{color: '#74798C', top: '-64px'}}
      />

      <Bar 
        dataKey="weight" 
        yAxisId="right" 
        name={"Poids (kg)"}
        fill="#282D30"
        radius={[3, 3, 0, 0]}
      />

      <Bar 
        dataKey="calories" 
        yAxisId="left" 
        name={"Calories brûlées (kCal)"}
        fill="#E60000" 
        radius={[3, 3, 0, 0]} 
      />

    </BarChart>
  );

  return (
    <div className={styles.containerBarChart} >
      <h3 className={styles.title} >Activité quotidienne</h3>
      <ResponsiveContainer height={150} >
        {renderBarChart}
      </ResponsiveContainer>
    </div>
  );
}

export default GraphBarChart;