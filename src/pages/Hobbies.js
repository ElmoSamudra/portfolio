import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

export default function FrontPage() {
  return (
    <div>
      <Typography variant="h1">Hobbies</Typography>
      <Typography variant="subtitle1">
        Know to know a little more about me.
      </Typography>

      {/* Photography */}
      <Typography variant="h2">
        <PhotoCameraIcon fontSize="Large" />
        Photography
      </Typography>
      <Typography variant="body1">Capturing everyday moments.</Typography>
      <Typography variant="body1">
        <Link href="/hobbies/photography">View</Link>
      </Typography>

      {/* Sports */}
      <Typography variant="h2">
        <FitnessCenterIcon fontSize="Large" />
        Sports
      </Typography>
      <Typography variant="body1">
        I like to do various different sports.
      </Typography>
      <Typography variant="body1">
        <Link href="/hobbies/sports">View</Link>
      </Typography>
    </div>
  );
}
