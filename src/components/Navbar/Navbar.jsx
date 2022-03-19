import React from 'react';

import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Grid, Typography, useScrollTrigger, Slide } from '@mui/material';
import useStyles from './styles';


const Navbar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();  

  return (
    <Slide in={!trigger} timeout={500} >
        <AppBar className={classes.appBar} color='primary' position= 'fixed'>
          <Toolbar className={classes.toolbar}>
            <Grid container justifyContent='space-between'>
                <Grid item  xs={4} md={3} component={Link} to="/store">
                    <Typography className={classes.toolbarItem} variant='body1'>Tienda</Typography>
                </Grid>
                <Grid item xs={4} md={3} component={Link} to="/home">
                    <Typography className={classes.toolbarItem} variant='body1'>LOGO</Typography>
                </Grid>
                <Grid item xs={4} md={3} component={Link} to="/contact">
                    <Typography className={classes.toolbarItem} variant='body1'>Contacto</Typography>
                </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    </Slide>
  )
}

export default Navbar