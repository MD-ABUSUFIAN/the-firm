import React from 'react';
import Heading from './Heading';
import Details from './Details';

const CommonBannerContent = ({ title, details,style }) => {
  return (
    <div>
      <Heading title={title} style={style} />
      <div className="py-8">
        {' '}
        <Details details={details} />
      </div>
    </div>
  );
};

export default CommonBannerContent;
