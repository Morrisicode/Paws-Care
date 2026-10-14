import type { Metadata } from "next";
import { Heart, Mail, PawPrint, Sparkles } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Contact | Paws & Care",
  description: "Ask Paws & Care a question about everyday pet care.",
};

export default function ContactPage() {
  return (
    <main className="relative flex-1 overflow-hidden bg-[#fbf7ef] py-12 text-[#123f37] sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-20 top-24 size-64 rounded-full bg-[#dfeee4]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 size-72 rounded-full bg-[#ffe1d4]/70 blur-3xl" />

      <Container className="relative grid items-stretch gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <section className="relative overflow-hidden rounded-[2rem] bg-[#164f44] p-7 text-white shadow-[0_22px_70px_rgba(22,79,68,0.18)] sm:p-10 lg:p-12">
          <PawPrint
            aria-hidden="true"
            className="absolute -right-6 -top-4 size-32 rotate-12 text-white/5"
          />
          <Sparkles
            aria-hidden="true"
            className="absolute bottom-10 right-10 size-14 text-[#8fc9aa]/35"
          />

          <div className="relative z-10 flex h-full flex-col">
            <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-[#ff9278] ring-1 ring-white/15">
              <Heart className="size-6" fill="currentColor" />
            </span>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#ffad98]">
              Contact us
            </p>
            <h1 className="mt-3 max-w-[10ch] font-serif text-5xl font-bold leading-[0.96] tracking-tight sm:text-6xl">
              Let&apos;s connect for happier pets.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/75 sm:text-base">
              Whether you have a question, feedback, or a caring idea to share,
              we&apos;re here to help make everyday pet care feel a little simpler.
            </p>

            <div className="mt-auto pt-12">
              <div className="flex items-center gap-3 border-t border-white/15 pt-6">
                <span className="grid size-10 place-items-center rounded-full bg-white text-[#164f44]">
                  <Mail className="size-4" />
                </span>
                <span>
                  <strong className="block text-sm font-semibold">A friendly place to start</strong>
                  <span className="text-xs text-white/60">Share your question using the form.</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </Container>
    </main>
  );
}
