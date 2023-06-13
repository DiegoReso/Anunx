
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
  }
}))


const List =()=>{

  const classes = useStyles()

  return(
    <>

<TemplateDefault>
      <Container 
        maxWidth="md">
        <Paper
          className={classes.paperStyle}
        >
          <InputBase
            sx={{
              ml: '20px'
            }}
            placeholder='Ex.: IPhone 12 com garantia'
            fullWidth
          />
          <IconButton>
            <SearchIcon />
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
          Encontrado 3 anúncios
        </Typography>


      <Grid
          container
          spacing={2}
          className={classes.gridStyle}
          >

        <Grid item sx={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random/500x500/?nyc'}   
              title="Produto x" 
              subtitle="R$ 60,00"  
                
            />
           </Grid>   

           <Grid item sx={12} sm={6} md={4}>
             <Card 
                image={'https://source.unsplash.com/random/500x500/?rio%20de%20janeiro'}   
                title="Produto x" 
                subtitle="R$ 60,00"  
              
            />
          </Grid>

          <Grid item sx={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random/500x500/?sao%20paulo'}   
              title="Produto x" 
              subtitle="R$ 60,00"  
              
            />
          </Grid>

        </Grid>
      </Container>

    </TemplateDefault>
     
    </>
  )
}

export default List