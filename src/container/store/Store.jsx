import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { products } from '../../assets';

import { StoreGrid } from '../../components';

const Store = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box paddingTop='100px' zIndex={1000} sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Men" value="2" />
            <Tab label="Women" value="3" />
            <Tab label="Bands" value="4" />
          </TabList>
        </Box>

        <TabPanel value="1">
              <StoreGrid products={products.watches}  />
        </TabPanel>
        <TabPanel value="2">
              <StoreGrid products={products.necklace}  />
        </TabPanel>
        <TabPanel value="3">
              <StoreGrid products={products.bracelet}  />
        </TabPanel>
        <TabPanel value="4">
              <StoreGrid products={products.rings}  />
        </TabPanel>
      </TabContext>
    </Box>
  );
}


export default Store





















// import React, { useEffect } from 'react';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
// import "animate.css/animate.min.css";

// import Cart from '../../services/Cart';

// import { products } from '../../assets';

// import { CarouselStore } from '../../components';
// import { Typography, Grid } from '@mui/material';
// import useStyles from './styles';

// const Store = () => {
//   const classes = useStyles();
//   const cart = new Cart();
      

//   setTimeout(()=>{cart.updateQuantity('stud name', 'sum')}, 20000)

//   return (
//     <div className={classes.container}>
//       <Grid container justifyContent='center' alignItems='center' direction='column'>
//             <Grid item>
//               <Typography variant='h1'>Store</Typography>
//             </Grid>
//             <Grid item>
//               <Typography variant='h1'>lorem Ipsum</Typography>
//             </Grid>
//       </Grid>


//                         {/* PRODUCTS  */}
//       <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
//             <div id='watches'></div>
//             <CarouselStore cart={cart}  title='Relojes' products={ products.watches } />  
//       </AnimationOnScroll>
     
//       <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
//             <div id='bracelets'></div>
//             <CarouselStore cart={cart}  title='Brazaletes' products={ products.bracelet } /> 
//       </AnimationOnScroll>

//       <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
//             <div id='rings'></div>
//             <CarouselStore cart={cart}  title='Anillos' products={ products.rings } />        
//       </AnimationOnScroll>
     
//       <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
//             <div id='necklaces'></div>
//             <CarouselStore cart={cart} title='Collares' products={ products.necklace } />    
//       </AnimationOnScroll>
     
//       <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
//             <div id='studs'></div>
//             <CarouselStore cart={cart} title='Zarcillos' products={ products.stud } />
//       </AnimationOnScroll>
     
//   </div>
//   )
// }

// export default Store











































