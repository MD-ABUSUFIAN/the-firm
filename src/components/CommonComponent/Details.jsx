import React from 'react';

const Details = ({details,style}) => {
    return (
        <div>
            <p className= {`text-[18px] ${style}`}>{details}</p>
        </div>
    );
};

export default Details;