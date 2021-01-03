import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import { homeStyle } from "../assets/styles/pages/home"
import CustomDrawer from "../components/customDrawer"
import AuthService from "../libs/authService"

export default function PersistentDrawerLeft() {
  const classes = homeStyle();
  const auth = new AuthService()
  const [open, setOpen] = React.useState(false);

  console.log(auth.signup("oi", "oi@gmail.com", "123").then((s) => console.log(s)))

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
      <CustomDrawer hook = {hook}/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          Hello Login
        </Typography>
      </main>
    </div>
  );
}