import { ErrorMessage } from '@hookform/error-message';
import { FC, memo } from 'react';

import useLogic from './logic';
import { Container, Input as StyledInput, InputErrorWrapper, InputGroup, Label } from './styles';
import { InputErrorProps, Props } from './types';

const Input: FC<Props> = ({
  className,
  error,
  placeholder: placeholderProp,
  onBlur,
  onFocus,
  ...props
}) => {
  const { handle, inputRef, placeholder, showLabel } = useLogic({
    onBlur,
    onFocus,
    placeholder: placeholderProp,
  });

  return (
    <Container className={className} isError={error} onClick={handle.focus}>
      {showLabel && <Label>{placeholderProp}</Label>}
      <StyledInput
        onBlur={handle.onBlur}
        onFocus={handle.onFocus}
        placeholder={placeholder}
        ref={inputRef}
        {...props}
      />
    </Container>
  );
};

export default memo(Input);

const InputError: FC<InputErrorProps> = (props) => (
  <InputErrorWrapper>
    <ErrorMessage {...props} />
  </InputErrorWrapper>
);

const MemoInputError = memo(InputError);

export { InputGroup, MemoInputError as InputError };
