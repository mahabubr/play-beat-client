import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMusic = () => {

    const updateData = useLoaderData()

    const { title, image, singer, movie, _id } = updateData

    const handleAddMusic = (event) => {
        event.preventDefault()

        const form = event.target

        const updateImage = form.image.value

        fetch(`https://play-beat-server.vercel.app/musics/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updateImage })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Image')
                }
            })
            .catch(error => console.log(error))

    }

    return (
        <form onSubmit={handleAddMusic} className='bg-gray-200 m-12 p-16 rounded-xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Song Name</span>
                    </label>
                    <input type="text" defaultValue={title} readOnly name='title' placeholder="Song Title" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Film Name</span>
                    </label>
                    <input type="text" defaultValue={movie} readOnly name='movie' placeholder="Movie Name" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Singer Name</span>
                    </label>
                    <input type="text" defaultValue={singer} readOnly name='singer' placeholder="Singer Name" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" defaultValue={image} name='image' placeholder="Image URL" className="input input-bordered w-full" />
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <input className='btn btn-info w-6/12' type="submit" value="Update Music" />
            </div>
        </form>
    );
};

export default UpdateMusic;