import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../Contexts/AuthContext/AuthContext';

const SubscriptionAccess = () => {

    const { user } = useContext(UserContext)

    const navigate = useNavigate()

    const { email } = user

    const handleSubscriber = (event) => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const phone = form.phone.value

        const subscriber = {
            name,
            phone,
            email
        }

        fetch('https://play-beat-server.vercel.app/subscriber', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(subscriber)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('You Got Access')
                    form.reset()
                    navigate('/')
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='w-8/12 lg:w-3/12 mx-auto my-12'>
            <h1 className='text-3xl my-6 font-bold text-sky-900 text-center'>Please Submit Form To Access On Website</h1>
            <form onSubmit={handleSubscriber}>
                <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered input-primary w-full my-2" />
                <input type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered input-primary w-full my-2" />
                <input type="text" defaultValue={email} readOnly name='email' placeholder="Your Email" className="input input-bordered input-primary w-full my-2" />
                <input type="submit" className='btn btn-warning w-full my-4' value="Buy Access" />
            </form>
        </div>
    );
};

export default SubscriptionAccess;