import {
  Box,
  Container,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  Button,
  FormControl,
  InputAdornment,
  FormHelperText,
  Input,

 } from '@material-ui/core'


import { Formik } from 'formik'

import { initialValues,validationSchema } from './formValues'
import TemplateDefault from '../../../src/templates/Default'
import useStyles from './styles'
import FileUpload from '../../../src/components/FileUpload'



const Publish = () =>{

  const classes = useStyles()

  return(
    <TemplateDefault>
      <Formik
        initialValues={initialValues}
        
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
            setFieldValue,
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
              {errors.title && touched.title ? errors.title : null}
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
          <FormControl error={errors.category && touched.category} fullWidth> 
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
              {errors.category && touched.category ? errors.category : null}
            </FormHelperText>
          </FormControl>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <FileUpload
            files={values.files}
            errors={errors.files}
            touched={touched.files}
            setFieldValue={setFieldValue}

          />
        </Box>
      </Container>


      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <FormControl fullWidth error={errors.description && touched.description }>
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
              {errors.description && touched.description ? errors.description : null}
            </FormHelperText>
          </FormControl>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          
          <FormControl fullWidth variant='outlined' error={errors.price && touched.price}>
            <InputLabel>Valor</InputLabel>
            <Input
              onChange={handleChange}
              startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
              labelWidth={40}
              name="price"
              value={values.price}
              />
            <FormHelperText>
              {errors.price && touched.price ? errors.price : null}
            </FormHelperText>
          </FormControl>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Dados de Contato
          </Typography>
          <FormControl fullWidth error={errors.name && touched.name}> 
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
              {errors.name && touched.name ? errors.name : null}
            </FormHelperText>
          </FormControl> 

          <FormControl fullWidth error={errors.email && touched.email}> 
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
              {errors.email && touched.email ? errors.email : null}
            </FormHelperText>
          </FormControl> 

          <FormControl fullWidth error={errors.phone && touched.phone}> 
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
              {errors.phone && touched.phone ? errors.phone : null}
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