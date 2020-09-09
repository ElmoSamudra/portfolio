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

const background = [
  {
    where: "University of Melbourne",
    subWhere: "Bachelor of Science in Data Science",
    details:
      "Unimelb presented vast and diverse opportunities. It allowed me to connect with great professors, caring tutors and wonderful friends. The three years I spent in Unimelb pushed me to open my knowledge and challenge my worldview.\n Every day was different in Unimelb. The university’s Melbourne model enabled me to learn complex statistics, machine learning and Information Technologies in-depth while also discovering the world of psychology, finance and arts. Amazingly brilliant minds motivated me to continue improving and thought me humility. The expression of awed gets thrown at me on a daily basis and I love it. It just shows how amazing the world can be.\nUnimelb gave me the joy of learning and endless inspiration.",
  },
  {
    where: "Gloria Christian Highschool",
    subWhere: "Science",
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

export default function Background() {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" className={classes.box}>
      {background.map((item, key) => (
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
          {item.details.split("\n").map((paragraph, i) => (
            <Typography variant="body1">{paragraph}</Typography>
          ))}
          <br />
        </Box>
      ))}
    </Box>
  );
}
