import {
  Button,
  Container,
  Typography,Grid,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
}
from '@material-ui/core'



import TemplaDefault from '../../src/templates/Default'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@/src/components/Card'
import { getSession } from 'next-auth/client'
import dbConnect from '@/src/utils/dbConnect'
import ProductsModel from '../../src/models/products'
import { formatCurrency } from '../../src/utils/currency'
import { useState } from 'react'
import axios from 'axios'
import useToasty from '../../src/contexts/Toasty'

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

  const {setToasty} = useToasty()
  const [removedProducts, setRemovedProducts] = useState([])
  const [productId, setProducItd] = useState()
  const [openConfirmModal, setOpenConfirmModal] = useState(false)


  const handleCloseModal = ()=> setOpenConfirmModal(false)

  const handleClickRemove = (productId) =>{
    setOpenConfirmModal(true)
    setProducItd(productId)
    
  }


  const handleSuccess = ()=>{
    setOpenConfirmModal(false)
    setRemovedProducts([...removedProducts, productId])
    setToasty({
      open: true,
      text: 'Anuncio removido com sucesso',
      severity: 'success',
    })
  }


  const handleError =()=>{
    setOpenConfirmModal(false)
    setToasty({
      open: true,
      text: 'Ops, ocorreu um erro',
      severity: 'error',
    })
    
  }

  const handleConfirmRemove=()=>{
    axios.delete('/api/productremove',{
      data:{
        id: productId
      }
    }).then(handleSuccess)
    .catch(handleError)
  }

  const classes = useStyles()
  
  return(
    <TemplaDefault>
      <Dialog
        open={openConfirmModal}
        onClose={handleCloseModal}>
        <DialogTitle>Deseja remover ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ao confirmar não é possível revertera operação.
          </DialogContentText>
        </DialogContent> 
        <DialogActions>
          <Button onClick={handleCloseModal} color='primary'>
            Cancelar
          </Button>
          <Button onClick={() => handleConfirmRemove()} color='primary' autoFocus>
            Remover
          </Button>
        </DialogActions> 
      </Dialog>
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
            products.map(product =>{
              
              if(removedProducts.includes(product._id)) return null


            return(
              
              <Grid key={product._id} item xs={12} sm={6} md={4}>
                <Card 
                  image={`/uploads/${product.files[0].name}`}
                  title={product.title}
                  subtitle={formatCurrency(product.price)}
                  actions={
                    <>
                      <CardActions>
                        <Button size="small" color="primary">
                          Editar
                        </Button>
                        <Button size="small" color="primary" onClick={() =>handleClickRemove(product._id)}>
                          Remover
                        </Button>
                      </CardActions>
                    </>
                  }
                />
              
              </Grid>
            )

          })
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