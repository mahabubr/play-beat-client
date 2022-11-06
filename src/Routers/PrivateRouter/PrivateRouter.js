import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/AuthContext/AuthContext';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(UserContext)

    if (loading)
        return <p>Loading</p>

    if (user) {
        return children
    }
    return <Navigate to='/login' />

};

export default PrivateRouter;