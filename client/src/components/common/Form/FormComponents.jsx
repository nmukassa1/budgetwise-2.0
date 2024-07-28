import { Box, Button } from "@mui/material";
import { useForm } from "./FormContext";
import Inputs from "./Inputs";
import FormFooter from "./FormFooter";

function FormComponents() {
    const {handleSubmit, isRegister} = useForm()
    return ( 
        <>
        <Box width={'100%'} component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Inputs/>
            
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 2, color: 'white', padding: '10px', borderRadius: '999px' }}
            >
            {isRegister ? 'Register' : 'Sign in'}
            </Button>
        </Box>
        <FormFooter />
        </>
     );
}

export default FormComponents;