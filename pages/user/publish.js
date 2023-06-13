import { Box, Container, TextField, Typography, MenuItem, Select,InputLabel, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

import TemplateDefault from '../../src/templates/Default'
import theme from '@/src/theme'

const useStyles = makeStyles((theme)=>({
  container:{
    padding: theme.spacing(8,0,6)
  },
  box:{
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3)
  },
  boxContainer:{
    paddingBottom: theme.spacing(3)
  },
  textField:{
    paddingBottom: theme.spacing(3)
  },
  buttonForm:{
    marginTop: theme.spacing(3)
  }
}))


const Publish = () =>{
  const classes = useStyles()
  return(
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component='h1' variant="h2" align='center' color="primary">
          Publicar Anúncio
        </Typography>
        <Typography component='h5' variant="h5" align='center' color="primary">
          Quanto mais detalhado melhor
        </Typography>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="primary">
            Título do Anúncio
          </Typography>
          <TextField
            label="ex.: Bicicleta Aro 18 com garantia"
            size='small'
            fullWidth
          />
        </Box>
      </Container>

      <Container
        className={classes.boxContainer}
        fullWidth
        variant="standard"
        >
        <Box className={classes.box}>
          <InputLabel>Categoria</InputLabel>
          <Select
            name="category"
            fullWidth
                              
          >
            
            <MenuItem value="Bebe e Criança">Bebe e Criança</MenuItem>
            <MenuItem value="Agricultura">Agricultura</MenuItem>
            <MenuItem value="Moda">Moda</MenuItem>
            <MenuItem value="Carros, Motos e Barcos ">Carros, Motos e Barcos</MenuItem>
            <MenuItem value="Serviços">Serviços</MenuItem>
            <MenuItem value="Lazer">Lazer</MenuItem>
            <MenuItem value="Animais">Animais</MenuItem>
            <MenuItem value="Moveis, Casa e Jardim">Moveis, Casa e Jardim</MenuItem>
            <MenuItem value="Imóveis">Imóveis</MenuItem>
            <MenuItem value="Equipamentos e ferramentas ">Equipamentos e ferramentas</MenuItem>
            <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
            <MenuItem value="Esporte">Esporte</MenuItem>
            <MenuItem value="Tecnologia">Tecnologia</MenuItem>
            <MenuItem value="Emprego">Emprego</MenuItem>
            <MenuItem value="Outros">Outros</MenuItem>

          </Select>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Imagens
          </Typography>
          <Typography component="div" variant="body2" color="textPrimary">
            A primeira imagem é a foto principal do seu anúncio.
          </Typography>
        </Box>
      </Container>


      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Descrição
          </Typography>
          <Typography component="div" variant="body2" color="textPrimary">
            Escreva os detalhes do que está vendendo
          </Typography>
        
          <TextField
            multiline
            rows={6}
            variant='outlined'
            fullWidth
          />
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Dados de Contato
          </Typography>
        
          <TextField
            className={classes.textField}
            label="Nome"
            variant='outlined'
            size='small'
            fullWidth
          />

          <TextField
            className={classes.textField}
            label="E-mail"
            variant='outlined'
            size='small'
            fullWidth
          />

          <TextField
            className={classes.textField}
            label="Telefone"
            variant='outlined'
            size='small'
            fullWidth
          />
        </Box>

        <Container maxWidth="md" className={classes.buttonForm}>
          <Box textAlign="right">
            <Button variant='contained' color='primary'>
              Publicar
            </Button>
          </Box>
        </Container>


      </Container>
    </TemplateDefault>
  )
}

export default Publish