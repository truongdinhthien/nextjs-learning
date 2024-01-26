import { cn } from '@/libs/utils';
import { cva } from 'class-variance-authority';
import React from 'react';

export type InputProps = React.ComponentPropsWithoutRef<'input'>;

export const inputVariants = cva(
  'appearance-none w-full inline-flex items-center outline-none text-sm placeholder:text-muted-foreground focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-ring rounded transition-all',
  {
    variants: {
      variant: {
        outline: 'border border-input hover:border-primary/20 focus-visible:border-primary/40 bg-transparent',
      },
      size: {
        sm: 'h-8 px-3',
        md: 'h-10 px-4',
        lg: 'h-12 px-5',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    },
  },
);

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...rest }, ref) => (
    <input
      type={type}
      autoCorrect="off"
      autoComplete="off"
      autoCapitalize="none"
      className={cn(inputVariants(), className)}
      ref={ref}
      {...rest}
    />
  )
  ,
);
