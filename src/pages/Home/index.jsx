import styles from './Home.module.css';
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../../datas/datas.js';
import GraphBarChart from '../../components/GraphBarChart';
import IconNutrition from '../../components/IconNutrition';
import appleSvg from '../../assets/icons/apple.svg';
import cheeseburgerSvg from '../../assets/icons/cheeseburger.svg';
import chickenSvg from '../../assets/icons/chicken.svg';
import energySvg from '../../assets/icons/energy.svg';


function Home() {
  console.log(USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE, USER_ACTIVITY);
  const name = USER_MAIN_DATA[0].userInfos.firstName;

  return (
    <main className={styles.main} >
      <div className={styles.head}>
        <p className={styles.hello} >Bonjour <span>{name}</span></p>
        <p className={styles.strToday} >Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className={styles.graphContainer}>
        <GraphBarChart data={USER_ACTIVITY[0].sessions} />
        <div className={styles.containerIconNutrition}>
          <IconNutrition color={'red'} icon={energySvg} type={'Calories'} data={USER_MAIN_DATA[0].keyData.calorieCount} ></IconNutrition>
          <IconNutrition color={'blue'} icon={chickenSvg} type={'Proteines'} data={USER_MAIN_DATA[0].keyData.proteinCount} ></IconNutrition>
          <IconNutrition color={'yellow'} icon={appleSvg} type={'Glucides'} data={USER_MAIN_DATA[0].keyData.carbohydrateCount} ></IconNutrition>
          <IconNutrition color={'pink'} icon={cheeseburgerSvg} type={'Lipides'} data={USER_MAIN_DATA[0].keyData.lipidCount} ></IconNutrition>
        </div>
      </div>

    </main>
  );
}

export default Home;