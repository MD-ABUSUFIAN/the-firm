
import React from 'react';
import { MdAccessTime } from 'react-icons/md';
import Button from './Button';

const Card = ({ blog }) => {
  console.log(blog);

  return (
    <div className="cardWrapper w-[319px]  rounded-2xl shadow-lg cursor-pointer">
      <div className="cardPhoto ">
        <img className="w-full object-cover mx-auto" src={blog?.blogImage} alt="" />
      </div>
      <div className="title px-5">
        <h1 className="text-[24px] font-bold px-2">
          {blog?.blogTitle.slice(0, 20)}
        </h1>
      </div>
      <div className="info px-5 text-[17px] text-[#1E1E1E] landing-[176%] tracking-[2%] pb-[30px]">
        <p>{blog?.blogDetails} </p>
      </div>
      <div className="author flex items-center justify-between px-5 pb-[33px]">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={blog?.authorImage}
          alt=""
        />
        <p className="text-[14px] font-semibold">{blog?.authorName}</p>
        <div className="icon text-[#B0B0B0] flex justify-between gap-2 items-center ">
          <span className="text-xl">
            <MdAccessTime />
          </span>
          <span>{blog?.date}</span>
        </div>
      </div>

      <div className='flex justify-center pb-[40px]'>
        <Button content={"Read More"} style={"bg-black text-white hover:bg-yellow-400 "}/>
      </div>
    </div>
  );
};

export default Card;
