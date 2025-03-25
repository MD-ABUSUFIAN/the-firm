import React from 'react';
import Heading from '../CommonComponent/Heading';
import Details from '../CommonComponent/Details';
import Button from '../CommonComponent/Button';
import caseOverlay from '../../assets/images/HomePage/caseStudiesOverlay.png'
import Slider from 'react-slick';
import slidesImg from '../../assets/images/HomePage/slidesImg.png';
import { IoArrowRedo, IoArrowUndoSharp } from 'react-icons/io5';

const CaseStudies = () => {
  const slides = [
    {
      id: 1,
      img: slidesImg,
    },
    {
      id: 2,
      img: slidesImg,
    },
    {
      id: 3,
      img: slidesImg,
    },
  ];
  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  // slider implement
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="text-2xl absolute h-[40px] w-[40px] rounded-full bg-amber-400 z-2  top-[10%] left-[-6%]"
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
        className="text-2xl absolute h-[40px] w-[40px] rounded-full bg-amber-400 z-1 top-[10%] left-[0%]"
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
  return (
    <div className="py-[80px]">
      <div className="caseStudiesWrapper container mx-auto">
        <div className="caseStudiesTop w-[55%]  mx-auto">
          <Heading
            title={'Our Research & Case Studies'}
            style={'text-center text-[44px] font-bold'}
          />
          <div className="py-[28px]">
            <Details
              details={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
              }
              style={'text-[18px] text-center'}
            />
          </div>
        </div>
        <div className="caseStudiesBottom py-[50px] flex items-center justify-between">
          <div className="caseStudiesBottomLeft w-[45%]">
            <h1 className="text-[30px] font-bold text-[#1E1E1E]">
              Lorem Ipsum is simply
            </h1>
            <div className="py-[40px]">
              <Details
                details={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
                }
                style={
                  'text-[#1E1E1E] font-[18px] leading-[30px] tracking-[2%]'
                }
              />
            </div>
            <Button content={'Read More'} style={'bg-yellow-400 text-white'} />
          </div>
          <div className="caseStudiesBottomRight w-[40%] relative">
            <Slider {...settings}>
              {slides.map((item) => (
                <div className="rounded-3xl ">
                  <picture>
                    <img
                      className="rounded-3xl w-full h-[450px] border-10 border-gray-200  "
                      src={item.img}
                      alt=""
                    />
                  </picture>
                </div>
              ))}
            </Slider>
            <div className="overlay absolute bottom-[-14%] left-[-10%] -z-1">
                <img src={caseOverlay} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
