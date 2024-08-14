import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#FF00FF', // Matching the pink color for the title
      },
      secondary: {
        main: '#000000', // Black for buttons
      },
      error: {
        main: '#DB4437', // Google red color
      },
    }
  });

  export default theme