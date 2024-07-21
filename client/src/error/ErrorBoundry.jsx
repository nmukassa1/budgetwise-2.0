// ErrorBoundary.jsx
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorBoundary = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(navigate);
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000); // Delay in milliseconds

        // Cleanup function to clear the timer if the component unmounts before the redirect
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h1>Something went wrong!</h1>
            <p>Redirecting to the home page...</p>
        </div>
    );
};

export default ErrorBoundary;
