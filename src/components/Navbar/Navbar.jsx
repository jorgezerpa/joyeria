import React from 'react';

import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Grid, Typography, useScrollTrigger, Slide, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import useStyles from './styles';


const Navbar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();  

  return (
    <Slide in={!trigger} timeout={500} >
        <AppBar className={classes.appBar} color='menu' position= 'fixed'>
          <Toolbar className={classes.toolbar}>
            <Grid container justifyContent='space-between' alignItems='center'>
                <Grid item  xs={3} md={3} >
                    <Typography component={Link} to="/store" className={classes.toolbarItem} variant='body1'>Tienda</Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Typography  component={Link} to="/home" className={classes.toolbarItem} variant='body1'>LOGO</Typography>
                </Grid>
                <Grid item xs={3} md={3} >
                    <Typography component={Link} to="/contact" className={classes.toolbarItem} variant='body1'>Contacto</Typography>
                </Grid>
                <Grid item xs={3} md={3} >
                    <IconButton className={classes.toolbarItem}>
                          <WhatsAppIcon color='secondary' />                      
                    </IconButton>
                </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    </Slide>
  )
}

export default Navbar