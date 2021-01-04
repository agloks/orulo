import React, { useRef, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Slider from '@material-ui/core/Slider';
// import Typography from '@material-ui/core/Typography';

import { panelSlidersStyle, useTheme } from "../assets/styles/components/panelSliders"
import OruloAPI from "../libs/oruloAPI"
// import SliderData from "../assets/data/slider"
import CustomCard from "./customCard"
import HandleStorage from '../libs/handleStorage';

import { withStyles } from '@material-ui/core/styles'

export default function PanelSlider() {
  const classes = panelSlidersStyle();
  const [buildings, setBuildings] = React.useState(false);
  const storage = HandleStorage.getStorage()
  const isInitialMount = useRef(true);
  const oruloAPI = new OruloAPI();

  useEffect(() => {
    if (isInitialMount.current) {
      if(storage["favorites"])
        setBuildings(storage["favorites"])
      isInitialMount.current = false;
    } else {
      // oruloAPI.showList().then((s) => setBuildings(s))
    }
  });

  return (
    <div className={classes.rootABC}>
      { 
      !storage["user"] ?
      <h1 style={{color: 'black'}}>Necessario estar logado para ter acesso a favoritos</h1>
      :
      <Grid container className={classes.rootGridCards}>
          {
            buildings &&
            buildings.map((item) => {
              return (
              <Grid item xs={12} sm={4} className={classes.itemGridCards}>
                <CustomCard build={item}/>
              </Grid> 
              )
            })
          }
      </Grid> 
      }
    </div>
  );
}