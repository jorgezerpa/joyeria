import React, { useState } from 'react';

import { Button } from '@mui/material';

import './styles.css';

const items = [0,1,2,3,4,5,6,7,8]

const Carousel3D = () => {
  const [cellWidth, setCellWidth] = useState(230);
  const [cellHeight, setCellHeight] = useState(200);
  const [tz, setTz] = useState( Math.round(cellWidth/ 2 / Math.tan(Math.PI / items.length)) ); //tz = cellWidth /2 / math.tan(PI/n_cells)
  const [rotation, setRotation] = useState(0); 
  const [rotationY, setRotationY] = useState(360/items.length); // 360deg/n_cells


  return (
    <div className='container'>
        <div className="scene" style={{width:`${cellWidth}px`, width:`${cellHeight}px` }}>
          <div className="carousel" style={{transform:`rotateY(${rotation}deg)`}}>
              {items.map((item, key)=>(
                <div key={key} className="carousel__cell"
                style={{transform:`rotateY(${rotationY*key}deg) translateZ(${tz}px)`}}
                >{key}</div>
                ))}
              
          </div>
        </div>

        <Button onClick={()=>setRotation((prev)=>prev-rotationY)}>back</Button>
        <Button onClick={()=>setRotation((prev)=>prev+rotationY)}>next</Button>
    </div>
  )   
}   

export default Carousel3D