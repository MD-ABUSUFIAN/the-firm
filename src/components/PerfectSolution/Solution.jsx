import React from 'react';
import CommonBannerImage from '../CommonComponent/CommonBannerImage';
import CommonBannerContent from '../CommonComponent/CommonBannerContent';
import solutionBg from '../../assets/images/HomePage/solutionBg.png'

const Solution = () => {
  return (
    <div className=" container mx-auto ">
      <div className="perfectWrapper  flex items-center justify-between">
        <div className="wrapperLeft w-[50%] ">
            <CommonBannerImage image={solutionBg}/>
        </div>
        <div className="wrapperLeft  w-[40%] ">
            <div>
            <CommonBannerContent title={"Perfect Solution for Your Bussiness"} details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
