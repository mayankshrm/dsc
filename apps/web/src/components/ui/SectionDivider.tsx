import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

interface SectionDividerProps {
  /** Section number, e.g. "02" */
  index?: string;
  /** Section name, e.g. "CALENDAR" */
  label: string;
  /** Right-side meta, e.g. "DSC // 2026" or "ROLL CALL" — hidden on mobile */
  meta?: string;
  /** Centre decorative mark — defaults to ✦ */
  mark?: string;
  className?: string;
}

/**
 * Static, magazine-spread style section divider.
 * Sits between page sections — gives rhythm without ambient motion.
 *
 * Mobile: [thick rule] · LABEL ✦ [thin rule]   (meta hidden)
 * Desktop: [thick rule] · INDEX / LABEL ... ✦ ... META [thin rule]
 */
export function SectionDivider({
  index,
  label,
  meta,
  mark = '✦',
  className,
}: SectionDividerProps) {
  return (
    <div
      role="separator"
      aria-label={label}
      className={cn('relative border-t-3 border-ink', className)}
    >
      <Container
        className={cn(
          'flex items-center justify-between gap-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink',
          'sm:grid sm:grid-cols-3 sm:py-3 sm:text-[11px]',
        )}
      >
        <span className="min-w-0 truncate sm:justify-self-start">
          {index && <span className="text-ink/40">·&nbsp;{index}&nbsp;/&nbsp;</span>}
          <span>{label}</span>
        </span>
        <span aria-hidden className="shrink-0 text-base text-primary sm:justify-self-center">
          {mark}
        </span>
        {meta && (
          <span className="hidden text-ink/50 sm:inline sm:justify-self-end">{meta}</span>
        )}
      </Container>
      <div aria-hidden className="border-t border-ink/20" />
    </div>
  );
}
