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
  }


}))


const Home =()=>{

  const classes = useStyles()


  return(

    <TemplateDefault>
      <Container maxWidth='md' className={classes.searchContainer}>
        <Typography component='h1' variant='h3' align='center' color='textPrimary'>
          O que deseja encontrar?
        </Typography>
        
        <Paper className={classes.searchBox}>
          <InputBase
            placeholder='Ex.: Iphone 12 com garantia'
            fullWidth
            />
          <IconButton>
            <SearchIcon/>
          </IconButton>
        </Paper>
      </Container>

      <Container maxWidth='md' className={classes.cardGrid}>
      <Typography component='h4' variant='h4' align='center'    color='textPrimary' gutterBottom>
          Destaques
        </Typography>
      <Grid container spacing={4}>
     
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random/520x600/?fitness'}
              title="Produto X"
              subtitle="R$ 60,00"
              
            />
           
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random/520x600/?fitness'}
              title="Produto X"
              subtitle="R$ 60,00"
              
            />
           
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random/520x600/?fitness'}
              title="Produto X"
              subtitle="R$ 60,00"
              
            />
           
          </Grid>

        </Grid>
      </Container>


    </TemplateDefault>
  )
}

export default Home