import React, { useEffect, useState } from 'react';
import SubscriberTable from './SubscriberTable/SubscriberTable';

const Subscriber = () => {

    const [subscriber, setSubscriber] = useState([])

    useEffect(() => {
        fetch('https://play-beat-server.vercel.app/subscriber')
            .then(res => res.json())
            .then(data => setSubscriber(data))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className='w-8/12 mx-auto my-12'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subscriber.map(sub => <SubscriberTable key={sub._id} sub={sub} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Subscriber;