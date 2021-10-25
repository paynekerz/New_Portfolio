import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    background: {
        background: "#000000",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    links: {
        textDecoration: "none",
        color: "white",
    }
  }));


export default function Navbar() {
    const classes = useStyles();



    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.background}>
          <Toolbar>
            <div>
              <img src={Logo} height="100" width="100"/>
            </div>
            <Typography variant="h4" className={classes.title}>
              Payne Kerz
            </Typography>
            <Link to="/" className={classes.links}>
                <Button color="inherit">About Me</Button>
            </Link>
            <Link to="/Portfolio" className={classes.links}>
                <Button color="inherit">Portfolio</Button>
            </Link>
            <Link to="Resume" className={classes.links}>
                <Button color="inherit">Resume</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
}