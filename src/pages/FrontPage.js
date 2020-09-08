import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

// components
import MidBreadcrumb from "../components/MidBreadcrumb";

//images
import mainImage from "../images/workDesk.png";
import latestWork from "../images/latestWork.png";
import miscellaneous from "../images/miscellaneous.png";

const listItems = [
  {
    title: "Latest Work",
    photo: latestWork,
    description: "Display of my latest endeavours.",
    link: "/projects",
  },
  {
    title: "Miscellaneous",
    photo: miscellaneous,
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
    padding: "5%",
  },
  title: {
    padding: "0% 3% 0%",
    textAlign: "left",
    backgroundColor: "white",
  },
  intro: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "3%",
    textAlign: "left",
  },
  introText: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10% 5% 0% 10%",
    textAlign: "left",
  },
  introTextSmall: {
    marginLeft: "auto",
    marginRight: "auto",
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
  photo: {
    maxWidth: "50%",
  },
}));

function Age() {
  var dt = new Date();
  return dt.getYear() - 99; //99 was the year I was born
}

export default function FrontPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        {/* Welcome */}
        <Grid input xs={12} className={classes.title}>
          <Hidden smDown>
            <Typography variant="h1">Welcome</Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant="h2">Welcome</Typography>
          </Hidden>
          <Typography variant="h5">
            Please note that this website is still under construction. Some
            features may not be working.
          </Typography>
        </Grid>

        {/* Intro */}
        <Grid container item xs={12} className={classes.intro}>
          <Hidden smDown>
            <Grid input xs={4}>
              <img src={mainImage} alt="main" className={classes.image} />
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid input xs={8} className={classes.introText}>
              <Typography variant="h2">Introduction</Typography>
              <Typography variant="body1" className={classes.grey}>
                Hi! My name is Shawn E Samudra and welcome to my personal page.
                I am a {Age()}-year-old from Indonesia. Overall, I am quite a
                well-rounded person with a lot of interests and this website is
                to show my works, activities and hobbies. Please feel free to
                contact me if you share an interest, need any help or just want
                to chat. You can find my contacts on the contacts page or the
                footer below. Enjoy!
              </Typography>
              <Button
                variant="outlined"
                href="/contacts"
                className={classes.contactme}
              >
                Contact Me
              </Button>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid input xs={8} className={classes.introTextSmall}>
              <Typography variant="h4">Introduction</Typography>
              <Typography variant="body1" className={classes.grey}>
                Hi! My name is Shawn E Samudra and welcome to my personal page.
                I am a {Age()}-year-old from Indonesia. Overall, I am quite a
                well-rounded person with a lot of interests and this website is
                to show my works, activities and hobbies. Please feel free to
                contact me if you share an interest, need any help or just want
                to chat. You can find my contacts on the contacts page or the
                footer below. Enjoy!
              </Typography>
              <Button
                variant="outlined"
                href="/contacts"
                className={classes.contactme}
              >
                Contact Me
              </Button>
            </Grid>
          </Hidden>
        </Grid>

        {/* Picture Items */}
        <Hidden smDown>
          <Grid container item xs={12} className={classes.body}>
            {listItems.map((item, key) => (
              <Grid input xs={6}>
                <img
                  src={item.photo}
                  alt={item.title}
                  className={classes.photo}
                />
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="subtitle1">{item.description}</Typography>
                <Button variant="outlined" href={item.link}>
                  Explore
                </Button>
              </Grid>
            ))}
            <MidBreadcrumb />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
