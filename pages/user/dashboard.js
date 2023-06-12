import { Button, Container, Typography } from '@material-ui/core'
import TemplaDefault from '../../src/templates/Default'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme)=>({
  container:{
    padding: theme.spacing(8,0,6)
  },
  buttonAdd:{
    margin: '30px auto',
    display: 'block'
  }
}))

const Home = () =>{

  const classes = useStyles()

  return(
    <TemplaDefault>
      
      <Container maxWidth="sm" className={classes.container}>
        <Typography align='center' component="h1" variant ="h2">
          Meus Anuncios
        </Typography>
        <Button variant="contained" color="primary" className={classes.buttonAdd}>
          Publicar novo anúncio
        </Button>
      </Container>
    
    </TemplaDefault>
  )
}

export default Home