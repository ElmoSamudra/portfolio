import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "5% 20% 5%",
    textAlign: "center",
  },
}));

export default function Contacts() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">Contact Details</Typography>
    </div>
  );
}
