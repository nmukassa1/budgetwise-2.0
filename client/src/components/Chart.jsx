import { Box } from "@mui/material";
import { PieChart } from '@mui/x-charts';
import { useUserContext } from "../userData/UserContext";
import { useEffect, useState } from "react";


function Chart() {

    const {userBudget, setUserBudget} = useUserContext()
    const [seriesData, setSeriesData] = useState([])

    // console.log(userBudget.expenses);

    const transformDataForPieChart = (data) => {
        return [
            {
            data: data.map((item) => ({
                id: item.id,
                value: item.amount,
                // label: item.name,
            })),
            },
        ];
    };

    // const seriesData = transformDataForPieChart(userBudget.expenses);
    // console.log(seriesData);

    useEffect(() => {
        setSeriesData(transformDataForPieChart(userBudget.expenses))
    }, [userBudget])



    return ( 
        <Box>
            {/* <PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ],
    },
  ]}
  width={400}
  height={200}
/> */}
           {seriesData && (
                <PieChart
                    series={seriesData}
                    width={400}
                    height={200}
                /> 
           )}
        </Box> 
    );
}

export default Chart;