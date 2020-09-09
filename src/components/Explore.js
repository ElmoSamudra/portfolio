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

const listItems = [
  {
    title: "Latest Work",
    photo: latestWork,
    description: "Display of my latest endeavours.",
    link: "/projects",
  },
  {
    title: "Miscellaneous",
    photo: miscellaneous,
    description: "Random things I do on my spare time.",
    link: "/hobbies",
  },
];

const useStyles = makeStyles((theme) => ({
  box: {
    marginBottom: "50%",
  },
  photo: {
    width: "50%",
  },
}));

export default function Explore() {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <Box display="flex" flexDirection="row" className={classes.box}>
        {listItems.map((item, key) => (
          <Box>
            <img src={item.photo} alt={item.title} className={classes.photo} />
            <Typography variant="h4">{item.title}</Typography>
            <Typography variant="subtitle1">{item.description}</Typography>
            <Button variant="outlined" href={item.link}>
              Explore
            </Button>
          </Box>
        ))}
      </Box>
    </Hidden>
  );
}
