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
  textField:{
    paddingBottom: theme.spacing(3)
  },
  buttonForm:{
    marginTop: theme.spacing(3)
  },
  
  inputLabel:{
    fontWeight: 400,
    color: theme.palette.primary.main
  }
}))

export default useStyles