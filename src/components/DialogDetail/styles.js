import { makeStyles } from "@mui/styles";

export default makeStyles(theme=>({
    imageContainer:{
        width: '100%',
        height: '250px',
        position: 'relative',
        overflow: 'hidden',
    },
    image:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
    }
}))