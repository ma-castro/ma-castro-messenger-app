import { FocusEvent, useCallback, useEffect, useState } from 'react';

import { LogicProps, State } from './types';

const useLogic = ({ onBlur, onFocus, placeholder: placeholderProp, ref: inputRef }: LogicProps) => {
  const initialState: State = {
    placeholder: placeholderProp || '',
    showLabel: false,
  };
  const [{ placeholder, showLabel }, setState] = useState(initialState);

  useEffect(() => {
    if (inputRef && 'current' in inputRef) {
      if (inputRef?.current?.value) {
        setState((prevState) => ({
          ...prevState,
          showLabel: true,
        }));
      }
    }
  }, [inputRef]);

  const handleOnBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      if (onBlur) onBlur(e);

      let value: boolean;

      if (inputRef && 'current' in inputRef) {
        if (inputRef?.current?.value) {
          value = !!inputRef?.current?.value;
        }
      }

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
    if (inputRef && 'current' in inputRef) {
      if (inputRef?.current?.value) {
        inputRef.current?.focus();
      }
    }
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
