import * as React from "react"

import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        outline: "border border-input hover:border-primary/20",
      },
      danger: {
        true: "border border-destructive  hover:border-destructive focus-visible:ring-1 focus-visible:ring-destructive/40 focus-visible:ring-offset-0",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-5",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
)

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, variant, danger, ...props }, ref) => {
    return (
      <input
        autoCorrect="off"
        autoComplete="off"
        autoCapitalize="none"
        className={cn(inputVariants({ size, variant, danger }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
