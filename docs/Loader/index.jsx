import styles from './Loader.module.css';


function  Loader() {
    
    return(
        <div className={styles.loader} >
            <span className={styles.spinner} ></span>
        </div>
    )
}

export default Loader;
