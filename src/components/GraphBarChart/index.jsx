import { BarChart, Tooltip, CartesianGrid, XAxis, YAxis, Legend, Bar } from 'recharts';
import styles from './GraphBarChart.module.css';

function GraphBarChart({data}) {

  const infos = {
    day: data.map(data => new Date(data.day).getDate()),
    weight: data.map(data => data.kilogram),
    calories: data.map(data => data.calories)
  };
  
  //console.log(infos);
  //const dataBarChart = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
  
  const weightMax = Math.max(...data.map(value => value.kilogram));
  const weightMin = Math.min(...data.map(value => value.kilogram));

  //console.log(weightMax, weightMin);

  const dataBarChart = data.map((obj, index) => {
    const newData = {
      name: new Date(obj.day).getDate(),
      calories: obj.calories,
      weight: obj.kilogram, 
      kg: weightMax
    }
    return newData;
  });

  //console.log(dataBarChart);

  //syntetiser un objet avec les données

  
  const renderBarChart = (
    <BarChart width={789} height={274} data={dataBarChart}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }} 
    barGap={'8'}
    barSize={7}

    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" stroke="#9B9EAC" />
      <YAxis  dataKey="kg" orientation='right' domain={[weightMin - 1, weightMax + 1]} stroke="#9B9EAC" yAxisId="right" />
      <YAxis  dataKey="calories" orientation='left' domain={['dataMin - 100', 'dataMax + 50']} stroke="#9B9EAC" yAxisId="left" hide />

      <Tooltip />
      <Legend verticalAlign='top' 
        align='right' 
        iconType='circle' 
        iconSize='8' 
        width="277" 
        height='14' 
        payload={[
          {value: 'Poids (kg)', type: 'circle', id: 'ID01' },
          {value: 'Calories brûlées (kCal)', type: 'circle', id: 'ID02' }
        ]} 
        />
      <Bar dataKey="weight" yAxisId="right" fill="#282D30" />
      <Bar dataKey="calories" yAxisId="left" fill="#E60000" />
    </BarChart>
  );

  return (
    <div className={styles.containerBarChart} >
      {renderBarChart}
    </div>
  );
}

export default GraphBarChart;