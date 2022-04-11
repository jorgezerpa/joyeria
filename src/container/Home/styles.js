import { makeStyles } from '@mui/styles';

export default makeStyles(theme=>({
    container:{
        overflow: 'hidden',
        padding: ' 0 70px',
        [theme.breakpoints.down('sm')]:{
            padding: '0'
        },
    },
    bigText:{
        background: 'rgba(200,200,250,.4)', padding: '100px 100px', borderRadius: '10px',
        [theme.breakpoints.down('md')]:{
            padding: '30px 20px'
        }
    },

    listOptions:{
        '&:hover>.arrow-icon':{
            transform: 'rotate(360deg) scale(1.01)'
        },
        '&>.arrow-icon':{
            transition: '.5s all'
        }
    },
    gridThreeContainer:{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '15px'
    },
    gridThreeContainerImage:{
        width: '100%'
    },
    gridThreeContainerText:{
        background: 'rgba(200,200,250,.2)',
        height: '100%'
    }
    
}))