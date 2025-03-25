

import Card from './Card'

const GroupCard = ({blogs,showAll}) => {
 

  return (
    <div className='grid grid-cols-3 md:grid-cols-4 justify-between items-center gap-10' >
        {
            blogs.slice(0,showAll? blogs.length: 4).map((blog)=><Card blog={blog} key={blog.id}/>)
        }

    </div>
  )
}

export default GroupCard