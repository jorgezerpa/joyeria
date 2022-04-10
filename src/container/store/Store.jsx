import React, { useEffect } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import Cart from '../../services/Cart';

import { products } from '../../assets';

import { CarouselStore } from '../../components';
import { Typography, Grid } from '@mui/material';
import useStyles from './styles';

const Store = () => {
  const classes = useStyles();
  const cart = new Cart();
      

  setTimeout(()=>{cart.updateQuantity('stud name', 'sum')}, 20000)

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
            <div id='watches'></div>
            <CarouselStore cart={cart}  title='Relojes' products={ products.watches } />  
      </AnimationOnScroll>
     
      <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
            <div id='bracelets'></div>
            <CarouselStore cart={cart}  title='Brazaletes' products={ products.bracelet } /> 
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
            <div id='rings'></div>
            <CarouselStore cart={cart}  title='Anillos' products={ products.rings } />        
      </AnimationOnScroll>
     
      <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
            <div id='necklaces'></div>
            <CarouselStore cart={cart} title='Collares' products={ products.necklace } />    
      </AnimationOnScroll>
     
      <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
            <div id='studs'></div>
            <CarouselStore cart={cart} title='Zarcillos' products={ products.stud } />
      </AnimationOnScroll>
     
  </div>
  )
}

export default Store