import React from "react";
import { makeStyles, emphasize, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  bread: {
    padding: "3% 3% 5%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

function breadcrumbClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function MidBreadcrumb() {
  const classes = useStyles();
  return (
    <Grid input xs={12} className={classes.bread}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Education"
          onClick={breadcrumbClick}
        />
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Work"
          onClick={breadcrumbClick}
        />
      </Breadcrumbs>
    </Grid>
  );
}
