import React from 'react';

import { Video } from '../../components';

import { rrss, agents } from '../../assets';

import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import useStyles from './styles';

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Video />

      <Grid className={classes.rrssContainer} container direction='column' justifyContent='center' alignItems='center'>
          <Grid item className={classes.rrss}>
            <img className={classes.rrssImage} src={ rrss.whatsappIcon } alt="" />
            <Typography variant='body1'>+44444444444</Typography>
          </Grid>
          <Grid item className={classes.rrss}>
            <img className={classes.rrssImage} src={ rrss.facebookIcon } alt="" />
            <Typography variant='body1'>miUsuario@facebook.com</Typography>
          </Grid>
          <Grid item className={classes.rrss}>
            <img className={classes.rrssImage} src={ rrss.instagramIcon } alt="" />
            <Typography variant='body1'>@miUsuarioInstagram.com</Typography>
          </Grid>
      </Grid>

        {/* autorized agents */}

      <Grid container spacing={5} padding={5}>
            <Grid item className={classes.agentsTitle}>
                <Typography variant='h3'>Nuestros Agentes</Typography>
            </Grid>              

           { agents.map((agent, key)=>(
                <Grid item key={key} sm={10} md={3} lg={3}>
                    <Card className={classes.agentCard}>
                      <CardMedia className={classes.agentImageContainer}>
                        <img className={classes.agentImage} src={agent.image} alt="" />
                      </CardMedia>
                      <CardContent>
                            {agent.name}
                      </CardContent>
                      <CardActions>
                          <Button>
                              <img src={rrss.whatsappIcon} alt="" />
                          </Button>
                      </CardActions>
                    </Card>
                </Grid>              

           ))
           }

      </Grid>
      


    </div>
  )
}

export default Contact