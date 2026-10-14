"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => submitted && setSubmitted(false)}
      className="rounded-[2rem] border border-[#164f44]/10 bg-white p-5 shadow-[0_22px_70px_rgba(22,79,68,0.1)] sm:p-8"
    >
      <div className="mb-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f47d61]">
          Send a note
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-[#123f37]">
          Ask us a question
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#54756e]">
          Tell us what is on your mind and we&apos;ll point you in the right direction.
        </p>
      </div>

      {submitted && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 flex items-start gap-3 rounded-2xl border border-[#247566]/15 bg-[#edf7f3] p-4 text-sm text-[#164f44]"
        >
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#247566]" />
          <span>
            <strong className="block font-semibold">Thanks for reaching out!</strong>
            This demo form has received your message locally.
          </span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-semibold text-[#315f56]">
          Full name <span className="sr-only">required</span>
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            className="h-12 rounded-xl border border-[#164f44]/15 bg-[#fbf7ef]/65 px-4 text-sm font-normal text-[#123f37] outline-none transition focus:border-[#247566] focus:ring-3 focus:ring-[#247566]/12"
          />
        </label>

        <label className="grid gap-2 text-xs font-semibold text-[#315f56]">
          Email address <span className="sr-only">required</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="h-12 rounded-xl border border-[#164f44]/15 bg-[#fbf7ef]/65 px-4 text-sm font-normal text-[#123f37] outline-none transition focus:border-[#247566] focus:ring-3 focus:ring-[#247566]/12"
          />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-xs font-semibold text-[#315f56]">
        Message topic <span className="sr-only">required</span>
        <select
          required
          name="topic"
          defaultValue=""
          className="h-12 rounded-xl border border-[#164f44]/15 bg-[#fbf7ef]/65 px-4 text-sm font-normal text-[#123f37] outline-none transition focus:border-[#247566] focus:ring-3 focus:ring-[#247566]/12"
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option value="daily-care">Daily care</option>
          <option value="nutrition">Food and nutrition</option>
          <option value="wellbeing">Health and wellbeing</option>
          <option value="other">Something else</option>
        </select>
      </label>

      <label className="mt-5 grid gap-2 text-xs font-semibold text-[#315f56]">
        Your question <span className="sr-only">required</span>
        <textarea
          required
          name="message"
          rows={6}
          maxLength={500}
          placeholder="How can we help?"
          className="resize-none rounded-xl border border-[#164f44]/15 bg-[#fbf7ef]/65 px-4 py-3 text-sm font-normal leading-6 text-[#123f37] outline-none transition focus:border-[#247566] focus:ring-3 focus:ring-[#247566]/12"
        />
      </label>

      <button
        type="submit"
        className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#164f44] px-6 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(22,79,68,0.2)] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20685a] focus-visible:ring-2 focus-visible:ring-[#f47d61] focus-visible:ring-offset-2 active:translate-y-0"
      >
        Send question
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
