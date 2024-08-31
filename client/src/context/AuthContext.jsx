import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {

    // const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('/api/auth/check');
                setIsAuthenticated(response.data.authenticated);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    const loginAPI = async (credentials) => {
        const response = await axios.post('/api/login', credentials);
        setIsAuthenticated(true);
    };

    const registerAPI = async (credentials) => {
        const response = await axios.post('/api/register', credentials);
        setIsAuthenticated(true);
    };

    const logoutAPI = async (e) => {
        e.preventDefault()
        const result = await axios.post('/api/logout');
        setIsAuthenticated(false);
        
    };
    


    return (
        <AuthContext.Provider value={{ isAuthenticated, loginAPI, logoutAPI, registerAPI }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
