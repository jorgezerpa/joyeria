import { makeStyles } from '@mui/styles';

export default makeStyles(theme=>({
    hero:{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '50vh',
    },
    videoContainer:{
        position: 'absolute',
        top:'0',
        left:'0',
        width: '100%',
        height: '100%',
    },
    video:{
        position: 'absolute',
        Height: '100%',
        minWidth: '100%',
        top: '50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
    },
    content:{
        position: 'absolute',
        background: 'rgba(0,0,0,.5)',
        top:'0',
        left: '0',
        minWidth: '100%',
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '100',
    },
    title:{
        color: '#fff',
        textAlign: 'center',
    },
    subtitle:{
        color: '#fff',
        textAlign: 'center',
    },
    
}))
