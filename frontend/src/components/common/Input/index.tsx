import { ErrorMessage } from '@hookform/error-message';
import { FC, forwardRef, memo } from 'react';

import useLogic from './logic';
import { Container, Input as StyledInput, InputErrorWrapper, InputGroup, Label } from './styles';
import { InputErrorProps, Props } from './types';

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, error, placeholder: placeholderProp, onBlur, onFocus, ...props }, ref) => {
    const { handle, placeholder, showLabel } = useLogic({
      onBlur,
      onFocus,
      placeholder: placeholderProp,
      ref,
    });

    return (
      <Container className={className} isError={error} onClick={handle.focus}>
        {showLabel && <Label>{placeholderProp}</Label>}
        <StyledInput
          onBlur={handle.onBlur}
          onFocus={handle.onFocus}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </Container>
    );
  },
);

Input.displayName = 'Input';

const InputError: FC<InputErrorProps> = (props) => (
  <InputErrorWrapper>
    <ErrorMessage {...props} />
  </InputErrorWrapper>
);

const MemoInputError = memo(InputError);

export { InputGroup, MemoInputError as InputError };

export default memo(Input);
