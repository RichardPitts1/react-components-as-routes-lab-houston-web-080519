import React from 'react';
import { directors } from '../data';

let directorsArray = directors 

const Directors = () => {
    return (
        <div>
            <h1>Directors Page</h1>
            {directorsArray.map(director => {
                return(
                    <div>
                        {director.name}
                        {director.movies}
                    </div>
                )
            })}
        </div>
    );
}

export default Directors