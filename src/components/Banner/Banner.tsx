import styles from "./Banner.module.scss"
import imdbImg from "../../assets/images/imdb.png"
import tomatoImg from "../../assets/images/tomato.png"
import { AiFillPlayCircle } from "react-icons/ai";

function Banner() {
  return (
    <div className={styles.banner}>
       <div className={styles.banner__text}>
        <h1>John Wick 3 : <br /> Parabellum</h1>
        <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
        <div className={styles.row}>
            <div>
              <img src={imdbImg} alt="imdb image" />
              <p className={styles.rating}>89.0/100</p>
            </div>
            <div>
              <img src={tomatoImg} alt="tomato image" />
              <p className={styles.percentage}>89%</p>
            </div>
          </div>
        <div className={styles.watch__btn} ><AiFillPlayCircle/>WATCH Trailer</div>   
       </div>
    </div>
  )
}

export default Banner