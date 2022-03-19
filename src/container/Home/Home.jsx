import React from 'react';

import { Features, CarouselHome, Video, Header } from '../../components'; 


const Home = () => {

  return (
    <div style={{overflowX: 'hidden'}}>
        <Header />
        <Features />
        <CarouselHome />
        <Video />
    </div>
  )
}

export default Home