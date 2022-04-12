import React, { useEffect, useState } from 'react';
import MyCart from '../../services/Cart';

import { Grid, Typography, Card, CardContent, CardActions, Button, Icon } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import useStyles from './styles';

const Cart = () => {
    const classes = useStyles();

    const [totalPrice, setTotalPrice] = useState(0);

    const cart = new MyCart();
    const myCart = cart.getCart();

    const calculateTotalPrice = ()=>{
        if(myCart.length===0) return false;
        
        const totalPriceForProduct = myCart.map(product=>{
            const tpp = product.price * product.quantity;
            return tpp;
        }) 

        const total = totalPriceForProduct.reduce((prev, curr)=>prev+curr);
        setTotalPrice(total);
    }

    
    useEffect(()=>{
        calculateTotalPrice()
    }, [])


    return (
        <div style={{paddingTop: '120px'}} className={classes.container}>
            <Typography gutterBottom variant='h1' textAlign='center'>Tu Compra</Typography>
            <Grid container className={classes.gridContainer} spacing={4} justifyContent='center' alignItems='center'>
                {myCart.map((product, index)=>(
                    <Grid key={index} id={index}  item className={classes.gridItem} xs={11} sm={11} md={10}>
                        <Card className={classes.card}>
                            {/* <CardMedia className={classes.cardMedia}>
                                <img className={classes.cardMediaImage} src={product && product.image} alt="" />
                            </CardMedia> */}
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom className={classes.title} variant='body1'>nombre: {product.name}</Typography>
                                <Typography gutterBottom className={classes.subtitle} variant='body2'>precio: {product.price}$</Typography>
                                <Typography gutterBottom className={classes.subtitle} variant='body2'>cantidad: {product.quantity}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button>eliminar</Button>
                                <Button><Icon><AddCircleIcon /></Icon></Button>
                                <Button><Icon><RemoveCircleIcon /></Icon></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>    



            <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography className={classes.title} variant='h1'>precio total: { totalPrice }$</Typography>
                            </CardContent>
            </Card>
        </div>
      )


}

export default Cart;