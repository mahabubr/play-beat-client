import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../../Assets/not-found.png'

const NotFound = () => {
    return (
        <div className='w-9/12 lg:w-6/12 mx-auto text-center'>
            <img className='ml-auto mr-auto' src={NotFoundImg} alt="" />
            <h2 className='text-5xl font-bold text-black'>Site Not Found</h2>
            <p className='text-2xl mt-5 text-gray-500'>Well, This is Awkward. The Site You're Looking For Is Not Here.</p>
            <p className='mt-5 text-2xl'>Is This Your Site? <Link to="/" className='text-3xl text-rose-600 font-bold underline'>Go Back To Home Page</Link> </p>
        </div>
    );
};

export default NotFound;