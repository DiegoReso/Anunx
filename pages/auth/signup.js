

import { Box, Button, Container, FormControl, FormHelperText, Input, InputLabel, Typography, CircularProgress } from '@material-ui/core'
import TemplateDefault from '../../src/templates/Default'
import Link from 'next/link'

import { Formik } from 'formik'
import {initialValues, validationSchema} from './formValidationSignUp'


import { useRouter } from 'next/router'

const styleBox = {
  bgcolor: 'white',
  borderRadius: '12px',
  p: '10px',
  mb: '10px'
}


const SignUp =()=>{

  // const {setToasty} = useToasty()
  
  const router = useRouter()

  const handleFormSubmit = async values => {
    console.log(values)
  }


  return(
    <TemplateDefault>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {
          ({
            touched,
            values,
            errors,
            handleChange,
            handleSubmit,
            isSubmitting,
          })=>{
            

         return(
          <form onSubmit={handleSubmit}>       
            <Container maxWidth="md">
              <Box sx={styleBox}>
              <Typography
                align='center' 
                component="h2" 
                variant="h2">
                Crie sua conta
              </Typography>
              <Typography
                component="p"
                align='center'>
                E anuncie para todo o Brasil
              </Typography>
              <FormControl
                error={errors.name && touched.name}
                sx={{mt:'30px'}}
                fullWidth>
                <InputLabel >
                  Nome
                </InputLabel>
                <Input
                  name="name"
                  value={values.name}
                  onChange={handleChange}>
                  Nome
                </Input>
                <FormHelperText>
                  {errors.name}
                </FormHelperText>
              </FormControl>

              <FormControl
                error={errors.email}
                
                fullWidth>
                <InputLabel>
                  Email
                </InputLabel>
                <Input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                >
                  Email
                </Input>
                <FormHelperText>
                  {errors.email}
                </FormHelperText>
              </FormControl>

              <FormControl
                error={errors.password && touched.password}
                
                fullWidth>
                <InputLabel>
                  Senha
                </InputLabel>
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}>
                  Senha
                </Input>
                <FormHelperText>
                  {errors.password}
                </FormHelperText>
              </FormControl>

              <FormControl
                error={errors.confirm_password && touched.confirm_password}
                
                fullWidth>
                <InputLabel>
                  Confirmar Senha
                </InputLabel>
                <Input
                  type="password"
                  name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}>
                  Confirmar Senha
                </Input>
                <FormHelperText>
                  {errors.confirm_password}
                </FormHelperText>
              </FormControl>
              {
                isSubmitting
                ? (
                  <Box 
                    sx={{display: 'flex',
                    justifyContent: 'center',
                    mt:'20px'
                    }}>
                    <CircularProgress/> 
                 </Box>)
                : (
                <Button
                  
                  type="submit"
                  variant='contained'
                  color='primary'
                  fullWidth>
                  Cadastrar 
                 </Button>
                )
              }
             

              
              <Typography
                >
                Já tem uma conta? 
                <Link 
                  className="listStyle" 
                  href="/signin" 
                  passHref>
                    Entre aqui
                </Link>
              </Typography>
              </Box>
              
            </Container>
            </form>
              )
            }
          }
            </Formik>
          </TemplateDefault>
  )
}


export default SignUp