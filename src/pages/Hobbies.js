import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
        <Typography variant="h3">Photography</Typography>
        <Typography variant="body1">Capturing everyday moments.</Typography>
        <Typography variant="body1">
          <Link color="info" href="/hobbies/photography">
            Photography Portfolio
          </Link>
        </Typography>
      </Grid>

      <Grid className={classes.body}>
        {/* Sports */}
        <FitnessCenterIcon fontSize="Large" />
        <Typography variant="h3">Sports</Typography>
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
