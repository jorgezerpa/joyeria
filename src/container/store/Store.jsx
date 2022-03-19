import React from 'react';

import { products } from '../../assets';


import { CarouselStore } from '../../components';
import { Typography, Grid } from '@mui/material';
import useStyles from './styles';

const Store = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container justifyContent='center' alignItems='center' direction='column'>
            <Grid item>
              <Typography variant='h1'>Store</Typography>
            </Grid>
            <Grid item>
              <Typography variant='h1'>lorem Ipsum</Typography>
            </Grid>
      </Grid>


                        {/* PRODUCTS  */}
      <CarouselStore title='Relojes' products={ products.watches } />
      <CarouselStore title='Brazaletes' products={ products.bracelet } />
      <CarouselStore title='Anillos' products={ products.rings } />
      <CarouselStore title='Collares' products={ products.necklace } />
      <CarouselStore title='Zarcillos' products={ products.stud } />

    </div>
  )
}

export default Store