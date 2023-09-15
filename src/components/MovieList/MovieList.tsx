import MovieCard from "../MovieCard/MovieCard"
import { useMovie } from "../../contexts/movieContext"
import styles from "./MovieList.module.scss"
function MovieList() {
  const {movies} = useMovie()
  const movieHtml = movies.map((movie) => {
    return <MovieCard key={movie.id} to={`/movies/${movie.id}`} title={movie.title} date={movie.date} rating={movie.rating} percentage={movie.percentage} poster={movie.poster} country={movie.country} categories={movie.categories}/>
  })
  return (
    <main className={styles.top__movies}>
      <div className={styles.row}><p className={styles.title}>Top Movies</p> <p className={styles.see__more}>See more</p></div>
        <div className={styles.movie__list}>
          {movieHtml}
        </div>
    </main>
  )
}

export default MovieList