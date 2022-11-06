import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate()

    const handleAdminFrom = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        if (email === "play@beat.com" && password === "654321") {
            navigate('/dashboard')
        }

    }

    return (
        <form onSubmit={handleAdminFrom} className='my-40 w-2/4 mx-auto'>
            <input type="email" defaultValue='play@beat.com' readOnly name='email' placeholder="Your Email" className="input input-bordered w-full" />
            <input type="password" defaultValue='654321' readOnly name='password' placeholder="Your Password" className="mt-6 input input-bordered w-full" />
            <input type="submit" className='btn btn-success mt-6' value="Go To Dashboard" />
        </form>
    );
};

export default Admin;