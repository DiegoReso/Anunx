
import {
  Container,
  Typography,
  InputBase,
  IconButton,
  Paper,
  Grid
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';


import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card';
import Link from 'next/link';
import slugify from 'slugify';
import ProductsModel from '../../src/models/products'
import { formatCurrency } from '../../src/utils/currency';
import { useState } from 'react';
import {useRouter} from 'next/router';

const useStyles = makeStyles(()=>({
  paperStyle:{
    display: 'flex',
    padding: '5px'
  },
  typografyStyle:{
    marginTop: '20px'
  },
  gridStyle:{
    marginTop: '30px'
  },
  productLink:{
    textDecoration: 'none'
  }
}))


const List =({products})=>{
  const router = useRouter()
  const [search,setSearch] = useState()
  const classes = useStyles()

  const handleConfirmSearch =()=>{
    router.push({
      pathname: `/search/${search}`
    })
  }
    
  return(
    <>

<TemplateDefault>
      <Container 
        maxWidth="md">
        <Paper
          className={classes.paperStyle}
        >
          <InputBase
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Ex.: IPhone 12 com garantia'
            fullWidth
          />
          <IconButton
            onClick={()=>handleConfirmSearch()}
            >
            <SearchIcon/>
          </IconButton>
        </Paper>
      </Container>
      
    

      
      <Container maxWidth="lg">
        <Typography 
          className={classes.typografyStyle} component="h3" variant="h4"       align="center" color="textPrimary"> 
          Anúncios
        </Typography>

        <Typography 
          className={classes.typografyStyle} component="h5" variant="h6"       align="center" color="textPrimary"> 
          Encontrado {products.length} anúncios
        </Typography>


      <Grid
          container
          spacing={2}
          className={classes.gridStyle}
          >

          {
          products.map(product =>{
            const category = slugify(product.category).toLowerCase()
            const title = slugify(product.title).toLowerCase()

            return(
            <Grid key={product._id} item xs={12} sm={6} md={4}>
              <Link href={`/${category}/${title}/${product._id}`}>
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
     
    </>
  )
}


export async function getServerSideProps({query}){
  const {q} = query

  const products = await ProductsModel.find({
    $or:[
      {
        title : {
          $regex : q,
          $options: 'i'
        }
      },
      {
        description : {
          $regex : q,
          $options: 'i'
        }
      }
    ]
  })


return {
  props :{
    products :JSON.parse(JSON.stringify(products))
  }
}
}

export default List