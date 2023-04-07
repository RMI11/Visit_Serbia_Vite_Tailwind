import React from 'react'
import AdminSidebar from '../components/AdminSidebar';

const AdminDashboard = () => {
  return (
    <div className='flex'>
        <div className=''>
          <AdminSidebar />
        </div>
        <div className='flex justify-center items-center w-full'>
          <h1 className='text-8xl text-center'>DASHBOARD</h1>
        </div>
    </div>
  )
}

export default AdminDashboard;