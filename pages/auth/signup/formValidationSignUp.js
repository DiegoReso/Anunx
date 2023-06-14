import * as yup from 'yup'


 const initialValues={
  name: '',
  email:'',
  password:'',
  confirm_password:''

}

const validationSchema = yup.object().shape({
 
  name: yup.string()
  .required('Campo Obrigatório'),

  email: yup.string()
    .email('Digite um email válido')
    .required('Campo Obrigatório'),

  password: yup.string()
    .min(8, 'Defina uma senha forte' )
    .required('Campo Obrigatório'),

  confirm_password: yup.string()
  .required('Campo Obrigatório')
  .oneOf([yup.ref('password'),null], 'As senhas precisam ser iguais')

})

export {
  initialValues,
  validationSchema
}