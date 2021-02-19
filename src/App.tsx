import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import BulletIcon from "@material-ui/icons/Stop";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";

import classes from "./App.module.sass";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.banner}>
        <img
          src="img/heft-logo-horse.svg"
          style={{ height: "120px", maxWidth: "100%", marginBottom: "15px" }}
        />
        <Typography variant="h4" className={classes.boldFont}>
          Example React App built with Heft
        </Typography>
      </Paper>
      <Paper square className={classes.pageContent}>
        <h1>Documentation of components</h1>
        <List component="nav" aria-label="contacts">
          <ListItem button key={"react"}>
            <ListItemIcon className={classes.desktopOnly}>
              <BulletIcon />
            </ListItemIcon>
            <ListItemText
              primary={`React`}
              secondary={
                <a href="https://reactjs.org/docs/getting-started.html">
                  https://reactjs.org/docs/getting-started.html
                </a>
              }
            />
          </ListItem>
          <ListItem button key={"material-ui"}>
            <ListItemIcon className={classes.desktopOnly}>
              <BulletIcon />
            </ListItemIcon>
            <ListItemText
              primary={`Material-UI`}
              secondary={
                <a href="https://material-ui.com/getting-started/usage/">
                  https://material-ui.com/getting-started/usage/
                </a>
              }
            />
          </ListItem>
          <ListItem button key={"Heft"}>
            <ListItemIcon className={classes.desktopOnly}>
              <BulletIcon />
            </ListItemIcon>
            <ListItemText
              primary={`Heft`}
              secondary={
                <a href="https://rushstack.io/pages/heft/overview/">
                  https://rushstack.io/pages/heft/overview/
                </a>
              }
            />
          </ListItem>
          <ListItem button key={"Webpack"}>
            <ListItemIcon className={classes.desktopOnly}>
              <BulletIcon />
            </ListItemIcon>
            <ListItemText
              primary={`Webpack`}
              secondary={
                <a href="https://webpack.js.org/configuration/">
                  https://webpack.js.org/configuration/
                </a>
              }
            />
          </ListItem>
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.boldFont}>
            Built with Heft
          </Typography>
          <div className={classes.grow} />
          <Button
            href="https://rushstack.io/pages/heft/overview/"
            color="inherit"
            className={classes.desktopOnly}
          >
            Visit Rushstack.io for More Info
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
