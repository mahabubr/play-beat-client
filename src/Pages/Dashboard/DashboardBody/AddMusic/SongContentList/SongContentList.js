import React, { useEffect, useState } from 'react';
import SongContentListTable from './SongContentListTable/SongContentListTable';

const SongContentList = () => {

    const [musics, setMusics] = useState([])

    useEffect(() => {
        fetch('https://play-beat-server.vercel.app/musics')
            .then(res => res.json())
            .then(data => setMusics(data.music))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Singer</th>
                            <th>Update/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            musics.map(music => <SongContentListTable music={music} key={music._id} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SongContentList;