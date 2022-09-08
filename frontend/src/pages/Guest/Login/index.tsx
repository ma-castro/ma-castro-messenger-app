import { zodResolver } from '@hookform/resolvers/zod';
import Input, { InputError, InputGroup } from 'components/common/Input';
import { Controller as Field, useForm } from 'react-hook-form';
import { LoginSchema, TLoginInput } from './schema';
import { Container, Form } from './styles';

const Login = () => {
  const {
    control,
    formState: { errors },
  } = useForm<TLoginInput>({ resolver: zodResolver(LoginSchema) });

  return (
    <Container>
      <Form>
        <InputGroup>
          <Field
            name='email'
            control={control}
            defaultValue=''
            render={({ field }) => <Input {...field} placeholder='Email' />}
          />
          <InputError name='email' errors={errors} />
        </InputGroup>
        <InputGroup>
          <Field
            name='password'
            control={control}
            defaultValue=''
            render={({ field }) => <Input {...field} placeholder='Password' />}
          />
          <InputError name='password' errors={errors} />
        </InputGroup>
      </Form>
    </Container>
  );
};

export default Login;
