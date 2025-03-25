import React from 'react';
import Heading from './Heading';
import Slider from 'react-slick';
import { FcGoogle } from 'react-icons/fc';
import { FaAppleAlt, FaWindows } from 'react-icons/fa';
import { BsBrowserFirefox, BsBrowserSafari } from 'react-icons/bs';
import { MdPadding } from 'react-icons/md';
import { IoArrowRedo, IoArrowUndoSharp } from 'react-icons/io5';

const OurPartner = () => {
  const icons = [
    {
      id: 1,
      name: 'firefox',
      icon: <BsBrowserFirefox />,
    },
    {
      id: 2,
      name: 'windows',
      icon: <FaWindows />,
    },
    {
      id: 3,
      name: 'google',
      icon: <FcGoogle />,
    },
    {
      id: 4,
      name: 'safari',
      icon: <BsBrowserSafari />,
    },
    {
      id: 5,
      name: 'apple',
      icon: <FaAppleAlt />,
    },
  ];
  // slider implement
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="text-2xl absolute h-[40px] w-[40px] rounded-full bg-amber-400 z-1 top-[50%] translate-y-[-50%] left-[-1%]"
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={onClick}
      >
        <IoArrowUndoSharp className="flex items-center justify-center cursor-pointer " />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="text-2xl absolute h-[40px] w-[40px] rounded-full bg-amber-400 z-1 top-[50%] translate-y-[-50%] right-[-1%]"
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={onClick}
      >
        <IoArrowRedo className="flex items-center justify-center text-black cursor-pointer " />
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="my-10 md:my-[75px]">
      <div className="container mx-auto">
        <Heading title={'Our Partner'}  />
        <div >
          <div className="partnerWrapper mt-[70px]  ">
            <Slider {...settings}>
              {icons.map(({ name, icon }) => (
                <div>
                  <div className="partnerCard  mx-2 bg-[#F6F6F6] py-5 rounded flex justify-center items-center">
                    <span
                      className={`text-8xl ${
                        name == 'safari'
                          ? 'text-blue-500'
                          : name == 'firefox'
                          ? 'text-red-700'
                          : name == 'windows'
                          ? 'text-blue-700'
                          : ''
                      }`}
                    >
                      {icon}
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
