import {
  Box,
  Container,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  Button,
  IconButton, 
  FormControl,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
  Input,

 } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import TemplateDefault from '../../src/templates/Default'



const validationSchema = yup.object().shape({
  title: yup.string()
    .min(6, 'Escreva um título maior')
    .max(100,'Título muito grande')
    .required('Campo Obrigatório'),

  category: yup.string().required('Campo Obrigatório'),

  description: yup.string()
    .min(50, 'Escreva uma descrição com min 50 caracteres')
    .required('Campo Obrigatório'),

  price: yup.number()
    .required('Campo Obrigatório'),

  name: yup.string()
    .required('Campo Obrigatório'),

  email: yup.string()
    .email('Digite um email válido')
    .required('Campo Obrigatório'),

  phone: yup.number()
    .required('Campo Obrigatório'),

  files: yup.array()
    .min(1, 'Envie pelo menos uma foto')
    .required('Obrigatório')
})


const useStyles = makeStyles((theme)=>({

  mask:{},
  mainImage:{},
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
  },
  thumbsContainer:{
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',
    gap: '8px',
    
  },
  dropzone:{
    width : 200,
    height: 150,
    backgroundColor: theme.palette.background.default,
    border: '1px dashed black',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    textAlign:'center',
    padding: '10',
    margin: '0 15px 15px 0'
  },
  thumb:{
    position: 'relative',
    width: 200,
    height: 150,
    backgroundSize: 'cover',
    marginTop: '10px',

    '& $mainImage':{
      backgroundColor: 'blue',
      padding: '2px 6px',
      position: 'absolute',
      bottom: '0',
      left:'0'
    },

    '&:hover $mask':{
      display:'flex'
    },


    '& $mask':{
      backgroundColor: 'rgba(0,0,0,0.7)',
      width: '100%',
      height: '100%',
      display: 'none',
      justifyContent: 'center',
      alignItems:'center',
      textAlign:'center'
    },
  },
  inputLabel:{
    fontWeight: 400,
    color: theme.palette.primary.main
  }
}))


