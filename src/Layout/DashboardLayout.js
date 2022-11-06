import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../Pages/Dashboard/SideNav/SideNav';

const DashboardLayout = () => {
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-1'>
                <SideNav />
            </div>
            <div className='col-span-3'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;