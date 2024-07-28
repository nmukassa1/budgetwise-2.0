import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Link,
  CssBaseline,
  Grid
} from '@mui/material';
import Form from "../components/common/Form/Form";
import FormIntro from "../components/common/Form/Intro";
import FormFooter from "../components/common/Form/FormFooter";
import axios from "axios";


function Auth() {
  const [isRegister, setIsRegister] = useState(false);
  const [redirect, setRedirect] = useState(false)

  const navigate = useNavigate()


    useEffect(() => {
        async function fetch(){
            try{
                const result = await axios.get('/api/');
                setRedirect(result.data.isAuthenticated)
            } catch(err){
                console.error(err)
            }
        }
        fetch()
    })

    useEffect(() => {
        if(redirect) navigate('/profile')
    }, [redirect])

  return (
    <Container component="main" maxWidth="xs" sx={{ textAlign: 'center', marginTop: '20vh' }}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FormIntro />
            <Form />
        </Box>
    </Container>
  );
}

export default Auth;
