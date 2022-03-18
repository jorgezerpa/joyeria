import React from 'react';

import { Carousel3D } from '../../components';

import { Grid, Typography } from '@mui/material';

import useStyles from './styles';

const Features = () => {
    const classes = useStyles();

  return (
    <div className={classes.section}>
        <Grid container className={classes.container}>
            <Grid item className={classes.text}>
                <Typography variant='body1' fontStyle='italic'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat laudantium aliquam enim laboriosam voluptates minus nulla commodi earum iste, deleniti recusandae distinctio culpa perspiciatis quae impedit a eaque aut aspernatur.</Typography>
            </Grid>
            <Grid item className={classes.carouselContainer}>
                <Carousel3D />
            </Grid>
        </Grid>
    </div>
  )
}

export default Features