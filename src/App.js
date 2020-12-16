import React, { useState }from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const App = () => {

  const [theme, setTheme] = useState(true)
  const currentTheme = createMuiTheme()
  console.log(currentTheme)
  return (
    <ThemeProvider theme={currentTheme}>
      <h1>Hello World!!!</h1>
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