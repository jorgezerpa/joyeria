import React from "react";

import { Header, Features } from './container';

        //material-ui setup
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import theme from './assets/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
          <div className="App">
              <CssBaseline />
              <Header />
              <Features />
          </div>
    </ThemeProvider>
  );
}

export default App;
