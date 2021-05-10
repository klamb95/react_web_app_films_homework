import React from 'react';

const Film = ({name, url, children}) => {
    return(
        <>
        <h4>{name}</h4>
        <h5>{url}</h5>
        <p>{children}</p>
        </>
    )
};

export default Film; 