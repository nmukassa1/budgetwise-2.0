import { Card } from "@mui/material";

function CardBase({children}) {
    return ( 
        <Card sx={{ width: '265px', height: '200px', overflow: 'scroll', border: '1px solid black', borderRadius: '10px' }}>
            {children}
        </Card>
     );
}

export default CardBase;