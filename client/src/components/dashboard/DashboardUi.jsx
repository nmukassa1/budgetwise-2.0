import { Box, Grid } from "@mui/material";
import Income from "../categories/Income";
import Expenses from "../categories/Expenses";
import Savings from '../categories/Savings';
import Balance from '../common/Balance';
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
                {/* <Box>
                  <Income />
                </Box>
                <Box>
                  <Expenses /> 
                </Box>
                <Box>
                  <Savings /> 
                </Box> */}

                <FinanceCard name="income" />
                <FinanceCard name="expenses" />
                <FinanceCard name="savings" />
              
            </Grid>
        </Grid>
     );
}

export default DshboardUi;