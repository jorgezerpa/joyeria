import { makeStyles } from '@mui/styles';

export default makeStyles(theme=>({
    section:{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        padding: '10px',
        marginTop: '100px',
        marginBottom: '100px',
        [theme.breakpoints.down('sm')]:{
            marginBottom: '270px',
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
