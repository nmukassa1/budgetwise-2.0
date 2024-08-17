import { Grid } from "@mui/material";
import Income from "../categories/Income";
import Savings from '../categories/Savings';
import Expenses from '../categories/Expenses';
import FinanceCard from "./FinanceCard";

function DshboardUi() {
    return ( 
        <Grid item xs={10} sx={{background: "#F9FAFB"}}>
            <Grid
              container
              flexDirection={'column'}
              ml={2}
              sx={{ minHeight: '100vh', gap: '10px', justifyContent: 'space-around'}} // Ensures the Box takes full view 
              >
                <Income />
                <Expenses />
                <Savings />
              
            </Grid>
        </Grid>
     );
}

export default DshboardUi;