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
    subWhere: "Bachelor of Science - Data Science",
    details:
      'Unimelb presented many diverse opportunities. It allowed me to connect with great professors, caring tutors and wonderful peers. The three years I spent in Unimelb pushed me to open my knowledge and challenge my worldview.\n Every day was different in Unimelb. The university’s "Melbourne Model" enabled me to learn complex statistics, machine learning and Information Technologies in-depth while also discovering the world of psychology, finance and arts. Amazingly brilliant minds motivated me to continue improving and taught me humility. The expression of "awed" gets thrown at me daily and I love it. It just shows how amazing the world can be.\nUnimelb gave me the joy of learning and endless inspirations.',
  },
  {
    where: "Gloria Christian Highschool",
    subWhere: "Science",
    details:
      "Gloria was a place where I started to learn how vast the world is. I was dedicated to sports in my first year and spend the rest of my high school years participating in math and physics competitions. During my three year time in high school, I managed to earn various awards and won many competitions in different fields including futsal and astronomy. Competitions that were challenging was really fun. The best moments of my high school competition career was not during competitions that I won, but rather the closest losses in large national competitions. It motivated me to push myself to try and win the next year.",
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
