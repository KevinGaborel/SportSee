import styles from './Home.module.css';
import { Link } from "react-router-dom";

function Home() {

  return (
    <main className={styles.main} >
        <div className={styles.dataLink} >
            <section className={styles.section} >
                <h2>Data API</h2>
                <div className={styles.linkGroup} >
                    <Link to={"profil/12/true"}>User 12</Link>
                    <Link to={"profil/18/true"}>User 18</Link>
                </div>
             

            </section>

            <section className={styles.section} >
                <h2>Data Mock</h2>
                <div className={styles.linkGroup} >
                    <Link to={"profil/12/false"}>Mock 12</Link>
                    <Link to={"profil/18/false"}>Mock 18</Link>
                </div>
            </section>
        </div>
    </main>
  );
}

export default Home;