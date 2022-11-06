import React from 'react';
import { useContext } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Contexts/AuthContext/AuthContext';

const Register = () => {

    const { googleSignIn, registerNow, updateProfileName } = useContext(UserContext)

    const handleRegisterSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        registerNow(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()
                updateProfileName(name)
                    .then(() => {
                        console.log('User Update Successfully');
                    })
                    .catch(e => console.log(e))
            })
            .catch(e => console.log(e))

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                // console.log(user);
            })
            .catch(e => console.log(e))
    }

    return (
        <div className='w-8/12 lg:w-4/12 mx-auto my-32 border-2 p-12 rounded-lg'>
            <h2 className='text-center text-4xl font-bold'>Please Register</h2>
            <form onSubmit={handleRegisterSubmit}>
                <input type="text" name='name' placeholder="Your Full Name" className="input mt-6 input-bordered w-full " />
                <input type="email" name='email' placeholder="Your Email" className="input mt-6 input-bordered w-full " />
                <input type="password" name='password' placeholder="Your Password" className="input mt-6 input-bordered w-full " />
                <input type="submit" className='btn btn-secondary mt-6 w-full' value="Sign Up" />
            </form>
            <div className="divider">OR Sign In</div>
            <div onClick={handleGoogleSignIn} className='flex justify-center items-center border-2 p-2 text-pink-600 border-pink-500 rounded-3xl cursor-pointer'>
                <AiFillGoogleCircle className='text-3xl' />
                <p className='text-xl font-bold ml-2'>Sign In With Google</p>
            </div>
            <Link to='/login'>
                <p className='mt-2 text-end font-xl text-red-600 font-bold cursor-pointer'>Login Now</p>
            </Link>
        </div>
    );
};

export default Register;