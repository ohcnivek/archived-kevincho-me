import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';


const theme = createTheme({
    typography: {
      fontFamily: ['Roboto', 'Serif'].join(','),

      h5: {
        color: green[500]
      }
     }
   })


export default theme;