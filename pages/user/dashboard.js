import {
  Button,
  Container,
  Typography,Grid,
  CardContent,
  CardActions
}
from '@material-ui/core'

import TemplaDefault from '../../src/templates/Default'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@/src/components/Card'

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
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random/520x600/?fitness'}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <CardActions>
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                    <Button size="small" color="primary">
                      Remover
                    </Button>
                  </CardActions>
                </>
              }
            />
           
          </Grid>

         

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random/520x600/?fitness'}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <CardActions>
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                    <Button size="small" color="primary">
                      Remover
                    </Button>
                  </CardActions>
                </>
              }
            />
           
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random/520x600/?fitness'}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <CardActions>
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                    <Button size="small" color="primary">
                      Remover
                    </Button>
                  </CardActions>
                </>
              }
            />
           
          </Grid>

        </Grid>

        
      </Container>
    
    </TemplaDefault>
  )
}

Home.requireAuth = true

export default Home