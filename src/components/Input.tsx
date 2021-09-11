import { FunctionComponent } from 'react';

interface InputProps {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type Props = InputProps;

export const Input: FunctionComponent<Props> = ({ value }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return <input value={value} onChange={handleInputChange} type={'text'} />;
};
