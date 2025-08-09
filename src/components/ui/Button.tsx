import { Button as ButtonBase, ButtonProps } from '@mui/base/Button';
import { twMerge } from 'tailwind-merge';

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <ButtonBase
      className={twMerge(
        'px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
};
