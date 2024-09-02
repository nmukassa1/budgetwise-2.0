import { Grid } from "@mui/material";
import Income from "../categories/Income";
import Savings from '../categories/Savings';
import Expenses from '../categories/Expenses';
import Balance from '../common/Balance';
import FinanceCard from "./FinanceCard";
import Chart from "../Chart";
import CardBase from "../common/CardBase";

function DshboardUi() {
    return ( 
        <Grid item xs={10} sx={{background: "#F9FAFB", display: 'flex',}}>
            <Grid
              container
              flexDirection={'column'}
              ml={2}
              sx={{ minHeight: '100vh', gap: '10px', justifyContent: 'space-around'}} // Ensures the Box takes full view 
              >
                <Income />
                <Expenses />
                <Savings />
                <Balance />
              
            </Grid>

            <Grid
              container
              flexDirection={'column'}
              ml={2}
              sx={{ minHeight: '100vh', gap: '10px', justifyContent: 'space-around'}} // Ensures the Box takes full view 
              >
               {/* <CardBase>jbh</CardBase> */}
            </Grid>

            
            {/* <Chart  /> */}

        </Grid>
     );
}

export default DshboardUi;