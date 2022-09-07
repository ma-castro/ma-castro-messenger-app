import { FocusEvent, useCallback, useEffect, useRef, useState } from 'react';

import { LogicProps, State } from './types';

const useLogic = ({ onBlur, onFocus, placeholder: placeholderProp }: LogicProps) => {
  const initialState: State = {
    placeholder: placeholderProp || '',
    showLabel: false,
  };
  const [{ placeholder, showLabel }, setState] = useState(initialState);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef?.current?.value) {
      setState((prevState) => ({
        ...prevState,
        showLabel: true,
      }));
    }
  }, []);

  const handleOnBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      if (onBlur) onBlur(e);
      const value = !!inputRef?.current?.value;

      setState((prevState) => ({
        ...prevState,
        showLabel: !value ? false : prevState.showLabel,
        placeholder: !value ? placeholderProp || '' : prevState.placeholder,
      }));
    },
    [setState, onBlur, inputRef, placeholderProp],
  );

  const handleOnFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      if (onFocus) onFocus(e);

      setState((prevState) => ({
        ...prevState,
        showLabel: true,
        placeholder: '',
      }));
    },
    [onFocus, setState],
  );

  const handleFocus = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return {
    handle: {
      focus: handleFocus,
      onBlur: handleOnBlur,
      onFocus: handleOnFocus,
    },
    inputRef,
    placeholder,
    showLabel,
  };
};

export default useLogic;
