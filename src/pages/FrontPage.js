import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import mainImage from "../images/workDesk.png";

const listItems = [
  {
    title: "Latest Work",
    description: "Display of latest endeavours.",
    link: "/projects",
  },
  {
    title: "Miscellaneous",
    description: "Random things I do on my spare time.",
    link: "/hobbies",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  image: {
    width: "100%",
    marginLeft: "5%",
    marginRight: "5%",
    padding: "5%",
  },
  title: {
    padding: "3% 5% 1%",
    textAlign: "left",
    backgroundColor: "white",
  },
  intro: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10%",
    textAlign: "left",
  },
  body: {
    padding: "7%",
    textAlign: "center",
    backgroundColor: "white",
  },
  grey: {
    color: "grey",
  },
  contactme: {
    marginTop: "2%",
  },
}));

export default function FrontPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid input xs={12} className={classes.title}>
          <Typography variant="h1">Welcome</Typography>
        </Grid>
        <Grid container item xs={12}>
          <Grid input xs={4}>
            <img src={mainImage} alt="main" className={classes.image} />
          </Grid>
          <Grid input xs={8} className={classes.intro}>
            <Typography variant="h2">Introduction</Typography>
            <Typography variant="body1" className={classes.grey}>
              Hi! My name is Shawn E Samudra and welcome to my personal page. I
              am a 21-year-old from Indonesia. Overall, I am quite a
              well-rounded person with a lot of interests and this website is to
              show my works, activities and hobbies. Please feel free to contact
              me if you share an interest, need any help or just want to chat.
              You can find my contacts on the contacts page or the footer below.
              Enjoy!
            </Typography>
            <Button
              variant="outlined"
              href="/contacts"
              className={classes.contactme}
            >
              Contact Me
            </Button>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.body}>
          {listItems.map((item, key) => (
            <Grid input xs={6}>
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="subtitle1">{item.description}</Typography>
              <Button variant="outlined" href={item.link}>
                Explore
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
