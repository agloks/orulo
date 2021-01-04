import { makeStyles, useTheme } from '@material-ui/core/styles'


const panelSlidersStyle = makeStyles((theme) => ({
  rootABC: {
    height: "100vh",
    background: "whitesmoke",
  },
  paperRoot: {
    // height: "20vh",
  },
  over: {
    overflow: "scroll",
    height: "200vh",
  },
  textField: {
    width: '60%',
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  rootGridCards: {
    padding: "5%",
    height: "400vh",
    overflow: "scroll",
  },
  sliderPreco: {
  },
  gridItem: {
    // marginLeft: theme.spacing(4),
    // marginRight: theme.spacing(4),
  }
}));


export { panelSlidersStyle, useTheme }