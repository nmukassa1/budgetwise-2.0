import { useContext, createContext, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const FormContext = createContext();

export const useForm = () => {
    return useContext(FormContext);
};

const FormProvider = ({children}) => {
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(false);

    //Login & Register api functions
    const { login, register } = useAuth();
  
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
      setErrors({});
    }, [isRegister]);
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      const body = isRegister
        ? {
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            firstName: formData.firstName,
            lastName: formData.lastName,
            isRegister: true,
          }
        : {
            email: formData.email,
            password: formData.password,
          };
  
      try {
        isRegister ? await register(body) : await login(body);
        navigate(`/profile`);
      } catch (error) {
        console.log(error);
        switch (error.response.status) {
          case 400:
            setErrors(error.response.data.errors);
            break;
          case 417: // Duplicate data in database
            const clearFormData = () => {
              const clearedData = Object.keys(formData).reduce((acc, key) => {
                acc[key] = '';
                return acc;
              }, {});
              return clearedData;
            };
            setErrors({});
            setFormData(clearFormData());
            alert(error.response.data.message);
            break;
        }
      }
    }

    const value = useMemo(() => ({
      formData,
      setFormData,
      isRegister,
      setIsRegister,
      errors,
      setErrors,
      handleSubmit,
      handleChange,
  }), [formData, isRegister, errors]);


    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider;