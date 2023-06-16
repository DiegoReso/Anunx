import {
  Button,
  Container,
  Typography,Grid,
  CardActions
}
from '@material-ui/core'

import TemplaDefault from '../../src/templates/Default'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@/src/components/Card'
import { getSession } from 'next-auth/client'
import dbConnect from '@/src/utils/dbConnect'
import ProductsModel from '../../src/models/products'

const useStyles = makeStyles((theme)=>({
  container:{
    padding: theme.spacing(8,0,6)
  },
  buttonAdd:{
    margin: '30px auto',
    display: 'block'
  }
}))

const Home = ({products}) =>{

  const classes = useStyles()
  console.log(products)
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
          {
            products.map(product =>(
              
            <Grid key={product._id} item xs={12} sm={6} md={4}>
              <Card 
                image={`/uploads/${product.files[0].name}`}
                title={product.title}
                subtitle={product.price}
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


            ))
          }

        </Grid>

        
      </Container>
    
    </TemplaDefault>
  )
}

Home.requireAuth = true

export async function getServerSideProps({req}){
  const session = await getSession({req})
  await dbConnect()
  const products = await ProductsModel.find({'user.id': session.userId})

  return{
    props:{
      products : JSON.parse(JSON.stringify(products))
    }
  }
}



export default Home