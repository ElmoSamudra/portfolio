import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function FrontPage() {
  return (
    <div>
      <Grid>
        <Grid input xs={12}>
          <Typography variant="h1">Welcome to my personal page!</Typography>
        </Grid>
        <Grid input input xs={12}>
          <Typography variant="h2">Introduction</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            condimentum, erat id iaculis congue, massa mi malesuada neque, non
            sagittis dolor dolor vitae augue. Maecenas a purus nisi. Vivamus
            vehicula posuere felis. Duis et semper felis. Nullam suscipit lorem
            arcu, quis ornare justo maximus vitae. Fusce dignissim scelerisque
            enim eget cursus. In varius a tellus sit amet cursus. Fusce dictum
            nisi sed magna porta, mattis dapibus leo consectetur. Phasellus in
            velit nec nibh tincidunt fringilla. Aenean feugiat nunc a ante
            iaculis, nec mollis nisi ornare. Quisque lobortis quam nec rutrum
            mollis. Quisque sodales est eget elit sodales, ac consequat nisl
            volutpat.
          </Typography>
        </Grid>
        <Grid input input xs={12}>
          <Typography variant="h2">Latest Work</Typography>
        </Grid>
        <Grid input input xs={12}>
          <Typography variant="h2">Miscellaneous</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
