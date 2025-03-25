import React from 'react';

const Heading = ({title}) => {
    const titleArray=title.split(" ")
    const lastWord=titleArray[titleArray.length-1]
    const fastWord=title.replace(lastWord,"")

    console.log(fastWord);
    
    return (
        <div>
             <h1 className=' text-5xl font-bold'>{fastWord} <span className='headingLast'>{lastWord}</span></h1>
        </div>
    );
};

export default Heading;