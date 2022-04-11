import React from 'react';


import { Grid, Typography, Button, Icon } from '@mui/material';
import { Features, CarouselHome, Video, Header, Slider } from '../../components'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import woman from '../../assets/images/woman.jpg';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();


  return (
    <>
    <Header />
    
    <div  className={classes.container}>
        <CarouselHome title='Top Colections' subtitle='Curated picks of all our favorites' />
        <CarouselHome  title='Top Picks' subtitle='Our most popular watches this month' />



        <Grid container justifyContent='center' alignItems='center'>
                  <Grid item className={classes.bigText} xs={10} sm={10} md={10}>
                    <Typography variant='h4' textAlign='center' letterSpacing='.5px' > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, eveniet repellat ab dolore reprehenderit ad rem consequuntur, ipsa alias nam ratione ipsam? Accusamus nostrum mollitia numquam, iste perferendis tempora aut.</Typography>
                  </Grid>          
        </Grid>






        <Grid  container marginBottom={10} marginTop={10} justifyContent='center' alignItems='center' spacing={3}>

                  <Grid item xs={10} sm={10} md={10} >
                        <Typography variant='h2'>Need To know</Typography>
                  </Grid>          

                  <Grid item xs={10} sm={10} md={10}>
                    <Typography variant='body1' padding='0 15px'>Qui delectus nesciunt facilis repellat! Loreorum, evea alias nam ratione ipsam? Accusamus nostrum mollitia numquam, iste perferendis tempora aut.</Typography>
                  </Grid>          
        
        
                  <Grid item xs={10} sm={10} md={10}>
                    <Typography variant='body2' className={classes.listOptions} style={{padding: '15px 0', borderBottom: '1px solid rgba(0,0,0,.1)'}} >how long will take my order <Icon className='arrow-icon'><ArrowForwardIosIcon /></Icon></Typography>
                    <Typography variant='body2' className={classes.listOptions} style={{padding: '15px 0', borderBottom: '1px solid rgba(0,0,0,.1)'}} >how long will take my order <Icon className='arrow-icon'><ArrowForwardIosIcon /></Icon></Typography>
                    <Typography variant='body2' className={classes.listOptions} style={{padding: '15px 0', borderBottom: '1px solid rgba(0,0,0,.1)'}} >how long will take my order <Icon className='arrow-icon'><ArrowForwardIosIcon /></Icon></Typography>
                  </Grid>  
        
        </Grid>





      <Grid container justifyContent='center' alignItems='center' marginBottom={10} padding='10px'>
        <Grid className={classes.gridThreeContainer} item xs='12' sm={5} md={5}>
            <img className={classes.gridThreeContainerImage} src={woman} alt="" />  
        </Grid>
        <Grid item xs='12' sm={5} md={5} padding='20px'>
            <Typography className={classes.gridThreeContainerText} variant='body1'>
                <Typography variant='h2' gutterBottom>
                    The Ang Watch
                </Typography>
                <Typography  variant='body1' gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi totam nobis inventore numquam incidunt libero voluptas ea ullam iusto autem aperiam, eos odit ratione? Sequi hic dolores rem repellendus!
                </Typography>
                <Button variant='contained'>
                    shop ang
                </Button>
            </Typography>
        </Grid>
      </Grid>
      
      <Grid container justifyContent='center' alignItems='center' marginBottom={10}>
        <Grid className={classes.gridThreeContainer} item xs='12' sm={5} md={5}>
            <img className={classes.gridThreeContainerImage} src={woman} alt="" />  
        </Grid>
        <Grid item xs='12' sm={5} md={5} padding='20px'>
                <Typography variant='h2' gutterBottom>
                    The Ang Watch
                </Typography>
                <Typography  variant='body1' gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi totam nobis inventore numquam incidunt libero voluptas ea ullam iusto autem aperiam, eos odit ratione? Sequi hic dolores rem repellendus!
                </Typography>
                <Button variant='contained'>
                    shop ang
                </Button>            

        </Grid>
      </Grid>
      
      <Grid container justifyContent='center' alignItems='center' marginBottom={10}>
        <Grid className={classes.gridThreeContainer} item xs='12' sm={5} md={5}>
            <img className={classes.gridThreeContainerImage} src={woman} alt="" />  
        </Grid>
        <Grid item xs='12' sm={5} md={5} padding='20px'>
                <Typography variant='h2' gutterBottom>
                    The Ang Watch
                </Typography>
                <Typography  variant='body1' gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi totam nobis inventore numquam incidunt libero voluptas ea ullam iusto autem aperiam, eos odit ratione? Sequi hic dolores rem repellendus!
                </Typography>
                <Button variant='contained'>
                    shop ang
                </Button>
        </Grid>
      </Grid>


    </div>
    </>
  )
}

export default Home