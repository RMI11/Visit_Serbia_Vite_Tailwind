import React from 'react'
import { Link } from 'react-router-dom'
import { adminNavLinks } from '../constants/adminNavLinks'

const AdminSidebar = () => {
  return (
    <div className='flex flex-col w-[200px] h-[600px] bg-white/50 text-2xl font-bold p-6 space-y-4'>
        {adminNavLinks.map(link=>(
            <Link to={link.linkTo} key={link.id}>
                {link.title}
            </Link>
            
))}
    </div>
  )
}

export default AdminSidebar