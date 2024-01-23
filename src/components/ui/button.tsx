import { cn } from '@/libs/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground/95',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
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

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
& VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className, variant, size, ...rest
}, ref) => (
  <button
    type="button"
    ref={ref}
    className={cn(buttonVariants({ variant, size }), className)}
    {...rest}
  />
));
