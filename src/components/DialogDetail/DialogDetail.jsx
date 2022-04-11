import React, { useEffect, useState } from 'react';

import { Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Icon } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import useStyles from './styles';


const DialogDetail = ({ open, handleClose, product, cart }) => {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(0); //quantity to show on dialog
    
    
    // if(product){
    //     const [quantity, setQuantity] = useState(product.quantity);
    // } 


    // useEffect(()=>{
    //     // setQuantity(10)
    //     const actualQuantity = cart.getItemQuantity(product.name);
    //     setQuantity(actualQuantity)
    // }, [open])
    

  return (
        <Dialog open={ open }
            fullWidth
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >

            <div className={classes.imageContainer}>
                <img className={classes.image} src={product!==undefined && product.image} alt="" />
            </div>

            <DialogTitle className={classes.title} id="alert-dialog-title">
                {product!==undefined && product.name } | {product!==undefined && product.price }
            </DialogTitle>
            <DialogContent className={classes.content}>
                <DialogContentText className={classes.contentText} id="alert-dialog-description">
                    <div>data: info</div>
                    <div>data: info</div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut provident, voluptate laboriosam hic porro similique perferendis? Dolorem, recusandae quam! Id, totam ad. Deserunt exercitationem ipsa a totam eum qui architecto.
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.actions}>
                <Button onClick={handleClose}>close</Button>
                <Button onClick={()=>cart.addToCart(product.name, product.price, 1 )} >Add To cart</Button>
                <Icon><AddCircleIcon onClick={()=>{cart.updateQuantity(product.name, product.price, 1, 'sum', setQuantity)}} /> </Icon>
                <Typography variant='body1'>{ quantity }</Typography>
                <Icon ><RemoveCircleIcon onClick={()=>{cart.updateQuantity(product.name, product.price, 1, 'less', setQuantity)}} /> </Icon>
            </DialogActions>
        </Dialog>
  )
}

export default DialogDetail