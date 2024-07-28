import { Typography , Link} from "@mui/material";
import { useForm } from "./FormContext";

function FormFooter() {

    const {isRegister, setIsRegister} = useForm()

    return ( 
        <>
            <Typography component="p" variant="body2" sx={{ mt: 2 }}>
                {isRegister ? 'Have an account?' : "Don't have an account?"} 
                <Typography component="button" variant="body2" onClick={() => setIsRegister(!isRegister)} sx={{ color: '#007bff', cursor: 'pointer', ml: 1 }}>
                    {isRegister ? 'Sign in' : 'Sign up'}
                </Typography>
            </Typography>

            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 5 }}>
            I accept Budgetwise <Link href="#" underline="none" sx={{ color: '#007bff', cursor: 'pointer'}}>Terms of Use</Link> and <Link href="#" underline="none" sx={{ color: '#007bff', cursor: 'pointer'}}>Privacy Policy</Link>
            </Typography>
        </>
     );
}

export default FormFooter;