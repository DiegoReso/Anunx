import {
  Button,
  Container,
  Typography,Grid,
  CardMedia,
  Card,
  CardContent,
  CardActions}
from '@material-ui/core'

import TemplaDefault from '../../src/templates/Default'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme)=>({
  container:{
    padding: theme.spacing(8,0,6)
  },
  cardMedia:{
    paddingTop: '100%'
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
            <Card>
              <CardMedia
                className={classes.cardMedia} 
                image={'https://source.unsplash.com/random/520x600/?fitness'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia} 
                image={'https://source.unsplash.com/random/520x600/?fitness'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia} 
                image={'https://source.unsplash.com/random/520x600/?fitness'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Container>
    
    </TemplaDefault>
  )
}

export default Home