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
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim ex, eu volutpat tellus. Pellentesque convallis, massa sit amet varius egestas, arcu metus rutrum ipsum, quis finibus mauris odio vel urna. Suspendisse nec tempor ipsum, ac consequat lorem. Praesent egestas vehicula leo. Suspendisse enim nibh, feugiat vel maximus vel, imperdiet nec ipsum. Nam imperdiet, eros quis lacinia maximus, enim massa finibus nunc, at pretium nisl massa quis arcu. Quisque sit amet ullamcorper neque, quis interdum erat. Pellentesque in tempor enim. Vestibulum eget massa lacus.",
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
