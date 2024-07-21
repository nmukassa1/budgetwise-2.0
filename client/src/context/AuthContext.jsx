import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {


    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('/api/auth/check');
                // console.log(response);
                setIsAuthenticated(response.data.authenticated);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (credentials) => {
        const response = await axios.post('/api/login', credentials);
        setIsAuthenticated(true);
    };

    const register = async (credentials) => {
        const response = await axios.post('/api/register', credentials);
        setIsAuthenticated(true);
    };

    const logout = async () => {
        await axios.post('/api/logout');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
