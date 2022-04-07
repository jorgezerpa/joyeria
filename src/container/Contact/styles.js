import { makeStyles } from "@mui/styles";

export default makeStyles(theme=>({
    container: {

    },
    rrssContainer: {
        position: 'relative',
        paddingTop: '40px',
        gap: '30px',
    },
    rrss: {
        width: '40px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    },
    rrssImage: {
        width: '100%',
    },
    agentsTitle:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    agentCard:{
        width: '100%',
    },
    agentImageContainer:{
        width: '100%',
        position: 'relative',
        height: '300px',
        overflowY: 'hidden',
    },
    agentImage:{
        width: '100%',
    },

}))