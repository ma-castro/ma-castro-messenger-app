import { InputGroup } from 'components/common/Input';
import { useForm } from 'react-hook-form';
import { Container, Form } from './styles';
import { IFormInputs } from './types';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Container>
      <Form>
        <InputGroup>test</InputGroup>
      </Form>
    </Container>
  );
};

export default Login;
