import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

const AdminEvents = () => {
  return (
    <div className='flex'>
        <div>
          <AdminSidebar />
        </div>
        <div className='flex justify-center items-center w-full text-xl text-white'>
          <form className='flex flex-col space-y-4'>
            <label>Dogadjaj:</label>
            <input type="text" />
          
            <label>Opis:</label>
            <textarea name="description" cols="50" rows="10"></textarea>

            <input type="file" name="img"/>
          
            <button type className="bg-red-500 text-white tracking-wider py-4 ss:py-2 xs:py-2 px-8 ss:px-4 xs:px-3 rounded-md hover:bg-[#0C4076] font-bold hover:text-white transition-all duration-500 z-10">
                Upload
            </button> 
          </form>
        </div>
    </div>
  )
}

export default AdminEvents