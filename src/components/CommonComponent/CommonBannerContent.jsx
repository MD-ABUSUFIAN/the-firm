import React from 'react';
import Heading from './Heading';
import Details from './Details';

const CommonBannerContent = ({ title, details }) => {
  return (
    <div>
      <Heading title={title} />
      <div className="py-8">
        {' '}
        <Details details={details} />
      </div>
    </div>
  );
};

export default CommonBannerContent;
