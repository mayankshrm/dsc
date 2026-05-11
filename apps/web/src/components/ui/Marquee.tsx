import { cn } from '@/lib/utils';

interface MarqueeProps {
  items: string[];
  className?: string;
  /** Visual treatment */
  variant?: 'ink' | 'paper' | 'primary' | 'accent';
  /** Speed: slower marquee for dividers, fast for hero ribbons */
  speed?: 'slow' | 'fast';
  /** Vertical padding */
  size?: 'sm' | 'md' | 'lg';
}

export function Marquee({
  items,
  className,
  variant = 'ink',
  speed = 'slow',
  size = 'md',
}: MarqueeProps) {
  // Triplicate so the loop stays seamless even at slow speeds
  const stream = [...items, ...items, ...items];

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden border-y-3 border-ink',
        variant === 'ink' && 'bg-ink text-paper',
        variant === 'paper' && 'bg-paper text-ink',
        variant === 'primary' && 'bg-primary text-primary-foreground',
        variant === 'accent' && 'bg-accent text-ink',
        size === 'sm' && 'py-1 sm:py-1.5',
        size === 'md' && 'py-2 sm:py-3',
        size === 'lg' && 'py-3 sm:py-5',
        className,
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          'flex w-max items-center gap-8',
          speed === 'slow' ? 'animate-marquee' : 'animate-marquee-fast',
        )}
      >
        {stream.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn(
              'inline-flex shrink-0 items-center gap-8 font-display uppercase tracking-wider',
              size === 'sm' && 'text-sm sm:text-base',
              size === 'md' && 'text-lg sm:text-2xl',
              size === 'lg' && 'text-2xl sm:text-4xl',
            )}
          >
            <span>{item}</span>
            <span aria-hidden className="opacity-60">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
