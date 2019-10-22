import React from 'react';
import { movies } from '../data';

let arrayOfMovies = movies

const Movies = () => {
    return (
        <div>
        <h1>Movies Page</h1>
        {arrayOfMovies.map(movie => {
            return(
                <div>
                    {movie.title}
                    <br></br>
                    {movie.time}
                    <br></br>
                    {movie.genres}
                    <br></br>
                    {movies.metascore}
                </div>
            )
        })}
        </div>
    )
}

export default Movies