import React from 'react';

import { AppBar, Toolbar, Grid, Typography } from '@mui/material';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} color='transparent'>
      <Toolbar className={classes.toolbar}>
        <Grid container justifyContent='space-between'>
            <Grid item  xs={4} md={3}>
                <Typography className={classes.toolbarItem} variant='body1'>Tienda</Typography>
            </Grid>
            <Grid item xs={4} md={3}>
                <Typography className={classes.toolbarItem} variant='body1'>LOGO</Typography>
            </Grid>
            <Grid item xs={4} md={3}>
                <Typography className={classes.toolbarItem} variant='body1'>Contacto</Typography>
            </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar