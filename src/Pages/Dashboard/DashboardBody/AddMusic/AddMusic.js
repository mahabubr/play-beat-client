import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SongContentList from './SongContentList/SongContentList';

const AddMusic = () => {

    const [startDate, setStartDate] = useState(new Date());

    const handleAddMusic = (event) => {
        event.preventDefault()

        const form = event.target

        const title = form.title.value
        const movie = form.movie.value
        const singer = form.singer.value
        const image = form.image.value

        const addMusicData = {
            title,
            movie,
            singer,
            image,
            startDate
        }

        fetch('https://play-beat-server.vercel.app/musics', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addMusicData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Music Added SuccessFully")
                    form.reset()
                }
                else {
                    alert("Please Added Again")
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={handleAddMusic} className='bg-gray-200 m-12 p-16 rounded-xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Song Name</span>
                        </label>
                        <input type="text" name='title' placeholder="Song Title" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Film Name</span>
                        </label>
                        <input type="text" name='movie' placeholder="Movie Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Singer Name</span>
                        </label>
                        <input type="text" name='singer' placeholder="Singer Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name='image' placeholder="Image URL" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <DatePicker className='bg-white border-2 rounded-xl px-4 py-2 text-xl  w-full' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className='flex justify-center mt-8'>
                    <input className='btn btn-info w-6/12' type="submit" value="Add Music" />
                </div>
            </form>
            <div className='p-12'>
                <SongContentList />
            </div>
        </div>
    );
};

export default AddMusic;