import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import { SiFacebook, SiGithub } from "react-icons/si";

const useStyles = makeStyles({
  aviatorC: {
    color: "rgb(0, 48, 59)",
  },
  yCombinatorC: {
    color: "rgb(255, 64, 0)",
  },
  metaC: {
    color: "rgb(0, 128, 251)",
  },
  deltaR: {
    color: "rgb(38, 114, 191)",
  },
  deltaG: {
    color: "rgb(134, 38, 51)",
  },
  DSA: {
    color: "rgb(196, 89, 95)",
  },
  OOP: {
    color: "rgb(196, 89, 95)",
  },
  myTextStyle: {
    color: "white",
    "&:hover": {
      color: "rgb(0, 128, 251)",
    },
  },
});

function Spiel() {
  const classes = useStyles();

  return (
    <div>
      <Typography
        variant="h5"
        component="h2"
        style={{ fontWeight: 500 }}
        gutterBottom
      >
        {"Currently,"}
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        {"I'm working on developer productivity tools (CI/CD) at "}{" "}
        {
          <Box
            component="span"
            fontWeight="fontWeightMedium"
            className={classes.aviatorC}
          >
            Aviator{" "}
          </Box>
        }
        {
          <Box
            component="span"
            fontWeight="fontWeightMedium"
            className={classes.yCombinatorC}
          >
            [YCS21]{" "}
          </Box>
        }{" "}
        {"as a Software Engineer Intern in the Bay Area."}
        <Typography variant="h5" component="h2" gutterBottom marginTop={1}>
          {
            "I'm also a 4th year student at Georgia Tech studying Computer Science. More specifically how the internet works (info networks) and computer graphics (media)."
          }
        </Typography>
      </Typography>

      <Typography
        variant="h5"
        component="h2"
        style={{ fontWeight: 500 }}
        gutterBottom
      >
        {"Recently,"}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {"I finished up my internship at "}{" "}
        {
          <Box
            component="span"
            fontWeight="fontWeightMedium"
            className={classes.metaC}
          >
            Facebook (Meta){" "}
          </Box>
        }{" "}
        {"as a Software Engineer Intern, where I did full stack development."}
      </Typography>

      <Typography
        variant="h5"
        component="h2"
        style={{ fontWeight: 500 }}
        gutterBottom
      >
        {"Previously,"}
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        {" I was at "}
        {
          <Box
            component="span"
            fontWeight="fontWeightMedium"
            className={classes.deltaR}
          >
            Delta Air Lines [Delta Flight Products]{" "}
          </Box>
        }
        {
          " as a Software Engineer Co-op working where I worked on the In-Flight Entertainment System (summer 2021)."
        }
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {
          "I've also taught at the College of Computing as a Teaching Assistant for "
        }{" "}
        {
          <Box
            component="span"
            fontWeight="fontWeightMedium"
            className={classes.DSA}
          >
            Data Structures and Algorithms (CS1332)
          </Box>
        }{" "}
        {"and "}
        {
          <Box
            component="span"
            fontWeight="fontWeightMedium"
            className={classes.OOP}
          >
            Object Oriented Programming in Java (CS1331)
          </Box>
        }
        {" for 5 semesters."}
      </Typography>

      <Typography
        variant="h5"
        component="h2"
        style={{ fontWeight: 500 }}
        gutterBottom
      >
        {"I've worked on/ been working on..."}
      </Typography>
      <ul>
        <li>
          <Typography variant="h5" component="h2" gutterBottom>
            {
              <Link
                color="inherit"
                href="https://groupme-etiquette-revamp.vercel.app"
                className={classes.myTextStyle}
              >
                {" "}
                groupme analyzer
              </Link>
            }
            {
              <Link
                color="inherit"
                href="https://github.com/ohcnivek/groupme-etiquette-revamp"
                className={classes.myTextStyle}
              >
                {" "}
                <SiGithub></SiGithub>
              </Link>
            }
          </Typography>
        </li>

        <li>
          <Typography variant="h5" component="h2" gutterBottom>
            {
              <Link
                color="inherit"
                href="https://csvistool.com"
                className={classes.myTextStyle}
              >
                {" "}
                open source data structures & algorithms visualization tool{" "}
              </Link>
            }
            {
              <Link
                color="inherit"
                href="https://github.com/RodrigoDLPontes/visualization-tool"
                className={classes.myTextStyle}
              >
                {" "}
                <SiGithub></SiGithub>
              </Link>
            }
          </Typography>
        </li>

        <li>
          <Typography variant="h5" component="h2" gutterBottom>
            {
              <Link
                color="inherit"
                href="https://kevincho.blog"
                className={classes.myTextStyle}
              >
                {" "}
                my blog{" "}
              </Link>
            }
            {
              <Link
                color="inherit"
                href="https://github.com/ohcnivek/unfortunately-my-thoughts"
                className={classes.myTextStyle}
              >
                {" "}
                <SiGithub></SiGithub>
              </Link>
            }
          </Typography>
        </li>
      </ul>

      <Typography
        variant="h5"
        component="h2"
        style={{ fontWeight: 500 }}
        gutterBottom
      >
        {"I really like..."}
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        {
          "to climb, run, learn, teach, code, travel... I also occasionally write about stuff at "
        }
        {
          <Link
            color="inherit"
            href="https://kevincho.blog"
            className={classes.myTextStyle}
          >
            {" "}
            kevincho.blog
          </Link>
        }
      </Typography>
    </div>
  );
}

export default Spiel;
