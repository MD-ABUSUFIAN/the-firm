import React from 'react';

const Heading = ({title,style}) => {
  const titleArray = title.split(' ');
  const lastWord = titleArray[titleArray.length - 1];
  const fastWord = title.replace(lastWord, '');

  return (
    <div>
      <h1 className={style||`text-5xl font-bold`}>
        {fastWord} <span className="headingLast">{lastWord}</span>
      </h1>
    </div>
  );
};

export default Heading;
