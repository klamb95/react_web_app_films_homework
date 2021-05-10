import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {
    const filmNodes = films.map(film =>{
        return(
            <Film name={film.name} key={film.id}>{film.name}</Film>
        )
    })

    return(
        <>
        {filmNodes}
        </>
    )

};


export default FilmList;