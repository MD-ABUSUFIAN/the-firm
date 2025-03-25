import React from 'react'
import Slider from 'react-slick';
import testimonialImg from '../../assets/images/HomePage/testimonial.jpg';

const Testimonial = () => {
    const slides=[
        {
            id:1,
            img:testimonialImg
        },
        {
            id:2,
            img:testimonialImg
        },
        {
            id:3,
            img:testimonialImg
        },
    ]
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      };
  return (
    <div className='py-[80px]'>
        <div className="container mx-auto">
        <Slider {...settings}>
              {slides.map(({ img }) => (
                <div className='w-[70%] '>
                  <img className=' object-cover mx-auto' src={img} alt="" />
                </div>
              ))}
            </Slider>
        </div>

    </div>
  )
}

export default Testimonial