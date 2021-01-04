import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import { loginStyle } from "../assets/styles/pages/login"
import CustomDrawer from "../components/customDrawer"
import AuthService from "../libs/authService"

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';

export default function Signup() {
  const classes = loginStyle();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(false);
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

  const handleSubmit = (event) => {
    event.preventDefault()

    const auth = new AuthService()
    auth.signup(name, email, password)
    .then((s) => {
      alert("Conta criada com sucesso")
      window.location.href = "/"
    })
    .catch((e) => {
      alert("Falha ao criar a conta, certifique se digitou os campos corretamente")
    })
  } 

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
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={event => setName(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={event => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
            </Grid>
          </form>
        </div>
      </Container>
      </main>
    </div>
  );
}