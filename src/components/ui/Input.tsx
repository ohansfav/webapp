import { Input as InputBase, InputProps } from '@mui/base/Input';
import { twMerge } from 'tailwind-merge';

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <InputBase
      className={twMerge(
        'px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
        className
      )}
      {...props}
    />
  );
};
