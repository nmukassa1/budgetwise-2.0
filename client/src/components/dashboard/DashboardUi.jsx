import { Grid } from "@mui/material";
import Income from "../categories/Income";
import Savings from '../categories/Savings';
import Expenses from '../categories/Expenses';
import FinanceCard from "./FinanceCard";

function DshboardUi() {
    return ( 
        <Grid item xs={10}>
            <Grid
              container
              flexDirection={'column'}
              ml={2}
              sx={{ minHeight: '100vh', width: '200px', gap: '10px'}} // Ensures the Box takes full view 
              >
                <Income />
                <Expenses />
                <Savings />
              
            </Grid>
        </Grid>
     );
}

export default DshboardUi;