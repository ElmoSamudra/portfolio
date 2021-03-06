import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function Photography() {
  return (
    <div>
      <Typography variant="h2">Photography</Typography>
      <Typography variant="subtitle1">Moments that I have captured.</Typography>
      <Grid>
        <Grid input xs={4}></Grid>
        <Grid input xs={4}></Grid>
        <Grid input xs={4}></Grid>
      </Grid>
    </div>
  );
}
