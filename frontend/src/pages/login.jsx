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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';

export default function Login() {
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

  const handleSubmit = (event) => {
    event.preventDefault()

    const auth = new AuthService()
    auth.login(email, password).then((s) => console.log(s))
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
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      </main>
    </div>
  );
}