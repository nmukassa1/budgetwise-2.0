import { Typography } from "@mui/material";

function FormIntro() {
    return ( 
        <>
            <Typography component="h1" variant="h3" color="primary.main" sx={{fontWeight: 'bold'}}>Budgetwise</Typography>
            <Typography component="p" variant="h6">Manage your finances with ease</Typography>
            <Typography component="p" variant="subtitle1">Register or sign in and we'll get you started.</Typography>
        </>
     );
}

export default FormIntro;