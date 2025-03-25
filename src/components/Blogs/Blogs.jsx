
import Heading from '../CommonComponent/Heading'
import GroupCard from '../CommonComponent/GroupCard'
import  { useEffect, useState } from 'react'
import Button from '../CommonComponent/Button'
const Blogs = () => {
    const [blogs,setBlogs]=useState([])
 
    const [showAll,setShowAll]=useState(false)
    useEffect(()=>{
        fetch("product.JSON")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

  return (
    <div className='bg-[#F2F2F2] py-[82px]'>
       <div className='container mx-auto'>
       <Heading  title={'Our Blogs'} style={"text-center text-[44px] font-bold pb-[60px]"}/>
       
       <div>
        <GroupCard blogs={blogs} showAll={showAll}/>
       </div>
       <div onClick={()=>setShowAll(!showAll)} className={showAll?("hidden"):("flex items-center justify-center pt-[40px]")}>
        <Button  content={"View More"} style={"bg-yellow-400 text-white hover:bg-black"}/>
       </div>
       </div>
    </div>
  )
}

export default Blogs