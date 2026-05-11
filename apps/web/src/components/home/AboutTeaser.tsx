import Link from 'next/link';
import { GraduationCap, Heart, Users } from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { Sticker } from '@/components/ui/Sticker';

const FEATURES = [
  {
    icon: Users,
    title: 'All ages, all styles',
    body: 'Inline, quad, skateboard, hoverboard. Kids, teens, adults, families. Everyone rolls together.',
    bg: 'bg-paper',
    tilt: '-rotate-1',
  },
  {
    icon: Heart,
    title: 'No fees, no fuss',
    body: 'Just show up. We coordinate over Instagram and a simple Google Form. Always has been, always will be.',
    bg: 'bg-accent',
    tilt: 'rotate-1',
  },
  {
    icon: GraduationCap,
    title: 'Workshops for institutions',
    body: 'We run booked sessions for schools and colleges across Delhi-NCR. Reach out if you want one for yours.',
    bg: 'bg-paper',
    tilt: '-rotate-1',
  },
];

export function AboutTeaser() {
  return (
    <>
      <SectionDivider index="03" label="The Crew" meta="दिल्ली" />
      <section className="relative bg-secondary/30 py-14 md:py-24">
        <Container>
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="font-display text-jumbo uppercase leading-[0.85] tracking-headline text-ink">
                What is <span className="italic text-primary">DSC?</span>
              </h2>
              <p className="mt-6 max-w-md font-serif text-xl italic leading-snug text-ink/80">
                A community-run group of Delhi skaters that meets on weekends. No coaching academy,
                no membership card — just regular meetups and good company on wheels.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="ink">
                  <Link href="/about">Read our story →</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Book a workshop</Link>
                </Button>
              </div>
            </div>

            <div className="col-span-12 grid gap-5 lg:col-span-7 md:grid-cols-2">
              {FEATURES.map(({ icon: Icon, title, body, bg, tilt }, i) => (
                <div
                  key={title}
                  className={`relative flex flex-col gap-3 border-3 border-ink p-6 ${bg} ${tilt} transition-transform hover:rotate-0 hover:shadow-mag ${
                    i === 0 ? 'md:translate-y-4' : ''
                  } ${i === 1 ? 'md:row-span-2' : ''} ${i === 2 ? 'md:-translate-y-2' : ''}`}
                >
                  <div className="inline-flex size-10 items-center justify-center border-2 border-ink bg-ink text-paper">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-2xl uppercase leading-tight tracking-tight text-ink">
                    {title}
                  </h3>
                  <p className="font-serif text-base italic text-ink/80">{body}</p>
                </div>
              ))}
              <Sticker rotate={-8} variant="primary" size="md" className="hidden self-start md:inline-flex">
                ★ Since 2019
              </Sticker>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
