import React from 'react';

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';


import useStyles from './styles';

const DialogDetail = ({ open, handleClose, image, product }) => {
    const classes = useStyles();

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
                    <div>data: info</div>
                    <div>data: info</div>
                    <div>data: info</div>
                    <div>data: info</div> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut provident, voluptate laboriosam hic porro similique perferendis? Dolorem, recusandae quam! Id, totam ad. Deserunt exercitationem ipsa a totam eum qui architecto.
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.actions}>
                <Button>Add To cart</Button>
                <Button onClick={handleClose}>close</Button>
            </DialogActions>
        </Dialog>
  )
}

export default DialogDetail