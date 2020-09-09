import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

// images
import mainImage from "../images/workDesk.png";

function Age() {
  var dt = new Date();
  return dt.getYear() - 99; //99 was the year I was born
}

const useStyles = makeStyles((theme) => ({
  intro: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "3%",
    textAlign: "left",
  },
  grey: {
    color: "grey",
  },
  image: {
    width: "100%",
    padding: "5%",
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
  contactme: {
    marginTop: "2%",
  },
}));

export default function Intro() {
  const classes = useStyles();
  return (
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
            Hi! My name is Shawn E Samudra and welcome to my personal page. I am
            a {Age()}-year-old from Indonesia. Overall, I am quite a
            well-rounded person with a lot of interests and this website is to
            show my works, activities and hobbies. Please feel free to contact
            me if you share an interest, need any help or just want to chat. You
            can find my contacts on the contacts page or the footer below.
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
      </Hidden>
      <Hidden mdUp>
        <Grid input xs={8} className={classes.introTextSmall}>
          <Typography variant="h4">Introduction</Typography>
          <Typography variant="body1" className={classes.grey}>
            Hi! My name is Shawn E Samudra and welcome to my personal page. I am
            a {Age()}-year-old from Indonesia. Overall, I am quite a
            well-rounded person with a lot of interests and this website is to
            show my works, activities and hobbies. Please feel free to contact
            me if you share an interest, need any help or just want to chat. You
            can find my contacts on the contacts page or the footer below.
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
      </Hidden>
    </Grid>
  );
}
