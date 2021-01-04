import React from 'react';
import clsx from 'clsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { homeStyle } from "../assets/styles/pages/home"
import CustomDrawer from "../components/customDrawer"
import Login from "./login"
import Signup from "./signup"
import Favorites from "./favorites"

export default function Home() {
  const classes = homeStyle();
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
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/">
          <div className={classes.root}>
            <CustomDrawer hook={hook} usePanelSlider={true} />
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            {/* <div className={classes.drawerHeader} /> */}
            </main>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}