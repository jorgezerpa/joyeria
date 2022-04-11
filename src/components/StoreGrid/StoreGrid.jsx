import React, {useState} from 'react';

import { Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';

import { DialogDetail } from '../../components';
import Cart from '../../services/Cart';

import useStyles from './styles';

const StoreGrid = ({ products }) => {
    const cart = new Cart();
    
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null); 



    //handle Dialog
   const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


  return (
    <div className={classes.container}>
        <Grid container className={classes.gridContainer} spacing={4} justifyContent='center' alignItems='center'>
            {products.map((product, index)=>(
                <Grid key={index} id={index}  item className={classes.gridItem} xs={11} sm={6} md={4}
                    onClick={(e)=>{
                        // console.log(e.currentTarget.children[1].innerHTML)
                        console.log(e.currentTarget.id)
                        setId(e.currentTarget.id);
                        handleClickOpen();
                    }}
                >
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

        <DialogDetail cart={cart} open={open} handleClose={handleClose} product={products[parseInt(id)]} image={products[1].image} />

    </div>
  )
}

export default StoreGrid