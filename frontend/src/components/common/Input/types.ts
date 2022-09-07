import { InputHTMLAttributes } from 'react';
import { FieldErrors, FieldName, Message } from 'react-hook-form';

export declare type FieldValuesFromFieldErrors<TFieldErrors> = TFieldErrors extends FieldErrors<
  infer TFieldValues
>
  ? TFieldValues
  : never;

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export type State = {
  placeholder: string;
  showLabel: boolean;
};

export type ContainerProps = {
  isError?: Props['error'];
};

export type InputErrorProps = {
  errors?: FieldErrors;
  name: FieldName<FieldValuesFromFieldErrors<FieldErrors>>;
  message?: Message;
};

export type LogicProps = InputHTMLAttributes<HTMLInputElement>;