const Publish = () =>{

  const classes = useStyles()

  const [files,setFiles] = useState([])

  const {getRootProps,getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles)=>{
      const newFiles = acceptedFiles.map(file=>{
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })

      setFiles([
        ...files,
        ...newFiles,
      ])
    }
  })


  const handleRemoveFile = fileName => {
    const newfilesState = files.filter( file => file.name !== fileName )

    setFiles(newfilesState)
  }

  return(
    <TemplateDefault>
      <Formik
        initialValues={{
          title: '',
        
        }}
        
        validationSchema={validationSchema}
        onSubmit={(values)=> {
          console.log('ok enviou', values)
        }}
      >
        {
          ({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
          })=>{
            
            return(
      <form onSubmit={handleSubmit}>
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
         
          <FormControl fullWidth error={errors.title && touched.title}>
            <InputLabel  className={classes.inputLabel}>Titulo do Anúncio</InputLabel>
            <Input
              error={errors.title && touched.title}
              name='title'
              value={values.title}
              onChange={handleChange}
              label="ex.: Bicicleta Aro 18 com garantia"
              size='small'
            />
            <FormHelperText>
              {errors.title}
            </FormHelperText>
          </FormControl>
        </Box>
      </Container>

      <Container 
        maxWidth="md"
        className={classes.boxContainer}
        fullWidth
        variant="standard"
        >
        <Box className={classes.box}>
          <FormControl error={errors.category} fullWidth> 
          <InputLabel className={classes.inputLabel}>Categoria</InputLabel>
            <Select
              name="category"
              value={values.category}
              onChange={handleChange}
              fullWidth
                                
            >
              
              <MenuItem value="Bebe e Criança">Bebe e Criança</MenuItem>
              <MenuItem value="Agricultura">Agricultura</MenuItem>
              <MenuItem value="Moda">Moda</MenuItem>
              <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
              <MenuItem value="Serviços">Serviços</MenuItem>
              <MenuItem value="Lazer">Lazer</MenuItem>
              <MenuItem value="Animais">Animais</MenuItem>
              <MenuItem value="Moveis, Casa e Jardim">Moveis, Casa e Jardim</MenuItem>
              <MenuItem value="Imóveis">Imóveis</MenuItem>
              <MenuItem value="Equipamentos e ferramentas">Equipamentos e ferramentas</MenuItem>
              <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
              <MenuItem value="Esporte">Esporte</MenuItem>
              <MenuItem value="Tecnologia">Tecnologia</MenuItem>
              <MenuItem value="Emprego">Emprego</MenuItem>
              <MenuItem value="Outros">Outros</MenuItem>

            </Select>
            <FormHelperText>
              {errors.category}
            </FormHelperText>
          </FormControl>
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
          <Box className={classes.thumbsContainer}>
            <Box className={classes.dropzone} {...getRootProps()}>
              <input {...getInputProps()} />
              <Typography>
                Clique ou arraste para adicionar imagens
              </Typography>
            </Box>

            {
              files.map((file,index) =>(
                <Box
                key={file.name}
                className={classes.thumb}
                style={{backgroundImage: `url(${file.preview})`}}>

                {
                  index === 0
                  ? (<Box className={classes.mainImage}>
                    <Typography variant='body' color='secondary'> 
                      Principal
                    </Typography>
                  </Box>  )

                  : null
                }  
                
                <Box className={classes.mask}>
                  <IconButton color='secondary'
                    onClick={()=> handleRemoveFile(file.name)}
                  >
                    <DeleteForever fontSize='large'/>
                  </IconButton>
                </Box>
              </Box>
              ))
            }
            
          </Box>
          
        </Box>
      </Container>


      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <FormControl fullWidth error={errors.description}>
            <InputLabel className={classes.inputLabel}>Escreva os detalhes do que está vendendo</InputLabel>
            <Input
              name="description"
              multiline
              rows={6}
              onChange={handleChange}
              variant='outlined'
              fullWidth
            />
            <FormHelperText>
              {errors.description}
            </FormHelperText>
          </FormControl>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          
          <FormControl fullWidth variant='outlined' error={errors.price}>
            <InputLabel>Valor</InputLabel>
            <Input
              onChange={handleChange}
              startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
              labelWidth={40}
              name="price"
              value={values.price}
              />
            <FormHelperText>
              {errors.price}
            </FormHelperText>
          </FormControl>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Dados de Contato
          </Typography>
          <FormControl fullWidth error={errors.name}> 
          <InputLabel>Nome</InputLabel>  
            <Input
              name="name"
              onChange={handleChange}
              value={values.name}
              className={classes.textField}
              variant='outlined'
              size='small'
              fullWidth
            />
            <FormHelperText>
              {errors.name}
            </FormHelperText>
          </FormControl> 

          <FormControl fullWidth error={errors.email}> 
          <InputLabel>Email</InputLabel>  
            <Input
              name="email"
              onChange={handleChange}
              value={values.email}
              className={classes.textField}
              variant='outlined'
              size='small'
              fullWidth
            />
            <FormHelperText>
              {errors.email}
            </FormHelperText>
          </FormControl> 

          <FormControl fullWidth error={errors.phone}> 
          <InputLabel>Telefone</InputLabel>  
            <Input
              name="phone"
              onChange={handleChange}
              value={values.phone}
              className={classes.textField}
              variant='outlined'
              size='small'
              fullWidth
            />
            <FormHelperText>
              {errors.phone}
            </FormHelperText>
          </FormControl> 
        </Box>

        <Container maxWidth="md" className={classes.buttonForm}>
          <Box textAlign="right">
            <Button type="submit" variant='contained' color='primary'>
              Publicar
            </Button>
          </Box>
        </Container>


      </Container>
    </form>
            )
          }
        }

      </Formik>
      
    </TemplateDefault>
  )
}

export default Publish