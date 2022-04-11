import React from 'react';


import { Grid, Typography } from '@mui/material';
import { Features, CarouselHome, Video, Header, Slider } from '../../components'; 

import woman from '../../assets/images/woman.jpg';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();


  return (
    <>
    <Header />
    
    <div  className={classes.container}>
        <CarouselHome title='Categorias' subtitle='lorem ipsum dolor sin amet' />
        <CarouselHome  title='Categorias' subtitle='lorem ipsum dolor sin amet'c />



        <Grid container justifyContent='center' alignItems='center'>
                  <Grid item xs={10} sm={10} md={10} style={{background: 'rgba(200,200,200,.4', padding: '70px 30px', borderRadius: '10px'}}>
                    <Typography variant='h2' textAlign='center' > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, eveniet repellat ab dolore reprehenderit ad rem consequuntur, ipsa alias nam ratione ipsam? Accusamus nostrum mollitia numquam, iste perferendis tempora aut.</Typography>
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
                    <Typography variant='body2' style={{padding: '15px 0', borderBottom: '1px solid rgba(0,0,0,.3)'}} >how long will take my order</Typography>
                    <Typography variant='body2' style={{padding: '15px 0', borderBottom: '1px solid rgba(0,0,0,.3)'}} >how long will take my order</Typography>
                    <Typography variant='body2' style={{padding: '15px 0', borderBottom: '1px solid rgba(0,0,0,.3)'}} >how long will take my order</Typography>
                  </Grid>  
        
        </Grid>





      <Grid container justifyContent='center' alignItems='center' marginBottom={10}>
        <Grid className={classes.gridThreeContainer} item xs='12' sm={5} md={5}>
            <img className={classes.gridThreeContainerImage} src={woman} alt="" />  
        </Grid>
        <Grid item xs='12' sm={5} md={5} padding='20px'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi totam nobis inventore numquam incidunt libero voluptas ea ullam iusto autem aperiam, eos odit ratione? Sequi hic dolores rem repellendus!
        </Grid>
      </Grid>
      
      <Grid container justifyContent='center' alignItems='center' marginBottom={10}>
        <Grid item xs='12' sm={5} md={5} padding='20px'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi totam nobis inventore numquam incidunt libero voluptas ea ullam iusto autem aperiam, eos odit ratione? Sequi hic dolores rem repellendus!
        </Grid>
        <Grid className={classes.gridThreeContainer} item xs='12' sm={5} md={5}>
            <img className={classes.gridThreeContainerImage} src={woman} alt="" />  
        </Grid>
      </Grid>
      
      <Grid container justifyContent='center' alignItems='center' marginBottom={10}>
        <Grid className={classes.gridThreeContainer} item xs='12' sm={5} md={5}>
            <img className={classes.gridThreeContainerImage} src={woman} alt="" />  
        </Grid>
        <Grid item xs='12' sm={5} md={5} padding='20px'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi totam nobis inventore numquam incidunt libero voluptas ea ullam iusto autem aperiam, eos odit ratione? Sequi hic dolores rem repellendus!
        </Grid>
      </Grid>


    </div>
    </>
  )
}

export default Home