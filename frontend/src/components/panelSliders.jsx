import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { panelSlidersStyle, useTheme } from "../assets/styles/components/panelSliders"

export default function PanelSlider({hook}) {
  const classes = panelSlidersStyle();
  const theme = useTheme();

  return (
    <>
      <Paper >
        <Grid container className={classes.paperRoot}>

        </Grid>
      </Paper>
    </>
  );
}