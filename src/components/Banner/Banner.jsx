import React from 'react';
import bannerBg from '../../assets/images/HomePage/bannerBg.png'
import bannerIcon from '../../assets/images/HomePage/bannerIcon.png'
import Button from '../CommonComponent/Button';

const Banner = () => {
  return (
    <div className={"banner bg-[url(./assets/images/HomePage/bannerOverlay.png)] w-full bg-cover bg-no-repeat bg-center relative  "}>
    <div className='container mx-auto '>
    <div className=" bannerWrapper flex items-center h-[70vh]">
        <div className="banneLeft w-[50%] ">
          <h1 className=" bannerLeft__Title text-[54px] font-extrabold font-nunito ">
            Get Bussiness <br />
            Solutions with TheFirm.
          </h1>
          <p className="bannerLeft__details  md:mt-7 md:mb-11 text-[18px] text-justify w-[437px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <Button content={"Get in Touch"} style={'bg-yellow_color text-white_color hover:bg-black hover:text-yellow_color'}/>
        </div>
        <div className="bannerRight   top-[0%] right-0 w-[60vw] h-full absolute z-[-10]   ">
            <picture>
                <img className='w-full h-full object-cover ' src={bannerBg} alt="" />
            </picture>

            <picture>
                <img className='w-[190px] h-[186px] bottom-[40%] left-[-5%] absolute' src={bannerIcon} alt="" />
            </picture>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
