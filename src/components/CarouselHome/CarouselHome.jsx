import React, { useState, useEffect } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { images } from '../../assets';
import { Typography } from '@mui/material';

import useStyles from './styles';

const CarouselHome = () => {
    const classes = useStyles();

    const [sliderCellWidth, setSliderCellWidth] = useState(33);
    const [windowWidth , setwindowWidth ] = useState(window.innerWidth);
     
    window.addEventListener('resize', ()=>{
        setwindowWidth(window.innerWidth);
    })

    useEffect(()=>{
        if(windowWidth<600){
            setSliderCellWidth(80)
        }else{
            setSliderCellWidth(33)
        }
    }, [windowWidth])



  return (
        <div className={classes.container}>
        <Typography variant='h3' gutterBottom margin={2}>Our Products</Typography>

            <Carousel
                width='100%'
                centerMode={true}
                centerSlidePercentage= {sliderCellWidth}
            >
                { images.map((image, key) =>(
                    <div key={key}>   
                        <img src={image} />
                        <p className="legend">Legend { key }</p>
                    </div>
                ))}
            </Carousel>

        </div>
  )
}

export default CarouselHome