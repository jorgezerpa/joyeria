import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer } from './Sections';
import { Navbar } from "./components";
import { Home, Store, Contact } from './container';

        //material-ui setup
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import theme from './assets/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />        
                <Route path="/home" element={<Home />} />        
                <Route path="/store" element={<Store />} />        
                <Route path="/contact" element={<Contact />} />        
              </Routes>
              <Footer />
            </Router>
          </div>
    </ThemeProvider>
  );
}

export default App;
