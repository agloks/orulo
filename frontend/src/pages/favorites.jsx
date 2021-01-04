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
  const [email, setEmail] = React.useState(false);
  const [password, setPassword] = React.useState(false);

  const hook = {
    open: open,
    handleDrawerOpen: () => {
      setOpen(true);
    },
    handleDrawerClose: () => {
      setOpen(false);
    },
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault()

  //   const auth = new AuthService()
  //   auth.login(email, password).then((s) => console.log(s))
  // } 

  return (
    <div className={classes.root}>
      <CustomDrawer hook = {hook}/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Favorites
          </Typography>
        </div>
      </Container>
      </main>
    </div>
  );
}