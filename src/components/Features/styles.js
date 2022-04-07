import { makeStyles } from '@mui/styles';

export default makeStyles(theme=>({
    section:{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        padding: '10px',
        marginTop: '100px',
        marginBottom: '200px',
        [theme.breakpoints.down('sm')]:{
            marginBottom: '270px',
        },
        [theme.breakpoints.down('xs')]:{
            marginBottom: '370px',
        }
    },
    container:{
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    text:{
        width: '40%',
    },
    carouselContainer:{
        position: 'relative',
        width: '100%',
        paddingTop: '100px',
    },

}))
