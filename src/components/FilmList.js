import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {
    const filmNodes = films.map(film =>{
        return(
            <Film film={film} key={film.id}></Film>
        )
    })

    return(
        <>
        <ul>
            {filmNodes}
        </ul>
        </>
    )

};


export default FilmList;