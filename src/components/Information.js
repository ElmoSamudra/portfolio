import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import SchoolIcon from "@material-ui/icons/School";
import ExploreIcon from "@material-ui/icons/Explore";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

import MidBreadcrumb from "../components/MidBreadcrumb";
import Explore from "../components/Explore";
import Background from "../components/Background";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "3%",
    textAlign: "center",
    backgroundColor: "white",
  },
  tab: {
    backgroundColor: "white",
    justifyContent: "center",
  },
}));

export default function Information() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Hidden smDown>
      <Grid item xs={12} className={classes.body}>
        <AppBar
          position="static"
          color="default"
          elevation="false"
          style={{ background: "white" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
            centered
          >
            <Tab label="Background" icon={<SchoolIcon />} {...a11yProps(0)} />
            <Tab label="Explore" icon={<ExploreIcon />} {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel
            value={value}
            index={0}
            dir={theme.direction}
            className={classes.tab}
          >
            <Background />
          </TabPanel>
          <TabPanel
            value={value}
            index={1}
            dir={theme.direction}
            className={classes.tab}
          >
            <Explore />
          </TabPanel>
        </SwipeableViews>
      </Grid>
    </Hidden>
  );
}
