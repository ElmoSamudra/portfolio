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

const education = {
  undergrad: "University of Melbourne",
  major: "Bachelor of Science in Data Science",
  undergradDetails: "",
};

const useStyles = makeStyles((theme) => ({
  box: {
    marginBottom: "35%",
    textAlign: "left",
  },
  title: {
    fontSize: "3rem",
  },
}));

export default function Background() {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="row" className={classes.box}>
      <Box>
        <Typography
          color="textSecondary"
          className={classes.title}
          gutterBottom
        >
          Education
        </Typography>
        <Typography variant="h4">{education.undergrad}</Typography>
        <Typography variant="h6">{education.major}</Typography>
      </Box>
    </Box>
  );
}
