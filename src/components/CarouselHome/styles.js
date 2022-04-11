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
        marginBottom: '20px'
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
        padding: '10%',
        transition: '1s all',
        [theme.breakpoints.down('sm')]:{
            padding: '5%'
        },
        '&:hover': {
            transform: 'scale(1.1)'
         },
        '& .underline': {
            borderBottom: '3px solid black',
            transform: 'scaleX(0)',
            transition: '.8s all',
        },
        '&:hover .underline': {
            transform: 'scaleX(1)',
         },
        
    }
}))
