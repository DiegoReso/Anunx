
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
  CircularProgress,
  makeStyles
} from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Formik } from 'formik'

import { signIn, useSession} from 'next-auth/client'

import TemplateDefault from '../../../src/templates/Default'
import {initialValues, validationSchema} from './formValidationSignIn'
import { Alert } from '@material-ui/lab'


const styleBox = {
  bgcolor: 'white',
  borderRadius: '12px',
  p: '10px',
  mb: '10px'
}

const useStyles = makeStyles(()=>({
  styleSubmit:{
    padding: '13px'
  },
  errorMessage:{
    margin: '20px 0'
  }
}))

const SignIn =()=>{

  const classes = useStyles()

  
  const router = useRouter()
   const [session] = useSession()
  console.log(session)

  const handleFormSubmit = async values => {
      signIn('credentials',{
        email: values.email,
        password: values.password,
        callbackUrl: 'http://localhost:3000/user/dashboard'
      })
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
           {

            router.query.i === '1'
            ?(
              <Alert severity='error' className={classes.errorMessage}>
                Usuário não encontrado!
              </Alert>
            )

            : null
           }

              <Box sx={styleBox}>
              <Typography
                align='center' 
                component="h2" 
                variant="h2">
                Entre na sua conta
              </Typography>
             
              

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

              
              {
                isSubmitting
                ? (<Button
                  
                  type="submit"
                  variant='contained'
                  color='primary'
                  fullWidth>
                    <CircularProgress color='secondary'/> 
                  </Button>
                  )
                : (
                  <Button
                    className={classes.styleSubmit}
                    type="submit"
                    variant='contained'
                    color='primary'
                    fullWidth>
                  Entrar 
                 </Button>
                
                )
              }
             

              
              <Typography
                >
                Já tem uma conta? 
                <Link 
                   
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


export default SignIn