import { BiTime } from "react-icons/bi"
import { Movie } from "./moviesData"


const MovieCard = ({movie}:{movie:Movie})=>
    <div className="card">
        <img src={movie.src} alt={movie.title} className='w-full' />
        <div className='p-4 text-white'>
            <h4 className="text-2xl">{movie.title}</h4>
            <p>{movie.main}</p>
        </div>
        <div className="badge">
            <BiTime/>
            <p>{movie.runtime}</p>
        </div>
    </div>

export default MovieCard