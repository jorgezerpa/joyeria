import { makeStyles } from '@mui/styles';
import { padding } from '@mui/system';

export default makeStyles(theme=>({
    section:{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
    },
    container:{
        position: 'relative',
        width: '100%',
        height: '100%',
        marginBottom: '90px'
    },
    text:{

    },
    carousel: {
        marin: '0 auto',
    },
    CarouselHomeImage:{
        maxHeight: '260px'
    },
    slide:{
        padding: '15%',
        transition: '.5s all',
        [theme.breakpoints.down('sm')]:{
            padding: '5%'
        },
        '&:hover': {
            transform: 'scale(1.1)'
         },
        '&:hover>legend': {
            transform: 'scale(1.5)'
         },
        
    }
}))
