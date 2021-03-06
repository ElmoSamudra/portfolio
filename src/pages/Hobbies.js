import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//icons
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import ComputerIcon from "@material-ui/icons/Computer";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "5% 20% 5%",
    textAlign: "center",
  },
  body: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "7%",
    maxWidth: "50%",
    textAlign: "left",
    paddingTop: "5%",
  },
}));

export default function Hobbies() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.title}>
        <Typography variant="h2">Hobbies</Typography>
        <Typography variant="subtitle1">
          Know a little more about me.
        </Typography>
      </Grid>

      <Grid className={classes.body}>
        {/* Photography */}
        <PhotoCameraIcon fontSize="Large" />
        <Typography variant="h4">Photography</Typography>
        <Typography variant="body1">Capturing everyday moments.</Typography>
        <Typography variant="body1">
          <Link color="info" href="/hobbies/photography">
            Photography Portfolio
          </Link>
        </Typography>
      </Grid>

      <Grid className={classes.body}>
        {/* Web Design */}
        <ComputerIcon fontSize="Large" />
        <Typography variant="h4">Web Design</Typography>
        <Typography variant="body1">I enjoy aesthetics.</Typography>
      </Grid>

      <Grid className={classes.body}>
        {/* Meditation */}
        <SentimentSatisfiedAltIcon fontSize="Large" />
        <Typography variant="h4">Meditation</Typography>
        <Typography variant="body1">
          <Link color="info" href="https://naturalwayofliving.com/">
            Where I find myself in peace.
          </Link>
        </Typography>
      </Grid>

      <Grid className={classes.body}>
        {/* Sports */}
        <FitnessCenterIcon fontSize="Large" />
        <Typography variant="h4">Sports</Typography>
        <Typography variant="body1">
          I like to do various different sports.
        </Typography>
        <Typography variant="body1">
          <Link color="info" href="/hobbies/sports">
            Sport Activities
          </Link>
        </Typography>
      </Grid>
    </div>
  );
}
