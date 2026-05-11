'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/lib/seo';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`DSC enquiry from ${name || 'website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink/60"
        >
          · Your name
        </label>
        <Input
          id="name"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink/60"
        >
          · Email
        </label>
        <Input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink/60"
        >
          · Message
        </label>
        <Textarea
          id="message"
          required
          rows={6}
          placeholder="Tell us a bit about why you're reaching out — workshop booking, joining an event, press, etc."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send message →
      </Button>
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/50">
        Submitting opens your email app with the message pre-filled. Prefer Instagram? DM{' '}
        <a
          href={siteConfig.socials.contactInstagram}
          target="_blank"
          rel="noreferrer noopener"
          className="border-b-2 border-primary text-primary"
        >
          {siteConfig.socials.contactHandle}
        </a>
        .
      </p>
    </form>
  );
}
