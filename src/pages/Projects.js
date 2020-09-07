import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "5% 20% 5%",
    textAlign: "center",
  },
}));

export default function FrontPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">Projects</Typography>
      <Typography variant="subtitle1">My previous accomplishments.</Typography>
    </div>
  );
}
