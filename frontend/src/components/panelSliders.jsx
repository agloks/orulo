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
import CustomCard from "../components/customCard"

import { withStyles } from '@material-ui/core/styles'

export default function PanelSlider() {
  const classes = panelSlidersStyle();
  const [city, setCity] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [buildings, setBuildings] = React.useState(false);
  const isInitialMount = useRef(true);
  const oruloAPI = new OruloAPI();

  useEffect(() => {
    if (isInitialMount.current) {
      oruloAPI.showList().then((s) => setBuildings(s.data.buildings))
      isInitialMount.current = false;
    } else {
      // oruloAPI.showList().then((s) => setBuildings(s))
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault()

// const oruloAPI = new OruloAPI();
  // oruloAPI.showList().then((s) => console.log(s))
  }

  return (
    <div className={classes.rootABC}>
      <Paper >
        <form noValidate onSubmit={handleSubmit}>
          <Grid container   justify="center" alignItems="center" spacing={1} className={classes.paperRoot}>
            {/* ROW ONE */}
            <Grid item xs={12} sm={10} classes={classes.gridItem}>
                <TextField
                id="standard-full-width"
                label="Cidade"
                className = {classes.textField}
                placeholder="Porto Alegre"
                fullWidth
                margin="normal"
                onChange={event => setCity(event.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={2} classes={classes.gridItem}>
                <TextField
                id="standard-full-width"
                label="Estado"
                className = {classes.textField}
                placeholder="RS"
                helperText="Apenas siglas do estado!"
                margin="normal"
                onChange={event => setState(event.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            > 
              Pesquisar 
            </Button>
          </Grid>
        </form>
      </Paper>
      <Grid container className={classes.rootGridCards}>
          {
            buildings &&
            buildings.map((item) => {
              return (
              <Grid item xs={12} sm={3}>
                <CustomCard build={item}/>
              </Grid> 
              )
            })
          }
      </Grid>
    </div>
  );
}