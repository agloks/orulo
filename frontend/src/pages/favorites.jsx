import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import { loginStyle } from "../assets/styles/pages/login"
import CustomDrawer from "../components/customDrawer"
import AuthService from "../libs/authService"

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function Favorites() {
  const classes = loginStyle();
  const [open, setOpen] = React.useState(false);

  const hook = {
    open: open,
    handleDrawerOpen: () => {
      setOpen(true);
    },
    handleDrawerClose: () => {
      setOpen(false);
    },
  }


  return (
    <div className={classes.root}>
      <CustomDrawer hook = {hook} usePanelFavorites={true}/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <Container component="main" maxWidth="xs"> */}
        {/* <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Favorites
          </Typography>
        </div> */}
      {/* </Container> */}
      </main>
    </div>
  );
}