import React from 'react'
import logo from '../../assets/images/HomePage/logo.png'
import { FaFacebook, FaLinkedin, FaOpenid, FaTwitter } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io5'

const Footer = () => {
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
    const footerIcon=[
        {
            id:1,
            icon:<FaFacebook />
        },
        {
            id:2,
            icon:<FaTwitter />
        },
        {
            id:3,
            icon:<IoLogoYoutube />
        },
        {
            id:4,
            icon:<FaLinkedin />
        },
        {
            id:5,
            icon:<FaOpenid />
        },
    ]
  return (
    <div className='py-[40px]'>
        <div className="container mx-auto">
            <nav>
                <div className="navWrapper flex flex-col justify-between items-center gap-10">
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

                    <div className="navIcon flex items-center gap-10 ">
                       
                       {
                        footerIcon.map(item=>
                            <div className='text-3xl duration-300 ease-in hover:text-yellow-400 cursor-pointer'>{item?.icon}</div>
                        )
                       }
                    </div>
                    <div className='copyRight'>
                       <p className='text-[15px] text-[#A5A5A5]'>Copyrights ©2025 cH@MoK. All Right Reserved</p>
                    </div>
                </div>
            
            </nav>
        </div>
    </div>
  )
}

export default Footer