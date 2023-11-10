import styles from "./serie.module.scss"

function Serie({ serie, updateSerie, deleteSerie }) {

    return (
        <div className={styles.serie}>
          {/* <i onClick={handleDelete} className="fas fa-xmark"></i> */}
          <div className={styles.imgContainer}>
            <img src={image} alt="oneSerie" />
          </div>
          <div
            onClick={handleClick}
            className= {styles.title} 
          >
            <h3>{title}</h3>
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>
      );
    }

    export default Serie