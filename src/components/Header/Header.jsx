import React, { useState, useLayoutEffect } from 'react'

import heroVideo from '../../assets/videos/heroVideo.mp4';

import { Grid, Typography, Button, Fade } from '@mui/material';
import useStyles from './styles';


const Video = () => {
  const classes = useStyles();

  const [fadeIn, setFadeIn] = useState(false);


  useLayoutEffect(()=>{
     setFadeIn(true)
  }, [])




  return (
    <div className={classes.hero}>
      <div className={classes.videoContainer}>
        <video src={heroVideo} className={classes.video} muted autoPlay></video>
      </div>

      <Grid container justifyContent='center' className={classes.content}>
          <Grid item xs={10} md={6} lg={4}>
            <Fade in={fadeIn} timeout={2000}>
                <Typography className={classes.title} variant='h1'>
                  SLOGAN SLOGAN
                </Typography>
            </Fade>
            <Fade in={fadeIn} timeout={5000}>
                <Typography className={classes.title} variant='h2'>
                  Lorem ipsum dolor sit amet
                </Typography>
            </Fade>

          </Grid>
      </Grid>
    </div>
  )
}

export default Video