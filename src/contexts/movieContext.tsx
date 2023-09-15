import { createContext, useContext, useState, useEffect, ReactNode} from "react"
interface Movie {
    poster: string;
    id: number;
    title: string;
    date: string;
    country: number;
    rating: number;
    percentage: number;
    categories: string;
}
type movieContent = {
    movies: Movie[]
}

const Context = createContext<movieContent>({movies: [],})
const useMovie = () => {
    const context = useContext(Context)
    return context;
}

function MovieContext({children}: {children: ReactNode}) {
    const [movies, setMovies] = useState<Movie[]>([])

    const getRating = (rating: number): string => {
        return `${rating * 10}/${100} `
    }
    const getPercentage = (num: number): number => {
        return (num*10/100)*100
    }

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWYxOTM5Y2RhNGUzZTdlZDQ1OGE1MTIyY2Q5MGI1OCIsInN1YiI6IjY0ZmVkM2UyMmRmZmQ4MDEzYmNjZmU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YgBnuXLUcBBz38P_k0rXPbOwNR9zZPd5bGXW5-I-_14'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {
                console.log(response.results[0])
                const data = response.results.map((res) => ({
                    id: res.id,
                    title: res.title,
                    date: res.release_date,
                    rating: getRating(res.vote_average),
                    percentage: getPercentage(res.vote_average),
                    poster: res.poster_path, 
                    country: 'USA',
                    categories: 'Animation, Action, Adventure'
                }))
                setMovies(data)
            })
            .catch(err => console.error(err));
    }, [])
  return (
    <Context.Provider value={{movies}}>
        {children}
    </Context.Provider>
  )
}

export {MovieContext, useMovie}