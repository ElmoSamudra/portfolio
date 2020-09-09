import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";

const projects = [
  {
    label: "Chatbot",
    image: "",
    github: "https://github.com/ElmoSamudra/personalChatBot",
    details: "Microsoft Bot Framework",
  },
  {
    label: "Personal Site",
    image: "",
    github: "https://github.com/ElmoSamudra/portfolio",
    details: "Mainly built on React.js",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "5% 20% 5%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  body: {
    margin: "5% 10% 3%",
    textAlign: "left",
  },
}));

export default function Projects() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid xs={12} className={classes.title}>
        <Typography variant="h2">Projects</Typography>
        <Typography variant="subtitle1">
          Where I spend most of my time.
        </Typography>
      </Grid>

      {projects.map((item, key) => (
        <Grid xs={12} className={classes.body}>
          <Typography variant="h3">• {item.label}</Typography>
          <Link color="info" href={item.link}>
            <GitHubIcon color="primary" fontSize="Large" />
            <Typography variant="h5">GitHub</Typography>
          </Link>
          <Typography variant="body1">{item.details}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
