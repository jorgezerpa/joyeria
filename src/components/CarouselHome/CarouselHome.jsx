import React, { useState, useEffect } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { categories } from '../../assets';
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



    const handleCategorieClick = (link) => {
        // window.location.href = "http://gemesajoyeria.com/store"+link
        window.location.href = "http://localhost:3000/store"+link
    }

  return (
        <div className={classes.container}>
        <Typography variant='h3' gutterBottom margin={2}>Categorías</Typography>

            <Carousel
                width='100%'
                centerMode={true}
                centerSlidePercentage= {sliderCellWidth}
            >
                { categories.map((categorie, key) =>(
                    <div key={key} onClick={()=>{handleCategorieClick(categorie.link)}}>   
                        <img className={classes.CarouselHomeImage} alt="" src={categorie.image} />
                        <p className="legend">{ categorie.name }</p>
                    </div>
                ))}
            </Carousel>

        </div>
  )
}

export default CarouselHome