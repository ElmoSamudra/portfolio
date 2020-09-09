import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

//images
import latestWork from "../images/latestWork.png";
import miscellaneous from "../images/miscellaneous.png";

const history = [
  {
    where: "Deloitte",
    subWhere: "Risk Analyst - Intern",
    details: "",
  },
];

const useStyles = makeStyles((theme) => ({
  box: {
    marginBottom: "35%",
    textAlign: "left",
  },
  title: {
    fontSize: "3rem",
  },
}));

export default function WorkHistory() {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" className={classes.box}>
      {history.map((item, key) => (
        <Box>
          <Typography
            color="textSecondary"
            className={classes.title}
            gutterBottom
          >
            {item.label}
          </Typography>
          <Typography variant="h4">{item.where}</Typography>
          <Typography variant="h6">{item.subWhere}</Typography>
          <Typography variant="body1">{item.details}</Typography>
          <br />
        </Box>
      ))}
    </Box>
  );
}
