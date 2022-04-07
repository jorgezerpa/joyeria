import React, { useState, useEffect } from 'react';

import { Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './styles.css';

const Carousel3D = ({ images }) => {

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  
  
  const [cellWidth, setCellWidth] = useState(260);
  const [cellHeight, setCellHeight] = useState(200);
  const [tz, setTz] = useState( Math.round(cellWidth/ 2 / Math.tan(Math.PI / images.length)) +10 ); //tz = cellWidth /2 / math.tan(PI/n_cells)
  const [rotation, setRotation] = useState(0); 
  const [rotationY, setRotationY] = useState(360/images.length); // 360deg/n_cells
  
  
  
  window.addEventListener('resize',()=>{
    setWindowSize(window.innerWidth);

  })

  useEffect(()=>{
    if(windowSize < 500){
      setCellWidth(200)
      setCellHeight(160)
    }else{
      setCellWidth(260)
      setCellHeight(200)
    }
  }, [windowSize]);



  return (
    <div className='container'>
        <Typography variant='h3'>Nuestros Mejores Productos</Typography>
        <div className="scene" style={{width:`${cellWidth}px`, height:`${cellHeight}px` }}>
          <div className="carousel" style={{transform:`rotateY(${rotation}deg)`}}>
              {images.map((image, key)=>(
                <div key={key} className="carousel__cell"
                style={{transform:`rotateY(${rotationY*key}deg) translateZ(${tz}px)`}}>
                  <img src={image} alt="" />
                  </div>
                ))}
              
          </div>
        </div>

        <div className='controls'>
          <IconButton onClick={()=>setRotation((prev)=>prev+rotationY)}><ArrowBackIosIcon/></IconButton>
          <IconButton onClick={()=>setRotation((prev)=>prev-rotationY)}><ArrowForwardIosIcon/></IconButton>
        </div>
    </div>
  )   
}   

export default Carousel3D