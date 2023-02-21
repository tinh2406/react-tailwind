import MovieCard from './MovieCard'
import {moviesData} from './moviesData'
const index = ()=>
    <>
        <h3 className="text-2xl border-b border-primary mt-12 mb-6 pb-4">Trending</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {moviesData.map((movie,i)=>(
                <MovieCard key={i} movie={movie}/>
            ))}
        </div>
        <div className="flex justify-center">
            <button className="btn hover:scale-125 transition ease-out duration-300">Load more</button>
        </div>
    </>

export default index