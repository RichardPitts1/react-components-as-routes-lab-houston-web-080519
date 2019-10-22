import React from 'react'
import { actors } from '../data'

let arrayOfActors = actors

const Actors = () => {

    return (
        <div>
            <h1>Actors Page</h1>
            {arrayOfActors.map(actor => {
                return(
                    <div key={actor.name} className="actor">
                    {actor.name}
                    <br></br>
                    {actor.movies}
                    </div>
                )
            })}
        </div>
    )
}

export default Actors