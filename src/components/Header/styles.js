import { makeStyles } from '@mui/styles';

export default makeStyles(theme=>({
    hero:{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '85vh',
        marginBottom: '60px'
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
        top: '0',
        left:'50%',
        transform: 'translate(-50%, 0)',
    },
    content:{
        position: 'absolute',
        background: 'linear-gradient(90deg, rgba(200,20,200,.5), rgba(200,200,200,.3) 50%, transparent 100% ) ',
        top:'0',
        left: '0',
        minWidth: '100%',
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '100',
        paddingLeft: '0px'
    },
    title:{
        color: '#fff',
        paddingLeft: '10px'
        
    },
    subtitle:{
        color: '#fff',
        paddingLeft: '10px'
    },
    heroButton:{
        position: 'relative',
        left: '10px',
        transform: '1s all',
        '&:hover':{
            outline: '3px solid black',
        }
    }
    
}))