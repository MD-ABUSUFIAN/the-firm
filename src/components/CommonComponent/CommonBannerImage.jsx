import React from 'react';

const CommonBannerImage = ({image}) => {
    return (
        <div >
            <picture>
                <img className='w-full' src={image} alt="" />
            </picture>
        </div>
    );
};

export default CommonBannerImage;