import React from 'react';
import logo from '../../../Assets/Logo.png'
import { BsPeopleFill } from 'react-icons/bs';
import { FiMusic } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const SideNav = () => {
    return (
        <div className='bg-gray-200 h-full'>
            <div className='flex justify-center items-center'>
                <img className='w-16' src={logo} alt="" />
                <h2 className='text-lg font-bold'>Play Beat - Dashboard</h2>
            </div>
            <div className='mt-6 p-8 text-teal-600'>
                <Link to='dashboard' className='flex justify-start cursor-pointer p-2 items-center my-4 border-b-2 border-teal-600'>
                    <BsPeopleFill className='text-2xl' />
                    <p className='ml-3 text-xl font-semibold'>Subscriber List</p>
                </Link>
                <Link to='add-songs' className='flex justify-start cursor-pointer p-2 items-center my-4 border-b-2 border-teal-600'>
                    <FiMusic className='text-2xl' />
                    <p className='ml-3 text-xl font-semibold'>Add Music</p>
                </Link>
                <Link to='add-event' className='flex justify-start cursor-pointer p-2 items-center my-4 border-b-2 border-teal-600'>
                    <BsPeopleFill className='text-2xl' />
                    <p className='ml-3 text-xl font-semibold'>Add Events</p>
                </Link>
            </div>
        </div>
    );
};

export default SideNav;