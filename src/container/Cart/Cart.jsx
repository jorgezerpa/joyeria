import React, { useEffect, useState } from 'react';
import MyCart from '../../services/Cart';

import { Grid, Typography, Card, CardContent, CardActions, Button, Icon } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import useStyles from './styles';

const Cart = () => {
    const classes = useStyles();

    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(0)
    const [toggler, setToggler] = useState(false) //for call useEffect and rerender page on each change
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
        if(myCart) calculateTotalPrice()
    }, [toggler])

    
    if(myCart.length===0 || !myCart){
        return (
            <div style={{paddingTop: '200px'}}>
                <Typography gutterBottom variant='h1' textAlign='center'>Tu Compra</Typography>
                <Typography variant='h2' textAlign='center'>Aún no has comprado nada, ¡QUÉ ESPERAS!</Typography>
            </div>
        )
    }

    return (
        <div style={{paddingTop: '120px'}} className={classes.container}>
            <Typography gutterBottom variant='h1' textAlign='center'>Tu Compra</Typography>
            <Grid container className={classes.gridContainer} spacing={4} justifyContent='center' alignItems='center'>
                {myCart.map((product, index)=>{
                    return <Grid key={index} id={index}  item className={classes.gridItem} xs={11} sm={11} md={10}>
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
                                <Button onClick={(e)=>{
                                    cart.removeFromCart(product.name)
                                    setToggler(!toggler)
                                    }}>eliminar</Button>
                                <Button onClick={()=>{
                                    cart.updateQuantity(product.name, product.price, product.quantity, 'sum', setQuantity);
                                    setToggler(!toggler)
                                }}><Icon><AddCircleIcon /></Icon></Button>
                                <Button onClick={
                                    ()=>{cart.updateQuantity(product.name, product.price, product.quantity, 'less', setQuantity);
                                    setToggler(!toggler)
                                    }}><Icon><RemoveCircleIcon /></Icon></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                })}
            </Grid>    


            {myCart.length>0 &&
            <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                 <Typography className={classes.title} variant='h1'>precio total: { totalPrice }$</Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={()=>{cart.clearCart(); window.location.reload()}}>Limpiar Carrito</Button>
                            </CardActions>
            </Card>
            }
        </div>
      )


}

export default Cart;