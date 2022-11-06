import React, { useEffect, useState } from 'react';
import SongContentCard from './SongContentCard/SongContentCard';

const SongContent = () => {

    const [musics, setMusics] = useState([])
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(6)

    useEffect(() => {
        fetch(`https://play-beat-server.vercel.app/musics?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setMusics(data.music)
            })
            .catch(error => console.log(error))
    }, [page, size])

    const pages = Math.ceil(count / size)


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-9/12 mx-auto my-32'>
                {
                    musics.map(music => <SongContentCard key={music._id} music={music} />)
                }
            </div>
            <div className='w-8/12 md:w-3/12 mx-auto my-20'>
                <div className='btn-group'>
                    {
                        [...Array(pages).keys()].map(number =>
                            <button
                                key={number}
                                className={page === number ? "btn btn-active" : "btn"}
                                onClick={() => setPage(number)}
                            >
                                {number + 1}
                            </button>
                        )
                    }
                    <select onChange={event => setSize(event.target.value)} className="select select-bordered w-7/12 ml-4">
                        <option disabled selected>Select Page</option>
                        <option value='3'>3</option>
                        <option value='6'>6</option>
                        <option value='9'>9</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SongContent;