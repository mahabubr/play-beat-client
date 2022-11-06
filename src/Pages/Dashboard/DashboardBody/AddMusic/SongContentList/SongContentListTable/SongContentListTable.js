import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdSystemUpdateAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';


const SongContentListTable = ({ music }) => {

    const { title, singer, _id } = music

    const handleMusicDelete = (id) => {
        const agree = window.confirm('Are You Sure To Delete This User')
        if (agree) {
            fetch(`https://play-beat-server.vercel.app/musics/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
        }
    }

    return (
        <tr>
            <td>*</td>
            <td>{title}</td>
            <td>{singer}</td>
            <td className='flex justify-center items-center text-2xl'>
                <Link to={`update/${_id}`}>
                    <MdSystemUpdateAlt className='mr-2 cursor-pointer text-purple-500' />
                </Link>
                <AiFillDelete onClick={() => handleMusicDelete(_id)} className='ml-2 cursor-pointer text-red-500' />
            </td>
        </tr>
    );
};

export default SongContentListTable;