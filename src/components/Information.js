import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

import MidBreadcrumb from "../components/MidBreadcrumb";
import Explore from "../components/Explore";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "3%",
    textAlign: "center",
    backgroundColor: "white",
  },
}));

export default function Information() {
  const classes = useStyles();

  return (
    <Hidden smDown>
      <Grid container item xs={12} className={classes.body}>
        <MidBreadcrumb />
        <Explor />
      </Grid>
    </Hidden>
  );
}
