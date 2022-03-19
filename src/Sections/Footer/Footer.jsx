import React from 'react'

import { Grid, Typography, Icon } from '@mui/material';

import { rrss } from '../../assets';

import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container direction='column' justifyContent='center' alignItems='center' className={classes.container} >
        <Grid item>
          <Typography variant= 'h5'>brand name </Typography>
        </Grid>
        
        <Grid item>
            <Grid container justifyContent='center' gap={1} paddingTop='20px'>
              <Grid className={classes.rrssIconContainer} item>
                  <img className={classes.rrssIcon} src={rrss.facebookIcon} alt="" />
              </Grid>
              <Grid className={classes.rrssIconContainer} item>
                  <img className={classes.rrssIcon} src={rrss.instagramIcon} alt="" />
              </Grid>
              <Grid className={classes.rrssIconContainer} item>
                  <img className={classes.rrssIcon} src={rrss.whatsappIcon} alt="" />
              </Grid>
            </Grid>
            
        </Grid>
        
    </Grid>
  )
}

export default Footer