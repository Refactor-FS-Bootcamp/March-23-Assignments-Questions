import React from 'react'

const Greet = (props) => {
    const {lang, children} = props;
    
    return (
        <>
            <h1>Greet from {lang}</h1>
            <p>{children}</p>
        </>
    )
}

export default Greet