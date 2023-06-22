import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,

  Typography
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../src/templates/Default'
import Card from '@/src/components/Card'
import dbConnect from '@/src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import { formatCurrency } from '../src/utils/currency'
import Link from 'next/link'
import slugify from 'slugify'
import { useState } from 'react'
import { useRouter } from 'next/router'


const useStyles = makeStyles((theme)=>({
  searchContainer:{
    padding: theme.spacing(8,10,6)
  },
  searchBox:{
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0,2),
    marginTop: 20,
  },
  cardGrid:{
    marginTop: '50px' 
  },
  productLink:{
    textDecoration: 'none'
  }
}))


const Home =({products})=>{
  const router = useRouter()
  const[search,setSearch] =useState()
  const classes = useStyles()


  const handleConfirmSearch =()=>{
    router.push({
      pathname: `/search/${search}`
    })
  }

  return(

    <TemplateDefault>
      <Container maxWidth='md' className={classes.searchContainer}>
        <Typography component='h1' variant='h3' align='center' color='textPrimary'>
          O que deseja encontrar?
        </Typography>
        
        <Paper className={classes.searchBox}>
          <InputBase
          onChange={(e)=> setSearch(e.target.value)}
            placeholder='Ex.: Iphone 12 com garantia'
            fullWidth
          />
          <IconButton onClick={()=>handleConfirmSearch()}>
            <SearchIcon/>
          </IconButton>
        </Paper>
      </Container>

      <Container maxWidth='md' className={classes.cardGrid}>
      <Typography component='h4' variant='h4' align='center'    color='textPrimary' gutterBottom>
          Destaques
        </Typography>
      <Grid container spacing={4}>
        {
          products.map(product =>{
            const category = slugify(product.category).toLowerCase()
            const title = slugify(product.title).toLowerCase()

            return(
            <Grid key={product._id} item xs={12} sm={6} md={4}>
              <Link href={`${category}/${title}/${product._id}`}>
                <a className={classes.productLink}>
                  <Card 
                    image={`/uploads/${product.files[0].name}`}
                    title={product.title}
                    subtitle={formatCurrency(product.price)}
                  />
                </a>
              </Link>
          </Grid>

            )
          })
        }

          </Grid>

      </Container>

    </TemplateDefault>
  )
}



export async function getServerSideProps(){
  

  await dbConnect()

  const products = await ProductsModel.aggregate([{
    $sample : {size: 6}
  }])

  return{
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  }

}


export default Home