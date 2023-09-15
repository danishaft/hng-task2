import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import styles from "./Movie.module.scss"
import { FaPlay } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { IoOptionsSharp } from "react-icons/io5";
import collection from "../../assets/images/Rectangle 37.png";
import logo from "../../assets/images/tv.png"
import Box from "../../components/Box/Box";
import { GoHome } from "react-icons/go";
import { PiVideoCameraThin } from "react-icons/pi";
import { PiTelevision } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { IoLogOutOutline } from "react-icons/io5";
import {Link} from "react-router-dom"


interface MovieDetails{
  poster: string;
  title: string;
  date: string;
  runtime: number;
  overview: string;
  genre: [];
  rating: string;
}
function Movie() {
  const {id} = useParams()
  const [movieDetails , setMovie] = useState<MovieDetails>()
  const getRating = (rate, count) => {
    return `${rate.toFixed(1)}|${count.toString().slice(0, 3)}k`
  }
  const genres = movieDetails?.genre.map((item: object) => {
    return <span className={styles.genre} key={item.id}>{item.name}</span>
  })
  useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWYxOTM5Y2RhNGUzZTdlZDQ1OGE1MTIyY2Q5MGI1OCIsInN1YiI6IjY0ZmVkM2UyMmRmZmQ4MDEzYmNjZmU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YgBnuXLUcBBz38P_k0rXPbOwNR9zZPd5bGXW5-I-_14'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          setMovie( {
              poster: response.poster_path,
              title: response.title,
              date: response.release_date,
              runtime: response.runtime,
              overview: response.overview,
              genre: response.genres,
              rating: getRating(response.vote_average, response.vote_count),
            }
          )
        })
        .catch(err => console.error(err));
}, [])
  return (
    <main className={styles.movie__single}>
      <aside>
        <Link to="/"><div className={styles.logo}>
          <img src={logo} alt="logo" />
          <p><b>MovieBox</b></p>
        </div></Link>
        <nav>
          <ul>
            <li><GoHome/><p>Home</p></li>
            <li><PiVideoCameraThin/><p>Movies</p></li>
            <li><PiTelevision/><p>Tv Series</p></li>
            <li><SlCalender/><p>Upcoming</p></li>
          </ul>
        </nav>
        <Box/>
        <div className={styles.logOut}>
          <IoLogOutOutline/><p>Log Out</p>
        </div>
      </aside>
      <section className={styles.movie__details}>
        <div className={styles.video}>
          <img src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster}` } alt={`${movieDetails?.title}`}/>
          <span className={styles.play}>
            <FaPlay/>
          </span>
        </div>
        <div className={styles.row1}>
          <span className={styles.title}> <p data-testid='movie-title'>{movieDetails?.title}</p> &middot; <p data-testid='movie-release-date'>{movieDetails?.date}</p> &middot; PG-13 &middot; <p data-testid='movie-runtime'>{movieDetails?.runtime} </p></span>
          <div className={styles.genres}>
            {genres}
          </div>
          <div className={styles.rating}>
            <AiFillStar className ={styles.star}/>
            {movieDetails?.rating}
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.col1}>
            <article data-testid='movie-overview' className={styles.overview}>{movieDetails?.overview}</article>
            <p>Director : <span className={styles.red}>Joseph Kosinski</span></p>
            <p>Writers :  <span className={styles.red}>Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
            <p>Stars: <span className={styles.red}>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
            <div className={styles.btn__group}>
              <div className={styles.topRated__btn}>
                Top rated movie #1
              </div>
              <div className={styles.award__btn}>
                Awards 9 nominations
              <BsChevronDown/>
              </div>
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.btn__group}>
              <button>
                <IoTicketSharp/>
                See Showtimes
              </button>
              <button>
                <IoOptionsSharp/>
                More watch options
              </button>
            </div>
            <div className={styles.movie__collection}>
              <img src={collection} alt="movie options" />
              <div className={styles.text}>
                <p>
                  <IoOptionsSharp/>
                  The Best Movies and Shows in September
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Movie