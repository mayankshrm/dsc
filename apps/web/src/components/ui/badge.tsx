import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center font-mono text-[10px] font-bold uppercase tracking-[0.15em] transition-colors',
  {
    variants: {
      variant: {
        default: 'border-2 border-ink bg-paper px-2 py-0.5 text-ink',
        accent: 'border-2 border-ink bg-accent px-2 py-0.5 text-ink',
        primary: 'border-2 border-ink bg-primary px-2 py-0.5 text-primary-foreground',
        ink: 'bg-ink px-2 py-0.5 text-paper',
        outline: 'border-2 border-ink/30 px-2 py-0.5 text-ink/70',
        // "Tape" — torn-edge sticker look
        tape: 'bg-highlight px-2 py-0.5 text-ink shadow-mag-sm -rotate-2',
        secondary: 'border-2 border-ink bg-secondary px-2 py-0.5 text-ink',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
