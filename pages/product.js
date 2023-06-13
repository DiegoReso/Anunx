import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import TemplateDefault from '../src/templates/Default'
import Carousel from 'react-material-ui-carousel'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
  box:{
    backgroundColor: theme.palette.background.white,
    padding:theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  productName:{
    margin: '15px 0',
  },
  price:{
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  card:{
    height: '100%'
  },
  cardMedia:{
    paddingTop: '56%'
  },
  
}))

const Products =() =>{

  const classes= useStyles()

  return(
   <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}> 
          <Grid item xs={8}>
            <Box className={classes.box}>
              <Carousel
                autoPlay={false}
                animation="slide"
              >
                <Card className={classes.card} >
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random/500x500/?brasil"
                    title="Titulo da imagem"
                  />
                </Card>

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random/500x500/?patriots"
                    title="Titulo da imagem"
                  />
                </Card>
              </Carousel>
            </Box>
         

        
            <Box className={classes.box}>
              <Typography component="span" variant="caption" className={classes.titles} >Publicado 16 de junho de 2021</Typography>
                
              <Typography component="h4" variant="h4" className={classes.productName}>Jaguar XE 2.0 </Typography>

              <Typography component="h4" variant="h4" className={classes.price} >R$ 50.000,00</Typography>
              
              <Chip label="Categoria"/>
            </Box>

            <Box className={classes.box}>
              <Typography component="h6" variant="h6" >
                Descrição
              </Typography>

              <Typography  ypography component="p" variant="body2" >

                Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Mé faiz elementum girarzis, nisi eros vermeio.Quem manda na minha terra sou euzis!

                Manduma pindureta quium dia nois paga.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

              </Typography>

            </Box>
          </Grid>

          <Grid item sx={4}>
            <Card elevation={0}  className={classes.box}>
              <CardHeader 
                avatar={
                  <Avatar>D</Avatar>
                }
                title="Diego Reis"
                subheader="diegoreso@me.com"
              />
              <CardMedia
                image="https://source.unsplash.com/random/500x500/?brazil"
                title="Diego Reis"
              />
            </Card>
            
            <Box className={classes.box} >

              <Typography component="h6" variant="h6">
                Localização
              </Typography>

            </Box>

          </Grid>

        </Grid>
      </Container>
   </TemplateDefault>
  )
}


export default Products