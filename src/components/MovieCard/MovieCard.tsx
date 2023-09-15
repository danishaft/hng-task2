import styles from "./MovieCard.module.scss"
import imdbImg from "../../assets/images/imdb.png"
import tomatoImg from "../../assets/images/tomato.png"
import { AiFillHeart } from "react-icons/ai";
import {Link} from "react-router-dom"

interface MovieProps {
    poster: string;
    title: string;
    date: string;
    country: number;
    rating: number;
    percentage: number;
    categories: string;
    to: string
}
function MovieCard(props: MovieProps) {
  const {poster, title, date, country, rating, percentage, categories, to} = props
  return (
    <Link to={to}>
      <figure data-testid='movie-card' className={styles.movie}>
      <div className={styles.img}>
        <img data-testid='movie-poster' src={`https://image.tmdb.org/t/p/w500${poster}`} alt={`${title} poster`}/>
        <span className={styles.likeBtn}><AiFillHeart/></span>
      </div>
        <figcaption className={styles.movie__content}>
          <span className={styles.country}> <p>{country}</p>, <p data-testid='movie-release-date'>{date}</p></span>
          <p className={styles.title}><b data-testid='movie-title'>{title}</b></p>
          <div className={styles.row}>
            <div>
              <img src={imdbImg} alt="imdb image" />
              <p className={styles.rating}>{rating}</p>
            </div>
            <div>
              <img src={tomatoImg} alt="tomato image" />
              <p className={styles.percentage}>{percentage}%</p>
            </div>
          </div>
          <p className={styles.categories}>{categories}</p>
        </figcaption>
    </figure>
    </Link>
  )
}

export default MovieCard