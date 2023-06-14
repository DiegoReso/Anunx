import * as yup from 'yup'


 const initialValues={
  
  email:'',
  password:'',
  

}

const validationSchema = yup.object().shape({
 
  email: yup.string()
    .email('Digite um email válido')
    .required('Campo Obrigatório'),

  password: yup.string()
    .min(1, 'Defina uma senha forte' )
    .required('Campo Obrigatório'),

})

export {
  initialValues,
  validationSchema
}