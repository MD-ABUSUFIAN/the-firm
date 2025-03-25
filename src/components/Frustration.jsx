import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import frustuctionImg from '../assets/images/HomePage/fustructionBanner.png';
import overlay from '../assets/images/HomePage/frustractionBannerLayer.png'
import CommonBannerImage from './CommonComponent/CommonBannerImage';
import CommonBannerContent from './CommonComponent/CommonBannerContent';



const Frustration = () => {
    const lists=[
        {
            id:1,
            list:"Loren rasion gravida auem is bibenua tase"
        },
        {
            id:2,
            list:"Lorem Ipsum is simply dummy text of the."
        },
        {
            id:3,
            list:"Printing and typesetting industry. Lorem Ipsum"
        },
        {
            id:4,
            list:"When an unknown printer took a galley of type and scrambled it"
        }
    ]
    return (
        <div className='bg-gray_color py-[90px]'>
            
            <div className="bannerWrapper container mx-auto  flex justify-between items-center">
                <div className="bannerLeftContent w-1/2 flex flex-col justify-items-start">
                <CommonBannerContent title={"Frustration of Clients"} details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}/>
                <ul>
                    {
                        lists.map(({id,list})=><li className='flex items-center  flex-row py-1 gap-2 justify-items-start' key={id}><span className='text-yellow_color'><FaQuestion /></span> <p>{list}</p></li>)
                    }
                    
                </ul>
                </div>
                <div className="bannerRightImage  relative ">
                   <div >
                   <CommonBannerImage image={frustuctionImg}  />
                   </div>
                    
                        <img className="overlay absolute right-[6%] top-[70%]  " src={overlay} alt="" />
                   
                  
                </div>
            </div>
        </div>
    );
};

export default Frustration;