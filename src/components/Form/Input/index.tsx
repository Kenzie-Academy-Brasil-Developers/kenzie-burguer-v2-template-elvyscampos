import {
  FieldError,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps {
  label: string;
  type: 'text' | 'email' | 'password';
  register: UseFormRegisterReturn<string>;
  error?:FieldError | undefined; 
}

const Input = ({ label, type, register, error }: IInputProps) => {
  const errorMessage = error?.message;
  return (
    <fieldset>
      <StyledTextField type={type} label={label} {...register} />
      {errorMessage && (
        <StyledParagraph fontColor='red'>{errorMessage}</StyledParagraph>
      )}
    </fieldset>
  );
};

export default Input;
