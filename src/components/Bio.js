import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material";

const useStyles = makeStyles({
  oldFBC: {
    color: "rgb(66 103 178)",
  },
  messengerC: {
    color: "rgb(174, 99, 255)",
  },
});

function Bio() {
  const classes = useStyles();

  return (
    <Typography variant="h5" component="h2" gutterBottom>
      {
        "I'm recruiting for full-time roles that start in May 2023. If you have questions/ opportunities, please don't hesitate to contact me @ "
      }
      <Box
        component="span"
        fontWeight="fontWeightMedium"
        className={classes.oldFBC}
      >
        ohcnivek@gmail.com
      </Box>
    </Typography>
  );
}

export default Bio;
