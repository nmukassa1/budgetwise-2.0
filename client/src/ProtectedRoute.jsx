import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            setTimeout(() => {
                navigate('/');
            }, 3000)
        }
    }, [isAuthenticated]);

    // Show nothing or a loading indicator while checking authentication
    return isAuthenticated ? children : null;
};

export default ProtectedRoute;
