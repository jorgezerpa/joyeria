import React, { useState, useEffect } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { DialogDetail } from '../../components';

import { Typography } from '@mui/material';

import useStyles from './styles';


const CarouselStore = ({ title, products }) => {
    const classes = useStyles();

    const [sliderCellWidth, setSliderCellWidth] = useState(33);
    const [windowWidth , setwindowWidth ] = useState(window.innerWidth);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null); 
     
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



    //handle Dialog
    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


  return (
        <div className={classes.container}>
        <Typography variant='h3' gutterBottom margin={2}>{ title }</Typography>

            <Carousel
                width='100%'
                centerMode={true}
                centerSlidePercentage= {sliderCellWidth}
            >
                { products.map((product, key) =>(
                    <div id={key} key={key} onClick={(e)=>{
                        // console.log(e.currentTarget.children[1].innerHTML)
                        // console.log(e.target.id)
                        setId(e.target.id)
                        handleClickOpen()
                    }}>   
                        <img src={product.image} alt='' />
                        <p className="legend"> { product.name } | { product.price }</p>
                    </div>
                ))}
            </Carousel>                
   
            <DialogDetail open={open} handleClose={handleClose} product={products[parseInt(id)]} image={products[1].image} />
   
   
        </div>
  )
}

export default CarouselStore