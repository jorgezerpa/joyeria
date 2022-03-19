import React from 'react';

import heroVideo from '../../assets/videos/heroVideo.mp4';

import { Grid, Typography } from '@mui/material';
import useStyles from './styles';

const Hero = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.hero}>
      <div className={classes.videoContainer}>
        <video src={heroVideo} className={classes.video}></video>
      </div>

      <Grid container justifyContent='center' className={classes.content}>
          <Grid item xs={10} md={6} lg={4}>
            <Typography className={classes.title} variant='h1'>
              Lorem, ipsum 
            </Typography>
            <Typography className={classes.subtitle} variant='h4'>
              dolor sit amet consectetur 
            </Typography>
          </Grid>
      </Grid>
    </div>
  )
}

export default Hero
