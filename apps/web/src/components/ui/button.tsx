import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'font-mono text-xs font-bold uppercase tracking-[0.15em]',
    'border-3 border-ink',
    'transition-[transform,box-shadow] duration-150 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  ].join(' '),
  {
    variants: {
      variant: {
        // Primary: hot orange, hard-offset shadow, lifts on hover
        default:
          'bg-primary text-primary-foreground shadow-mag hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-mag-lg active:translate-x-1 active:translate-y-1 active:shadow-none',
        // Accent: acid lime
        accent:
          'bg-accent text-accent-foreground shadow-mag hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-mag-lg active:translate-x-1 active:translate-y-1 active:shadow-none',
        // Ink: filled with near-black, paper text
        ink:
          'bg-ink text-paper shadow-mag-primary hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none',
        // Outline: paper bg, ink border, paints primary on hover
        outline:
          'bg-paper text-ink hover:bg-primary hover:text-primary-foreground',
        // Ghost: no border, text-only with underline animation
        ghost:
          'border-transparent text-ink hover:bg-ink/5',
        // Destructive
        destructive:
          'bg-destructive text-destructive-foreground shadow-mag hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none',
        // Link: text only
        link:
          'border-transparent text-primary underline underline-offset-4 hover:no-underline',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-10 px-4 py-2 text-[10px]',
        lg: 'h-14 px-8 py-4 text-sm',
        xl: 'h-16 px-10 py-5 text-base',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
