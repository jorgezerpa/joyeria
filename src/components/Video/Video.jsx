import React from 'react'

import heroVideo from '../../assets/videos/heroVideo.mp4';

import { Grid, Typography, Button } from '@mui/material';

import useStyles from './Styles';

const Video = () => {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <div className={classes.videoContainer}>
        <video src={heroVideo} className={classes.video} muted autoPlay></video>
      </div>

      <Grid container direction='column' justifyContent='center' alignItems='center' className={classes.content}>
          <Grid item xs={10} md={6} lg={4}>
            <Typography className={classes.title} variant='h4'>
              Somos Tu Mejor Elección
            </Typography>
          </Grid>
          <Grid item xs={1} md={1} lg={1}>
              <Button variant='contained' color='primary'>
                  Contactanos
              </Button>
          </Grid>
      </Grid>
    </div>
  )
}

export default Video