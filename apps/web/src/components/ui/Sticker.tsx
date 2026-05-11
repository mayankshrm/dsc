import { cn } from '@/lib/utils';

interface StickerProps {
  children: React.ReactNode;
  /** Tilt in degrees, e.g. -6 or 4 */
  rotate?: number;
  /** Visual treatment */
  variant?: 'highlight' | 'primary' | 'accent' | 'ink' | 'paper';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Sticker({
  children,
  rotate = -4,
  variant = 'highlight',
  size = 'md',
  className,
}: StickerProps) {
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={cn(
        'inline-flex items-center border-3 border-ink font-mono font-bold uppercase tracking-[0.2em] shadow-mag-sm',
        'transition-transform duration-200 ease-out hover:scale-110',
        variant === 'highlight' && 'bg-highlight text-ink',
        variant === 'primary' && 'bg-primary text-primary-foreground',
        variant === 'accent' && 'bg-accent text-ink',
        variant === 'ink' && 'bg-ink text-paper',
        variant === 'paper' && 'bg-paper text-ink',
        size === 'sm' && 'px-2 py-1 text-[10px]',
        size === 'md' && 'px-3 py-1.5 text-xs',
        size === 'lg' && 'px-4 py-2 text-sm',
        className,
      )}
    >
      {children}
    </div>
  );
}
