import { cn } from '@/libs/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

export const inputVariants = cva(
  'appearance-none w-full inline-flex items-center outline-none text-sm placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring rounded transition-all',
  {
    variants: {
      variant: {
        outline: 'border border-input hover:border-primary/20 focus-visible:border-primary/40 bg-transparent',
      },
      danger: {
        true: 'border border-destructive ring-1 ring-destructive/40 hover:border-destructive focus-visible:ring-destructive/80 focus-visible:border-destructive',
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

export type InputProps = React.ComponentPropsWithoutRef<'input'> & VariantProps<typeof inputVariants>;

// TODO: Refactor input wrap into a div and handle style on wrapper
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className, type, variant, size, danger, ...rest
  }, ref) => (
    <input
      type={type}
      autoCorrect="off"
      autoComplete="off"
      autoCapitalize="none"
      className={cn(inputVariants({ variant, size, danger }), className)}
      ref={ref}
      {...rest}
    />
  )
  ,
);
