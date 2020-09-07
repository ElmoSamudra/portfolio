import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const listItems = [
  {
    title: "Latest Work",
    description: "Display of latest endeavours.",
  },
  {
    title: "Miscellaneous",
    description: "Random things I do on my spare time.",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "5% 20% 5%",
    textAlign: "center",
  },
  subTitle: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
    backgroundColor: "#3d3d3d",
    color: "white",
    padding: "5% 15% 5%",
  },
  body: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "7%",
    maxWidth: "50%",
    textAlign: "left",
    paddingTop: "5%",
  },
  grey: {
    color: "grey",
  },
}));

export default function FrontPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid>
        <Grid input xs={12} className={classes.title}>
          <Typography variant="h1">Welcome</Typography>
        </Grid>
        <Grid input input xs={12} className={classes.subTitle}>
          <Typography variant="h2">Introduction</Typography>
          <Typography variant="body1" className={classes.grey}>
            Hi! Welcome to my personal page. Here you can find all my works,
            activities and hobbies. Feel free to contact me if you share an
            interest, need any help or just wanna chat. You can find my contacts
            on the contacts page or the footer below.
          </Typography>
        </Grid>
        {listItems.map((item, key) => (
          <Grid input input xs={12} className={classes.body}>
            <Typography variant="h3">{item.title}</Typography>
            <Typography variant="subtitle1">{item.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
