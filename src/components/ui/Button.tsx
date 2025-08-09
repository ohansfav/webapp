import { Button as MuiButton, ButtonProps } from '@mui/material';
import { twMerge } from 'tailwind-merge';

interface CustomButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
  variant?: 'primary' | 'outline' | 'contained' | 'outlined' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large';
}

export const Button = ({ 
  className, 
  variant = 'contained', 
  size = 'medium',
  ...props 
}: CustomButtonProps) => {
  const muiVariant = variant === 'primary' ? 'contained' : 
                    variant === 'outline' ? 'outlined' : 
                    variant as 'contained' | 'outlined' | 'text';
  
  const muiSize = size === 'lg' ? 'large' : 
                 size === 'sm' ? 'small' : 
                 size === 'md' ? 'medium' : 
                 size as 'small' | 'medium' | 'large';
  
  return (
    <MuiButton
      variant={muiVariant}
      size={muiSize}
      className={twMerge(
        'px-4 py-2 rounded-md disabled:opacity-50 normal-case',
        variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
        variant === 'outline' && 'border border-blue-500 text-blue-500 hover:bg-blue-50',
        size === 'lg' && 'px-6 py-3 text-lg',
        size === 'sm' && 'px-3 py-1 text-sm',
        className
      )}
      {...props}
    />
  );
};
