import React, { useEffect } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

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
      <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
            <CarouselStore  title='Relojes' products={ products.watches } />      
      </AnimationOnScroll>
     
      <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
            <CarouselStore  title='Brazaletes' products={ products.bracelet } /> 
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
            <CarouselStore  title='Anillos' products={ products.rings } />        
      </AnimationOnScroll>
     
      <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
            <CarouselStore  title='Collares' products={ products.necklace } />    
      </AnimationOnScroll>
     
      <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
            <CarouselStore  title='Zarcillos' products={ products.stud } />
      </AnimationOnScroll>
     
  </div>
  )
}

export default Store