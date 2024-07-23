import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../context/AuthContext";


const styles = {
    container: {
        textAlign: 'center', width: '50vw'
    },
    form: {
        display: 'flex', flexDirection: 'column',
    },
    signIn: {
        color: 'white', backgroundColor: 'black'
    },
    google: {
        color: '#DB4437', backgroundColor: 'white', border: '1px solid #DB4437', width: '100%'
    }
}

function Auth() {
    const navigate = useNavigate()
    const [isRegister, setIsRegister] = useState(false);
    const {login, register} = useAuth()
 
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    useEffect(() => {
        setErrors({})
    }, [isRegister])

    async function handleSubmit(e) {
        e.preventDefault();


        const body = isRegister ? {
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            firstName: formData.firstName,
            lastName: formData.lastName,
            isRegister: true
        } : {
            email: formData.email,
            password: formData.password
        };

            try{
                isRegister ? await register(body) :  await login(body)
                navigate(`/profile`)
            }catch(error){
                console.log(error)
                switch(error.response.status){
                    case 400:
                        setErrors(error.response.data.errors)
                        break;
                    case 417 ://Duplicate data in database
                        const clearFormData = () => {
                            const clearedData = Object.keys(formData).reduce((acc, key) => {
                                acc[key] = '';
                                return acc;
                            }, {});
                            return clearedData
                        }
                        setErrors({})
                        setFormData(clearFormData())
                        alert(error.response.data.message)
                        break;
                }
            }

       
    }
    

    return (
        <div id="auth-page">
            <div className="container" style={styles.container}>
                <h1 className="brand-name">Budgetwise</h1>
                <p className="subtitle">Manage your finances with ease</p>
                <p className="description">Register or sign in and we'll get you started.</p>

                <form action="/" method="post" onSubmit={handleSubmit} style={styles.form}>

                   
                    {isRegister && (
                         <div className="register-name">
                             <input
                                 type="text"
                                 name="firstName"
                                 id="firstName"
                                 placeholder="First Name"
                                 className="input-pill"
                                 value={formData.firstName}
                                 onChange={handleChange}
                             />
                                {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
                             <input
                                 type="text"
                                 name="lastName"
                                 id="lastName"
                                 placeholder="Last Name"
                                 className="input-pill"
                                 value={formData.lastName}
                                 onChange={handleChange}
                             />
                                {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}

                         </div>
                    )}

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        className="input-pill"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        className="input-pill"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                    
                    {isRegister && (
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            className="input-pill"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    )}
                    {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
                    
                    <button className="button-pill" style={styles.signIn} type="submit">
                        {isRegister ? 'Register' : 'Sign in'}
                    </button>
                </form>

                <p className="terms">
                    {isRegister ? 'Have an account?' : "Don't have an account?"} 
                    <button style={{ color: '#007bff' }} onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? 'Sign in' : 'Sign up'}
                    </button>
                </p>
                <p className="terms">
                    I accept Budgetwise <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                </p>
            </div>
        </div>
    );
}

export default Auth;
