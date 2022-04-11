import React from 'react';

import { Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';

import useStyles from './styles';

const StoreGrid = ({ products }) => {
    const classes = useStyles();

  return (
    <div className={classes.container}>
        <Grid container className={classes.gridContainer} spacing={4} justifyContent='center' alignItems='center'>
            {products.map((product, index)=>(
                <Grid key={index} item className={classes.gridItem} xs={11} sm={6} md={4} >
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia}>
                            <img className={classes.cardMediaImage} src={product.image} alt="" />
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.title} variant='body1'>{product.name}</Typography>
                            <Typography className={classes.subtitle} variant='body2'>{product.price}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default StoreGrid