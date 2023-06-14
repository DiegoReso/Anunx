import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme)=>({

  mask:{},
  mainImage:{},
  container:{
    padding: theme.spacing(8,0,6)
  },
  box:{
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3)
  },
  boxContainer:{
    paddingBottom: theme.spacing(3)
  },

  thumbsContainer:{
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',
    gap: '8px',
    
  },
  dropzone:{
    width : 200,
    height: 150,
    backgroundColor: theme.palette.background.default,
    border: '1px dashed black',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    textAlign:'center',
    padding: '10',
    margin: '0 15px 15px 0'
  },
  thumb:{
    position: 'relative',
    width: 200,
    height: 150,
    backgroundSize: 'cover',
    marginTop: '10px',

    '& $mainImage':{
      backgroundColor: 'blue',
      padding: '2px 6px',
      position: 'absolute',
      bottom: '0',
      left:'0'
    },

    '&:hover $mask':{
      display:'flex'
    },


    '& $mask':{
      backgroundColor: 'rgba(0,0,0,0.7)',
      width: '100%',
      height: '100%',
      display: 'none',
      justifyContent: 'center',
      alignItems:'center',
      textAlign:'center'
    },
  },

}))

export default useStyles