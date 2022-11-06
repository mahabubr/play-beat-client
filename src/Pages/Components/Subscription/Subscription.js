import React from 'react';
import { TiTick } from 'react-icons/ti';
import { Link } from 'react-router-dom';


const Subscription = () => {
    return (
        <div className='py-20'>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <div className='bg-sky-400 font-bold text-center rounded-t-xl p-4'>
                    <p>Recommended For You</p>
                </div>
                <div className='bg-slate-800 text-white p-12'>
                    <div className="badge badge-secondary">BUSiNESS</div>
                    <h1 className='text-xl'>$<span className='text-7xl font-bold'>10</span>/a day</h1>
                </div>
                <div className="card-body">
                    <div className='flex justify-center items-center'>
                        <TiTick className='text-2xl' />
                        <p className='text-xl font-bold'>Play Song</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <TiTick className='text-2xl' />
                        <p className='text-xl font-bold'>Access On Events</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <TiTick className='text-2xl' />
                        <p className='text-xl font-bold'>Premium Service</p>
                    </div>
                </div>
                <Link to="/subscription/access">
                    <div className="card-actions justify-end p-6">
                        <button className="btn btn-accent w-full">Access</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Subscription;