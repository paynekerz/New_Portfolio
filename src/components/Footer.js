import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: "200px"
    },
    appBar: {
          top: "auto",
          bottom: 0,
          backgroundColor: "#000000"
    },
  }));

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
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

export default function Footer() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
        <AppBar className={classes.appBar} position="fixed">
          <Tabs centered>
            <TabPanel index={0}>
              <Tab className= "link2"
                edge="start"
                label="GitHub"
                icon={
                  <img src="images/icons/github.png" alt="github"/>
                }
                onClick={() => window.open("https://github.com/paynekerz")}/>
            </TabPanel>
            <TabPanel index={1}>
              <Tab className= "link2" label="LinkedIn"
              icon={
                <img src="images/icons/linkedin.png" alt="linkedin"/>
              }
              onClick={() => window.open("https://www.linkedin.com/in/paynekerz/")}/>
            </TabPanel>
            <TabPanel index={2}>
              <Tab className= "link2" label="Email"
              icon={
                <img src="images/icons/email.png" alt="email"/>
              }
              onClick={() => window.open("mailto:paynekerz@gmail.com")}/>
            </TabPanel>
          </Tabs>
        </AppBar>
      </div>
    )
}