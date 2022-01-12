import React, { InputHTMLAttributes } from 'react';

import { Validations } from '../Form';

export type MaskFunction = (rawValue: string) => string[];
export type Mask = boolean | RegExp | string | MaskFunction;
export type Validate =
  | typeof Validations.Required
  | typeof Validations.CPF
  | typeof Validations.CEP
  | typeof Validations.Date
  | typeof Validations.MinLength
  | typeof Validations.MaxLength
  | typeof Validations.Email;
export type CustomValidate =
  | ((param?: { value: string }) => string)
  | { validate: Validate; error: string };

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  label?: string;
  helperText?: string;
  descriptionLabel?: string;
  required?: boolean;
  placeholder?: string;
  type?: 'email' | 'text' | 'tel' | 'number' | 'password' | 'search';
  error?: string;
  id?: string;
  name?: string;
  validate?: Validate | CustomValidate | Array<Validate | CustomValidate>;
  mask?: Mask | Mask[];
  onClean?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  minLength?: number;
  maxLength?: number;
  skin?: 'default' | 'dark';
  theme?: {
    spacing?: {};
    colors?: {};
    baseFontSize?: number;
  };
}

export default class Input extends React.Component<InputProps> {}
