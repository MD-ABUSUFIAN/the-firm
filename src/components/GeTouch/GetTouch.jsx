import React, { useState } from 'react';
import map from '../../assets/images/HomePage/map.png';
import Heading from '../CommonComponent/Heading';
import Button from '../CommonComponent/Button';

const GetTouch = () => {
  const [name, setName] = useState('');
  return (
    <div className='relative'>
      <div className="getTouchTop  ">
        <img className="w-full h-[396px]" src={map} alt="" />
      </div>
      <div className="getTouchBottom absolute left-[50%] translate-x-[-50%] top-[40%] w-[70%] mx-auto p-10 bg-[#FFFFFF] rounded-2xl shadow-2xl">
        <Heading
          title={'Get In Touch'}
          style={'text-center text-[44px] font-bold'}
        />

        <form className="py-5">
          <div className="from grid grid-cols-2 gap-y-10 items-center">
            <div className="border-b-2 border-gray-300 w-[90%]">
              <label className="text-[#A5A5A5]">Name </label>
              <br />
              <input
                className="w-full border-0 outline-0 text-2xl cursor-pointer"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="border-b-2 border-gray-300 w-[90%]">
              <label className="text-[#A5A5A5]">Email </label>
              <br />
              <input
                className="w-full border-0 outline-0 text-2xl cursor-pointer"
                type="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="border-b-2 border-gray-300 w-[90%]">
              <label className="text-[#A5A5A5]">Phone </label>
              <br />
              <input
                className="w-full border-0 outline-0 text-2xl cursor-pointer"
                type="number"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="border-b-2 border-gray-300 w-[90%]">
              <label className="text-[#A5A5A5]">Name </label>
              <br />
              <input
                className="w-full border-0 outline-0 text-2xl cursor-pointer"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center pt-10">
            <Button
              content={'Submit'}
              style={'bg-yellow-400 text-white hover:bg-black'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetTouch;
