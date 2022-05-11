import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import {SiFacebook, SiGithub} from 'react-icons/si'

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
    OOP: {
        color: 'rgb(81 184 223)'
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
                {"I'm a 4th year at Georgia Tech studying Computer Science. More specifically how the internet works (info networks) and computer graphics (media)."}
            </Typography>
            

            <Typography variant="h5" component="h2" style={{ fontWeight: 500 }} gutterBottom>
                {'Soon,'}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                {'I will be in Menlo Park interning at'} {<Box component="span" fontWeight='fontWeightMedium' className={classes.metaC}><SiFacebook></SiFacebook> Meta </Box>} {'as a Software Engineer Intern for Summer 2022. '} 
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                {'Soon after, I will be joining a Stealth Startup in the fall to work on developer productivity tools in the Bay Area.'}
            </Typography>

            <Typography variant="h5" component="h2" style={{ fontWeight: 500 }} gutterBottom>
                {'Previously,'}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                {'I was at '} 
            {<Box component="span" fontWeight='fontWeightMedium' className={classes.deltaR}>Delta Air Lines (Delta Flight Products) </Box>} 
                {' as a Software Engineer Co-op working on the In-Flight Entertainment System.'}
            </Typography>
            <Typography variant="h5" component="h2"  gutterBottom>
                {"I also taught at the College of Computing as a Teaching Assistant for "} {<Box component="span" fontWeight='fontWeightMedium' className={classes.DSA}>Data Structures and Algorithms (CS1332)</Box>} {"and "} 
                {<Box component="span" fontWeight='fontWeightMedium' className={classes.OOP}>Object Oriented Programming in Java (CS1331)</Box>}
                {" for 5 semesters."}
            </Typography>

            <Typography variant="h5" component="h2" style={{ fontWeight: 500 }} gutterBottom> 
                {"I've worked on/ been working on..."}
            </Typography>
            <ul>
                <li>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {<Link color="inherit" href="https://groupme-etiquette-revamp.vercel.app" className={classes.myTextStyle}> groupme analyzer</Link>}
                        {<Link color="inherit" href="https://github.com/ohcnivek/groupme-etiquette-revamp" className={classes.myTextStyle}> <SiGithub></SiGithub></Link>}
                    </Typography>
                </li>
                
                <li>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {<Link color="inherit" href="https://csvistool.com" className={classes.myTextStyle}> open source data structures & algorithms visualization tool </Link>} 
                        {<Link color="inherit" href="https://github.com/RodrigoDLPontes/visualization-tool" className={classes.myTextStyle}> <SiGithub></SiGithub></Link>}
                    </Typography>
                </li>
                
                <li>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {<Link color="inherit" href="https://kevincho.blog" className={classes.myTextStyle}> my blog </Link>}
                        {<Link color="inherit" href="https://github.com/ohcnivek/unfortunately-my-thoughts" className={classes.myTextStyle}> <SiGithub></SiGithub></Link>} 
                    </Typography>
                </li>
                

                
            </ul>

            <Typography variant="h5" component="h2" style={{ fontWeight: 500 }} gutterBottom>
                    {'I really like...'}
                </Typography>

            <Typography variant="h5" component="h2" gutterBottom>
                {'to climb, run, learn, teach, code, travel... I also occasionally write about stuff at '} 
                {<Link color="inherit" href="https://kevincho.blog" className={classes.myTextStyle}> kevincho.blog</Link>}
            </Typography>
            
                    
        </div>
    );
  }

export default Spiel;