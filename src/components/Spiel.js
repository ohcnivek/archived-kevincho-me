import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';

 

const useStyles = makeStyles({
    metaC: {
      color: 'rgb(0, 128, 251)'
    },
    deltaR: {
        color: 'rgb(38, 114, 191)'
      },
    deltaG: {
    color: 'rgb(134, 38, 51)'
    },

    DSA: {
        color: 'rgb(127 186 0)'
    },

    myTextStyle: {
        color: 'white', 
        '&:hover': {
         color: 'rgb(0, 128, 251)'
        }
    }
    
  });

function Spiel() {
    const classes = useStyles();

    return (
        <div>
            

            <Typography variant="h5" component="h2" style={{ fontWeight: 500 }} gutterBottom>
            {'Currently,'}
            </Typography>
            <Typography variant="h5" component="h2"  gutterBottom>
            {"I'm studying Computer Science at Georgia Tech. More specifically how the internet works (info networks) and computer graphics (media)."}
            </Typography>

            <Typography variant="h5" component="h2"  gutterBottom>

            {"I also teach at the College of Computing as a Teaching Assistant for "} {<Box component="span" fontWeight='fontWeightMedium' className={classes.DSA}>Data Structures and Algorithms (CS1332).</Box>}
            </Typography>

            <Typography variant="h5" component="h2" style={{ fontWeight: 500 }} gutterBottom>
            {'Soon,'}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
            {'I will be in Menlo Park interning at'} {<Box component="span" fontWeight='fontWeightMedium' className={classes.metaC}>Meta (Facebook)</Box>} {'as a Software Engineer Intern for Summer 2022.'} 
            </Typography>


            
            <Typography variant="h5" component="h2" style={{ fontWeight: 500 }} gutterBottom>
            {'Previously,'}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
            {'I was at '} 
            {<Box component="span" fontWeight='fontWeightMedium' className={classes.deltaR}>Delta Air Lines (Delta Flight Products) </Box>} 
              {' as a Software Engineer Co-op working on the In-Flight Entertainment System.'}
            </Typography>

            <Typography variant="h5" component="h2" style={{ fontWeight: 500 }} gutterBottom>
            {'I really like...'}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
            {'to climb, learn, teach, code, travel... I also occasionally write about stuff at '} 
            
            {<Link color="inherit" href="https://kevincho.blog" className={classes.myTextStyle}> kevincho.blog</Link>}
      
            </Typography>
            

        
        </div>
    );
  }

export default Spiel;