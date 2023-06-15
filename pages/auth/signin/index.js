
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
import Image from 'next/image'


const styleBox = {
  bgcolor: 'white',
  borderRadius: '12px',
  p: '10px',
  mb: '10px'
}

const useStyles = makeStyles((theme)=>({
  styleSubmit:{
    padding: '13px'
  },
  errorMessage:{
    margin: '20px 0'
  },
  orSeparator:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#e8e8e8',
    width:'100%',
    height:1,
    margin: theme.spacing(7,0,4),

    '& span':{
      backgroundColor: 'white',
      padding: '8px 30px'
    }
  },
  buttonGoogle:{
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px'
  }

}))

const SignIn =({APP_URL})=>{

  const classes = useStyles()

  
  const router = useRouter()
   const [session] = useSession()
  console.log(session)


  const handleGoogleLogin = ()=>{
    signIn('google',{
      callbackUrl: `${APP_URL}/user/dashboard` 
    })
  }

  const handleFormSubmit =  values => {
      signIn('credentials',{
        email: values.email,
        password: values.password,
        callbackUrl: `${APP_URL}/user/dashboard`
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

          <Container>

            <Typography
                align='center' 
                component="h2" 
                variant="h2">
                Entre na sua conta
            </Typography>

            <Box className={classes.buttonGoogle}>
              <Button
                variant='contained'
                color='primary'
                startIcon={
                  <Image
                    src="/images/logo_google.svg"
                    width={20}  
                    height={20}
                    alt='Login with google'
                  />  
                }
                onClick={handleGoogleLogin}>
                  Entrar com Google
              </Button>
            </Box>
              <Box className={classes.orSeparator}>
                <span>ou</span>

              </Box>
          </Container> 
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

SignIn.getServerSideProps = async function(){
  return{
    APP_URL : process.env.APP_URL
  }
    
}



export default SignIn