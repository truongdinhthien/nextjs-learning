'use client';

import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/libs/utils';

type LabelRoot = typeof LabelPrimitive.Root;
type LabelRootProp = React.ComponentPropsWithoutRef<LabelRoot>;

export type LabelRef = React.ElementRef<LabelRoot>;
export type LabelProp = LabelRootProp & VariantProps<typeof labelVariants>;

export const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

export const Label = React.forwardRef<LabelRef, LabelProp>((
  {
    className,
    ...props
  },
  ref,
) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
