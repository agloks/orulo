import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
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
import OruloAPI from "../libs/oruloAPI"


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

  // const oruloAPI = new OruloAPI();
  // oruloAPI.showList().then((s) => console.log(s))

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/">
          <div className={classes.root}>
            <CustomDrawer hook = {hook}/>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
            </main>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}