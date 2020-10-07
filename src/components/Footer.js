import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const contactItems = [
  {
    logo: "</EmailIcon>",
    details: "Shawnsamudra09@gmail.com",
  },
  {
    logo: "</LinkedInIcon>",
    detials: "https://www.linkedin.com/in/shawn-samudra-734524150/",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    padding: "5% 5% 1% 5%",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Typography variant="h6">Shawn E Samudra</Typography>
      <Typography variant="body1">
        <EmailIcon />
        Shawnsamudra09@gmail.com
      </Typography>
      <Link href="https://www.linkedin.com/in/shawn-samudra-734524150/">
        <Typography variant="body1">
          <LinkedInIcon />
          Shawn Samudra
        </Typography>
      </Link>
    </Grid>
  );
}
