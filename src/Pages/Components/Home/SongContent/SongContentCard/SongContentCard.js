import React from 'react';

const SongContentCard = ({ music }) => {

    const { title, movie, singer, image, startDate } = music

    return (
        <div className='border border-gray-500 rounded-t-xl'>
            <div className='p-8'>
                <h3 className='text-2xl font-bold'>{title}</h3>
                <p className='text-xl font-semibold'>Signer : {singer}</p>
                <p className='text-lg font-semibold'>Film : {movie}</p>
            </div>
            <div>
                <img className='w-full brightness-50 h-52 object-cover' src={image} alt="" />
            </div>
            <div className='p-4 font-medium'>
                <p>Publish Date : {startDate.slice(0, 10)}</p>
            </div>
            <div className=''>
                <button className="btn btn-primary w-full rounded-none">Play Song</button>
            </div>
        </div>
    );
};

export default SongContentCard;