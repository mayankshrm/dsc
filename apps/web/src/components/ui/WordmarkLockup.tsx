import { cn } from '@/lib/utils';

interface WordmarkLockupProps {
  /** Compact = single-line for header. Stacked = multi-line for hero/footer. */
  variant?: 'compact' | 'stacked' | 'mega';
  className?: string;
}

/**
 * The bilingual दिल्ली + SKATING COMMUNITY brand mark.
 * Single source of truth: never compose this lockup ad-hoc anywhere else.
 * Devanagari and Latin must always weigh equally — that's enforced here.
 */
export function WordmarkLockup({ variant = 'compact', className }: WordmarkLockupProps) {
  if (variant === 'mega') {
    return (
      <div className={cn('flex flex-col leading-[0.85]', className)}>
        <span className="font-deva text-mega font-black text-ink" lang="hi">
          दिल्ली
        </span>
        <span className="font-display text-mega uppercase tracking-headline text-ink">
          Skating
        </span>
        <span className="flex items-baseline gap-3 font-display text-mega uppercase tracking-headline">
          <span className="text-primary">Community</span>
          <span className="font-mono text-base text-ink/60">/ DSC</span>
        </span>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={cn('flex flex-col leading-[0.9]', className)}>
        <span className="font-deva text-3xl font-black text-ink md:text-4xl" lang="hi">
          दिल्ली
        </span>
        <span className="font-display text-3xl uppercase tracking-tight text-ink md:text-4xl">
          Skating Community
        </span>
      </div>
    );
  }

  // compact
  return (
    <div className={cn('flex items-baseline gap-2', className)}>
      <span className="font-deva text-2xl font-black leading-none text-ink" lang="hi">
        दिल्ली
      </span>
      <span className="font-display text-2xl uppercase leading-none tracking-tight text-ink">
        Skating
      </span>
      <span className="border-2 border-ink bg-paper px-1.5 py-0.5 font-mono text-[10px] font-bold leading-none tracking-widest text-ink">
        DSC
      </span>
    </div>
  );
}
