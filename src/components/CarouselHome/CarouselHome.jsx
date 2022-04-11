import React, { useState, useEffect } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { categories } from '../../assets';
import { Typography } from '@mui/material';

import useStyles from './styles';



const CarouselHome = ({title, subtitle}) => {
    const classes = useStyles();

    const [sliderCellWidth, setSliderCellWidth] = useState(33);
    const [windowWidth , setwindowWidth ] = useState(window.innerWidth);
    const [showArrows , setShowArrows ] = useState(true);
     
    window.addEventListener('resize', ()=>{
        setwindowWidth(window.innerWidth);
        if(windowWidth<600) setShowArrows(false); else setShowArrows(true);
    })

    useEffect(()=>{
        if(windowWidth<600){
            setSliderCellWidth(90)
        }else{
            setSliderCellWidth(33)
        };
        if(windowWidth<600) setShowArrows(false); else setShowArrows(true)
    }, [windowWidth])



    const handleCategorieClick = (link) => {
        // window.location.href = "http://gemesajoyeria.com/store"+link
        window.location.href = "http://localhost:3000/store"+link
    }

  return (
        <div className={classes.container}>
        <Typography variant='h3' gutterBottom margin={2}>{ title }</Typography>
        <Typography variant='body1' gutterBottom margin={2}>{ subtitle }</Typography>

            <Carousel
                width='100%'
                centerMode={true}
                centerSlidePercentage= {sliderCellWidth}
                showThumbs = {false}
                className={classes.carousel}
                showArrows={ showArrows }
                showStatus={false}
                showIndicators={false}
            >
                { categories.map((categorie, key) =>(
                    <div className={classes.slide} key={key} onClick={()=>{handleCategorieClick(categorie.link)}}>   
                        <img className={classes.CarouselHomeImage} alt="" src={categorie.image} />
                        <p>{ categorie.name }</p>
                        <div className='underline'></div>
                    </div>
                ))}
            </Carousel>

        </div>
  )
}

export default CarouselHome