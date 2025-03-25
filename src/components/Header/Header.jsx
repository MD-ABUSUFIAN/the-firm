import React from 'react';
import logo from '../../assets/images/HomePage/logo.png'
import Button from '../CommonComponent/Button';

const Header = () => {
    const navItem=[
        {
            id:1,
            name:'Home'
        },
        {
            id:2,
            name:'Solutions'
        },
        {
            id:3,
            name:'Cases'
        },
        {
            id:4,
            name:'About Us'
        },
        {
            id:5,
            name:'Blog'
        },
        {
            id:6,
            name:'Contact Us'
        },
    ]
    return (
        <div className='container mx-auto py-2'>
            <nav>
                <div className="navWrapper flex justify-between items-center">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                        <ul className="navLinkWrapper flex flex-row-reverse gap-x-5 md:gap-x-11 items-center font-bold text-[18px] py-[29px]">      
                        
                        {
                            navItem?.map(item=>{
                                return <li className='font-nunito active ' key={item?.id}><a  href="">{item?.name}</a></li>
                            })
                        }
                        </ul>

                    <div className="navButton">
                        <Button content={"Get in Touch"} style={'bg-yellow_color text-white_color hover:bg-black hover:text-yellow_color'}/>
                       
                    </div>
                </div>
            
            </nav>
        </div>
    );
};

export default Header;