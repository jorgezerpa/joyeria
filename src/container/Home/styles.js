import { makeStyles } from '@mui/styles';

export default makeStyles(theme=>({
    container:{
        overflow: 'hidden',
        padding: ' 0 70px',
        [theme.breakpoints.down('sm')]:{
            padding: '0'
        },
    },


    gridThreeContainer:{
        position: 'relative',
        overflow: 'hidden'
    },
    gridThreeContainerImage:{
        width: '100%'
    }
    
}))