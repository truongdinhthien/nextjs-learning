import { cn } from '@/libs/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';

export const buttonVariants = cva(
  'inline-flex items-center outline-none justify-center whitespace-nowrap text-sm font-medium focus-visible:ring-2 focus-visible:ring-ring transition-all',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground/95',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground focus-visible:border-primary/40 ',
      },
      size: {
        sm: 'h-8 rounded px-3',
        md: 'h-10 rounded px-4',
        lg: 'h-12 rounded px-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  className, variant, size, ...rest
}, ref) => (
  <button
    type="button"
    ref={ref}
    className={cn(buttonVariants({ variant, size }), className)}
    {...rest}
  />
));
