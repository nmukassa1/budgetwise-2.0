import { Box, Button, CircularProgress } from "@mui/material";
import { useForm } from "./FormContext";
import Inputs from "./Inputs";
import FormFooter from "./FormFooter";
import { useEffect } from "react";

function FormComponents() {
    const {handleSubmit, isRegister, displaySpinner} = useForm()

    return ( 
        <>
        <Box width={'100%'} component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Inputs/>
            
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, color: 'white', background: 'black', padding: '10px', borderRadius: '999px' }}
            >
            {isRegister ? 'Register' : 'Sign in'}
            </Button>
            {displaySpinner && <CircularProgress sx={{mt: 2}} />}
        </Box>
        <FormFooter />
        </>
     );
}

export default FormComponents;