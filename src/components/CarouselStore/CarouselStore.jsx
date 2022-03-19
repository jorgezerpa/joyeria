import React, { useState, useEffect } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { images } from '../../assets';
import { Typography } from '@mui/material';

import useStyles from './styles';

const CarouselStore = ({ title, products }) => {
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
            setSliderCellWidth(40)
        }
    }, [windowWidth])



  return (
        <div className={classes.container}>
        <Typography variant='h3' gutterBottom margin={2}>{ title }</Typography>

            <Carousel
                width='100%'
                centerMode={true}
                centerSlidePercentage= {sliderCellWidth}
            >
                { products.map((product, key) =>(
                    <div key={key}>   
                        <img src={product.image} />
                        <p className="legend"> { product.name } | { product.price }</p>
                    </div>
                ))}
            </Carousel>

        </div>
  )
}

export default CarouselStore