import styles from './Dashboard.module.css';
import { useEffect, useState } from 'react';

import { getDatasApi, getDatasMocked } from "../../services/api.js";
import { useParams } from "react-router-dom";

import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';
import RadarChart from '../../components/RadarChart';
import RadialBarChart from '../../components/RadialBarChart';
import IconNutrition from '../../components/IconNutrition';
import appleSvg from '../../assets/icons/apple.svg';
import cheeseburgerSvg from '../../assets/icons/cheeseburger.svg';
import chickenSvg from '../../assets/icons/chicken.svg';
import energySvg from '../../assets/icons/energy.svg';

export async function loader({ request, params }) {
  const id = await params.id;
  const api = await params.api;
  const infos = api === "true" ? await getDatasApi(id) : await getDatasMocked(id);

  if (!infos) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return infos;
}

function Dashboard() {

  let { id, api } = useParams();
  id = parseInt(id);
  api = api === "true" ? true : false;

  const [userData, setUserData] = useState();
  const [activityData, setActivityData] = useState();
  const [averageData, setAverageData] = useState();
  const [perfData, setPerfData] = useState();

  useEffect(()  => {
    const getFunctionData = async () => {
  
      const infos = api ? await getDatasApi(id) : await getDatasMocked(id);

      if (infos.user.data.score){
        const todayScore = infos.user.data.score;
        infos.user.data.todayScore = todayScore;
      }

      setUserData(infos.user.data);
      setActivityData(infos.activity.data);
      setPerfData(infos.perf.data);
      setAverageData(infos.average.data);
    };

    getFunctionData();

  }, []);

  return (
    <main className={styles.main} >
      <div className={styles.head}>
        <p className={styles.hello} >Bonjour <span>{userData !== undefined ? userData.userInfos.firstName : ''}</span></p>
        <p className={styles.strToday} >Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className={styles.dataContainer}>

        <div className={styles.graphContainer}>
          <BarChart data={activityData !== undefined ? activityData.sessions : undefined} />
          <div className={styles.dataFooter}>
            <LineChart data={averageData !== undefined ? averageData.sessions : undefined} />
            <RadarChart data={perfData !== undefined ? perfData.data : undefined} />
            <RadialBarChart data={userData !== undefined ? userData.todayScore : undefined} />
          </div>
        </div>

        <div className={styles.containerIconNutrition}>
          <IconNutrition color={'red'} icon={energySvg} type={'Calories'} data={userData ? userData.keyData.calorieCount : undefined} ></IconNutrition>
          <IconNutrition color={'blue'} icon={chickenSvg} type={'Proteines'} data={userData ? userData.keyData.proteinCount : undefined} ></IconNutrition>
          <IconNutrition color={'yellow'} icon={appleSvg} type={'Glucides'} data={userData ? userData.keyData.carbohydrateCount : undefined} ></IconNutrition>
          <IconNutrition color={'pink'} icon={cheeseburgerSvg} type={'Lipides'} data={userData ? userData.keyData.lipidCount : undefined} ></IconNutrition>
        </div>

      </div>

    </main>
  );
}

export default Dashboard;