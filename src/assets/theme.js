// on App.js:
// import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
// import theme from './assets/theme';
// responsiveFontSizes(theme);

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  
  palette: {
    primary: {
      main: '#000'
    },
    menu: {
      main: 'rgba(255,255,255,1)'
    },
    secondary: {
      main: '#fff'
    }
  },

  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
      ],
    },


    breakpoints: {
        values:{
          xs: 0,
          sm: 500,
          md: 900,
          lg: 1200,
          xl: 1536,
        }
    }
})


        //fonts responsivness
theme.typography.h1={
  fontFamily: 'Montserrat, sans-serif',
  fontWeight:'800',
  fontSize: '2.2rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '9vw',
  },
};
theme.typography.h2={
  fontFamily: 'Montserrat, sans-serif',
  fontWeight:'400',
  fontSize: '2rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.2vw',
  },
};
theme.typography.h3={
  fontFamily: 'Montserrat, sans-serif',
  fontWeight:'400',
  fontSize: '1.9rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.6vw',
  },
};
theme.typography.h4={
  fontFamily: 'Montserrat, sans-serif',
  fontWeight:'400',
  fontSize: '1.8rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.5vw',
  },
};
theme.typography.h5={
  fontFamily: 'Montserrat, sans-serif',
  fontWeight:'400',
  fontSize: '1.7rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.4vw',
  },
};
theme.typography.h6={
  fontFamily: 'Montserrat, sans-serif',
  fontWeight:'400',
  fontSize: '1.5rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.3vw',
  },
};
theme.typography.subtitle1={
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '1.4rem',
};
theme.typography.subtitle2={
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '1.4rem',
};
theme.typography.body1={
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '1rem',
};
theme.typography.body2={
  fontFamily: 'Montserrat, sans-serif',
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