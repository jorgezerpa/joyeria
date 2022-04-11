import { makeStyles } from '@mui/styles';

export default makeStyles(theme=>({
    container:{
        width: '100%',
        position: 'relative',
    },
    gridContainer:{
    },
    gridItem:{
    },
    card:{
        width: '100%',
        transition: '1s all',
        '&:hover':{
            transition: '1s all',
            transform: 'scale(.9) translateY(-20px)'
        }
    },
    cardMedia:{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '250px',
    },
    cardMediaImage:{
        position: 'absolute',
        height: '100%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    cardContent:{
        width: '100%',
    },
    cardTitle:{},
    cardSubtitle:{},
}))
