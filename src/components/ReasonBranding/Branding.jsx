import React from 'react';
import Heading from '../CommonComponent/Heading';
import Details from '../CommonComponent/Details';
import Button from '../CommonComponent/Button';
import CommonBannerImage from '../CommonComponent/CommonBannerImage';
import CommonBannerContent from '../CommonComponent/CommonBannerContent';
import brandBg from '../../assets/images/HomePage/brandBg.png'
import brandIcon from '../../assets/images/HomePage/brandIcon.png'

const Branding = () => {
  return (
    <div className='bg-[#F2F2F2] py-[80px]'>
    <div className="  container mx-auto  ">
      <div className="bandingTop w-[60%] mx-auto  flex flex-col justify-center items-center">
        <div className="heading text-center">
          <div>
            <Heading title={'Reason to Choose Us'} />
          </div>
          <div className="py-[40px]">
            <Details
              style={'text-center'}
              details={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
              }
            />
          </div>
        </div>
        <div className="bandingGroupButton w-full flex justify-between">
          <div className="btns">
            <Button
              content={'Market Research'}
              style={'shadow text-gray-300'}
            />
            <div className="btnOverlay"></div>
          </div>
          <div className="btns">
            <Button
              content={'Branding'}
              style={'shadow text-gray-300 hover:text-white '}
            />
            <div className="btnOverlay"></div>
          </div>
          <div className="btns">
            <Button
              content={'Reporting'}
              style={'shadow text-gray-300  hover:text-white '}
            />
            <div className="btnOverlay"></div>
          </div>
          <div className="btns">
            <Button
              content={'Data Analysis'}
              style={'shadow text-gray-300 hover:text-white '}
            />
            <div className="btnOverlay"></div>
          </div>
        </div>
      </div>
      <div className="bandingBottom flex justify-between items-center py-[67px]">
        <div className="bandingLeft w-1/2">
          <CommonBannerImage image={brandBg}/>
        </div>
        <div className="bandingRight w-1/2 flex justify-between items-start gap-5">
        <div className="brandIcon h-[150px] w-[150px]">
              <picture>
                <img src={brandIcon} alt="" />
              </picture>
        </div>
        <div className="brandContaint">
            <CommonBannerContent style={"text-[35px] font-bold"} title={'Branding'} details={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type'}/>
            <Button content={'Read More'}
              style={'text-white bg-black hover:bg-yellow-500 hover:text-white '}/>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Branding;
