import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import './RequireAuth.css'

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <p className='text-center mt-5 mb-5 text-red-900'>Loading...</p>
    }

    if (user) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default RequireAuth;