// on App.js:
// import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
// import theme from './assets/theme';
// responsiveFontSizes(theme);

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  
  palette: {
    primary: {
      main: 'rgba(0,0,0,.5)'
    },
    // secondary: {
    //   main: ''
    // }
  },

  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
      ],
    },


    breakpoints: {

    }
})


        //fonts responsivness
theme.typography.h1={
  fontSize: '2.2rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '12vw',
  },
};
theme.typography.h2={
  fontSize: '2rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.8vw',
  },
};
theme.typography.h3={
  fontSize: '1.9rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.6vw',
  },
};
theme.typography.h4={
  fontSize: '1.8rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.5vw',
  },
};
theme.typography.h5={
  fontSize: '1.7rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.4vw',
  },
};
theme.typography.h6={
  fontSize: '1.5rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.3vw',
  },
};
theme.typography.subtitle1={
  fontSize: '1.4rem',
};
theme.typography.subtitle2={
  fontSize: '1.4rem',
};
theme.typography.body1={
  fontSize: '1rem',
};
theme.typography.body2={
  fontSize: '1rem',
};
theme.typography.button={
  fontSize: '1rem',
};
theme.typography.caption={
  fontSize: '.9rem',
};
theme.typography.overline={
  fontSize: '1rem',
};


export default theme;