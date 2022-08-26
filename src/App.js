import * as React from "react";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import { Typography, Container, Box } from "@mui/material";
import { SiMinutemailer, SiGithub, SiStrava } from "react-icons/si";
import ReactGA from "react-ga";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Spiel from "./components/Spiel";
import Header from "./components/Header";
import Bio from "./components/Bio";

const useStyles = makeStyles({
  oldFBC: {
    color: "rgb(66 103 178)",
  },
  messengerC: {
    color: "rgb(174, 99, 255)",
  },
});

const TRACKING_ID = "G - WGTL5ETMVG";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname);
console.log(window.location.pathname);

export default function App() {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Header></Header>
        <Bio></Bio>
        <Spiel></Spiel>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">More!</Typography>

          <Typography variant="body1">
            <SiMinutemailer></SiMinutemailer>
            {
              <Box
                component="span"
                fontWeight="fontWeightMedium"
                className={classes.messengerC}
              >
                {" "}
                ohcnivek@gmail.com
              </Box>
            }
          </Typography>

          <Typography variant="body1">
            {
              <Link
                underline="hover"
                color="inherit"
                href="https://www.strava.com/athletes/15780047"
                className={classes.myTextStyle}
              >
                {" "}
                <SiStrava></SiStrava>
                {
                  <Box
                    component="span"
                    fontWeight="fontWeightMedium"
                    className={classes.messengerC}
                  >
                    {" "}
                    strava
                  </Box>
                }
              </Link>
            }
          </Typography>

          <Typography variant="body1">
            {
              <Link
                underline="hover"
                color="inherit"
                href="https://github.com/ohcnivek"
                className={classes.myTextStyle}
              >
                {" "}
                <SiGithub></SiGithub>
                {
                  <Box
                    component="span"
                    fontWeight="fontWeightMedium"
                    className={classes.messengerC}
                  >
                    {" "}
                    github/ohcnivek
                  </Box>
                }
              </Link>
            }
          </Typography>

          <Typography variant="body1">
            {
              <Link
                underline="hover"
                color="inherit"
                href="https://github.com/ohcnivek/kevincho-me"
                className={classes.myTextStyle}
              >
                {" "}
                <SiGithub></SiGithub>
                {
                  <Box
                    component="span"
                    fontWeight="fontWeightMedium"
                    className={classes.messengerC}
                  >
                    {" "}
                    src code{" "}
                  </Box>
                }
              </Link>
            }
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
