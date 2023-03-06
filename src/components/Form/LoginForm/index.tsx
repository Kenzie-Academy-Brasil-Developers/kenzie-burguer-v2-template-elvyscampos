import { FieldError, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { ILoginFormValues, UserContext } from '../../../context/UserContext';


const schema = yup.object({
  email: yup.string().required('O email é Obrigatório '),
  password: yup.string().required('A senha é Obrigatória '),
});

const LoginForm = () => {
  const { UserLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({ resolver: yupResolver(schema) });

  const loginSubtmit: SubmitHandler<ILoginFormValues> = (formData) => {
    UserLogin(formData);
  };
  return (
    <StyledForm onSubmit={handleSubmit(loginSubtmit)}>
      <Input
        type='email'
        label='Digite o seu email'
        register={register('email')}
        error={(errors as Record<string, FieldError>).email}
      />
      <Input
        type='password'
        label='Digite o sua senha'
        register={register('password')}
        error={(errors as Record<string, FieldError>).password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
