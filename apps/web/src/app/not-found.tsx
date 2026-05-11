import Link from 'next/link';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Sticker } from '@/components/ui/Sticker';

export default function NotFound() {
  return (
    <Container className="py-24 text-center md:py-32">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/50">
        404 · OFF THE GRID
      </p>
      <h1 className="mt-6 font-display text-mega uppercase leading-[0.85] tracking-headline text-ink">
        Off the <span className="text-primary italic">rails.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-md font-serif text-xl italic text-ink/80">
        The page you were looking for has skated away. Try the home page or check what events are
        coming up.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Button asChild size="lg">
          <Link href="/">← Home</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/events">See events →</Link>
        </Button>
      </div>
      <div className="mt-12 flex justify-center">
        <Sticker rotate={-5} variant="highlight" size="lg">
          BAILED ¯\_(ツ)_/¯
        </Sticker>
      </div>
    </Container>
  );
}
