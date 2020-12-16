import React, { useState }from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Typography from "@material-ui/core/Typography";
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {

  const [theme, setTheme] = useState(true)
  const currentTheme = createMuiTheme(theme ? light : dark)
  const icon = theme ? <Brightness4Icon /> : <BrightnessHighIcon />
  
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <IconButton onClick={() => setTheme(!theme)}>
        { icon }
      </IconButton>
      <Typography>
        {theme ? <h2>Lights On</h2> : <h3>Lights Out</h3>}
      </Typography>
    </ThemeProvider>
  )
}

export default App

export const light = {
  palette: {
    type: "light"
  }
};
export const dark = {
  palette: {
    type: "dark"
  }
};