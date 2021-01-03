import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import {
  Link
} from "react-router-dom";

import { customDrawer, useTheme } from "../assets/styles/components/customDrawer"
import logo from "../assets/img/orulo_logo.png"
import HandleStorage from '../libs/handleStorage';

export default function CustomDrawer({hook}) {
  const classes = customDrawer();
  const theme = useTheme();
  const user = HandleStorage.getStorage()["user"]
  console.log(user)

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: hook.open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={hook.handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, hook.open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Órulo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={hook.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Grid 
          container
          direction="column"
          justify="space-between"
          spacing={1}
          className={classes.gridContainer}
          >
          <Grid item xs={2} className={classes.gridDrawerHeader}>
            <div className={classes.drawerHeader}>
              <img src={logo} alt="Logo" className={classes.logo} />
              <IconButton onClick={hook.handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Divider className={classes.divider}/>
            <List>
              {['Home', 'Favorites'].map((text, index) => (
                index % 2 === 0 ?
                <Link to="/">
                  <ListItem button key={text}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link> 
                :
                <Link to="/favorites">
                <ListItem button key={text}>
                  <ListItemIcon><FavoriteIcon /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link> 
              ))}
            </List>
          </Grid>
          <Grid item xs={4} className={classes.gridDrawerFooter}>
            <List className={classes.gridDrawerFooterList}>
              <Divider className={classes.divider}/>
              {['Perfil', 'Logout'].map((text, index) => (
                index % 2 === 0 ? 
                <Link to="/login">
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
                : 
                <Link to="/logout">
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
}