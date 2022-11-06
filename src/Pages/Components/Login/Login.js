import React from 'react';
import { useContext } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Contexts/AuthContext/AuthContext';

const Login = () => {

    const { signIn, googleSignIn } = useContext(UserContext)

    const navigate = useNavigate()

    const handleSignInSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()

                const userEmail = {
                    user_email: user.email
                }

                fetch('https://play-beat-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userEmail)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token)
                    })
                    .catch(e => console.log(e))

            })
            .catch(e => console.log(e))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(e => console.log(e))
    }

    return (
        <div className='w-8/12 md:w-4/12 mx-auto my-32 border-2 p-12 rounded-lg'>
            <h2 className='text-center text-4xl font-bold'>Please Login</h2>
            <form onSubmit={handleSignInSubmit}>
                <input type="email" name='email' placeholder="Your Email" className="input mt-6 input-bordered w-full " />
                <input type="password" name='password' placeholder="Your Password" className="input mt-6 input-bordered w-full " />
                <input type="submit" className='btn btn-secondary mt-6 w-full' value="Login" />
            </form>
            <div className="divider">OR Sign In</div>
            <div className='flex justify-center items-center border-2 p-2 text-pink-600 border-pink-500 rounded-3xl cursor-pointer' onClick={handleGoogleSignIn}>
                <AiFillGoogleCircle className='text-3xl' />
                <p className='text-xl font-bold ml-2'>Sign In With Google</p>
            </div>
            <Link to='/register'>
                <p className='mt-2 text-end font-xl text-red-600 font-bold cursor-pointer'>Register Now</p>
            </Link>
        </div>
    );
};

export default Login;