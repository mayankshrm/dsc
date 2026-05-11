import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'relative bg-paper text-foreground border-3 border-ink transition-[transform,box-shadow] duration-200 ease-out',
  {
    variants: {
      variant: {
        // Default: stamped, no shadow until hover
        default:
          'hover:-translate-x-1 hover:-translate-y-1 hover:shadow-mag',
        // Floating: comes with the hard offset shadow already
        floating: 'shadow-mag hover:-translate-x-1 hover:-translate-y-1 hover:shadow-mag-lg',
        // Static: doesn't move on hover (used inside grids where motion is too much)
        static: '',
        // Inverted: ink fill
        inverted: 'bg-ink text-paper',
      },
      tilt: {
        none: '',
        left: '-rotate-1 hover:rotate-0',
        right: 'rotate-1 hover:rotate-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      tilt: 'none',
    },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, tilt, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant, tilt }), className)} {...props} />
  ),
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-2 p-5', className)} {...props} />
  ),
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'font-display uppercase text-2xl leading-[0.95] tracking-tight md:text-3xl',
        className,
      )}
      {...props}
    />
  ),
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('font-serif text-base italic text-ink/70', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('px-5 pb-5', className)} {...props} />
  ),
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-3 border-t-3 border-ink p-5', className)}
      {...props}
    />
  ),
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
