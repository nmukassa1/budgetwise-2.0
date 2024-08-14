import { Button, Typography } from "@mui/material";
import { useAuth } from '../../context/AuthContext';

function Banner() {
     const {logout} = useAuth()

    return ( 
        <div id='banner'>
          <Typography variant="h6" component={'h1'}>BudgetWise</Typography>
          <Button onClick={logout} color="primary">Logout</Button>
             {/* <button onClick={logout}>Logout</button> */}
        </div>
     );
}

export default Banner;