import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

// components
import Intro from "../components/Intro";
import Information from "../components/Information";

const useStyles = makeStyles((theme) => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    padding: "0% 3% 0%",
    textAlign: "left",
    backgroundColor: "white",
  },
  grey: {
    color: "grey",
  },
}));

export default function FrontPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        {/* Welcome */}
        <Grid input xs={12} className={classes.title}>
          <Hidden smDown>
            <Typography variant="h1">Welcome</Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant="h2">Welcome</Typography>
          </Hidden>
          <Typography variant="h5">
            Please note that this website is still under construction. Some
            features may not be working.
          </Typography>
        </Grid>

        {/* Intro */}
        <Intro />

        {/* Picture Items */}
        <Information />
      </Grid>
    </div>
  );
}
