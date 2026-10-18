import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  PawPrint,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "10K+", label: "Happy pets", icon: PawPrint },
  { value: "8K+", label: "Loving pet parents", icon: Heart },
  { value: "12+", label: "Years of care", icon: UsersRound },
  { value: "4.9/5", label: "Trusted by families", icon: Star },
];

const careCards = [
  {
    heading: "Fresh food and water",
    copy: "Give your pet clean drinking water and food made for its age and needs.",
    linkLabel: "Read about daily care",
    href: "/about",
    image: "/nutrition-card.avif",
    imageAlt: "An orange cat eating beside a bowl of fresh water",
  },
  {
    heading: "Movement and play",
    copy: "Walks, play, and safe activity help pets use their energy and stay engaged.",
    linkLabel: "Explore the About page",
    href: "/about",
    image: "/exercise-card.avif",
    imageAlt: "A golden retriever running toward a ball in a park",
  },
  {
    heading: "Health checkups",
    copy: "A veterinarian can help prevent problems and answer questions about your pet.",
    linkLabel: "Contact us",
    href: "/contact",
    image: "/2.avif",
    imageAlt: "A veterinarian giving a dog a routine vaccination",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fbf7ef] text-[#123f37]">
      <section className="relative isolate">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.9),transparent_35%),linear-gradient(110deg,#fbf7ef_0%,#fbf7ef_48%,#f1eadf_100%)]" />

        <Container className="relative grid min-h-[720px] items-center gap-8 pb-36 pt-20 sm:pt-24 lg:min-h-[610px] lg:grid-cols-[46%_54%] lg:pb-28 lg:pt-20">
          <div className="relative z-20 max-w-xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-4 motion-safe:duration-700">
            <h1 className="max-w-[11ch] font-serif text-[clamp(3rem,7vw,5.7rem)] font-bold leading-[0.93] tracking-[-0.045em] text-[#123f37]">
              Good care starts with the little things.
            </h1>

            <p className="mt-6 max-w-[58ch] text-[15px] leading-7 text-[#315f56] sm:text-base">
              Food, fresh water, gentle attention, and regular checkups can make
              a big difference in a pet&apos;s life. Find simple reminders to
              help your dog or cat feel safe, healthy, and loved.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#care-guide"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f47d61] px-6 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(244,125,97,0.3)] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e86d52] hover:shadow-[0_16px_36px_rgba(244,125,97,0.4)] focus-visible:ring-2 focus-visible:ring-[#164f44] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf7ef] active:translate-y-0"
              >
                Explore the care guide
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#164f44]/30 bg-white/60 px-6 text-sm font-semibold text-[#164f44] outline-none backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#164f44] hover:bg-[#164f44] hover:text-white focus-visible:ring-2 focus-visible:ring-[#f47d61] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf7ef] active:translate-y-0"
              >
                Ask us a question
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative z-10 min-h-[330px] overflow-hidden rounded-[3rem_3rem_1.5rem_1.5rem] shadow-[0_30px_80px_rgba(22,79,68,0.16)] motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-700 sm:min-h-[420px] lg:absolute lg:inset-y-0 lg:right-0 lg:min-h-0 lg:w-[57%] lg:rounded-none lg:shadow-none lg:[clip-path:ellipse(82%_92%_at_82%_50%)]">
            <Image
              src="/hero-pets.avif"
              alt="A golden retriever and an orange-and-white cat relaxing together on a sofa"
              fill
              priority
              sizes="(min-width: 1024px) 57vw, 100vw"
              className="object-cover object-[73%_center] lg:object-[72%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#123f37]/10 via-transparent to-white/10" />
          </div>

          <PawPrint
            aria-hidden="true"
            className="absolute right-[48%] top-10 z-20 hidden size-12 rotate-[-18deg] fill-[#f47d61]/10 text-[#f47d61] lg:block"
            strokeWidth={1.7}
          />
          <Heart
            aria-hidden="true"
            className="absolute right-7 top-16 z-20 hidden size-12 rotate-12 text-white drop-shadow-md lg:block"
            strokeWidth={1.6}
          />
          <Sparkles
            aria-hidden="true"
            className="absolute bottom-40 left-[42%] z-20 hidden size-9 text-[#4f9887] lg:block"
            strokeWidth={1.7}
          />
        </Container>

        <Container className="relative z-30 -mt-24 pb-6 sm:pb-8 lg:-mt-20 lg:pb-8">
          <div className="grid grid-cols-2 overflow-hidden rounded-[1.75rem] border border-[#164f44]/10 bg-white/90 p-2 shadow-[0_20px_55px_rgba(22,79,68,0.13)] backdrop-blur-xl lg:grid-cols-4 lg:p-3">
            {stats.map(({ value, label, icon: Icon }, index) => (
              <div
                key={label}
                className={`flex min-h-24 items-center gap-3 px-3 py-4 sm:px-5 ${
                  index % 2 === 0 ? "border-r border-[#164f44]/10" : ""
                } ${index < 2 ? "border-b border-[#164f44]/10 lg:border-b-0" : ""} ${
                  index > 0 ? "lg:border-l lg:border-[#164f44]/10" : ""
                } lg:border-r-0`}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#fff0e9] text-[#f47d61] sm:size-12">
                  <Icon
                    className="size-5 sm:size-6"
                    fill={index === 1 || index === 3 ? "currentColor" : "none"}
                  />
                </span>
                <span>
                  <strong className="block font-serif text-xl leading-none text-[#123f37] sm:text-2xl">
                    {value}
                  </strong>
                  <span className="mt-1 block text-[10px] font-medium text-[#54756e] sm:text-xs">
                    {label}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-5 max-w-4xl   px-5 py-7 text-center sm:mt-12 sm:px-8 sm:py-9">
            <h1 className="font-serif text-2xl font-bold tracking-[-0.025em] text-[#123f37] sm:text-3xl lg:text-4xl">
              A happier day for every pet
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#55736d] sm:text-base sm:leading-7">
              Caring for a pet is a daily promise. You do not need to know
              everything at once. Start with the basics, notice how your pet is
              feeling, and ask a veterinarian when you are concerned.
            </p>
          </div>

          <section
            id="care-guide"
            aria-label="Pet care guide"
            className="mx-auto max-w-6xl scroll-mt-28 pt-8 sm:pt-10 lg:pt-12"
          >
            <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
              {careCards.map((card, index) => (
                <article
                  key={card.heading}
                  className="group flex min-h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#164f44]/10 bg-white shadow-[0_14px_40px_rgba(22,79,68,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#164f44]/20 hover:shadow-[0_20px_50px_rgba(22,79,68,0.13)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e8eee8]">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className={`object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] ${
                        index === 2 ? "object-[center_36%]" : "object-center"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#123f37]/25 via-transparent to-white/5" />
                    <span
                      aria-hidden="true"
                      className="absolute left-4 top-4 grid size-9 place-items-center rounded-full border border-white/60 bg-white/90 text-[11px] font-bold tracking-[0.12em] text-[#164f44] shadow-sm backdrop-blur"
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h2 className="font-serif text-[1.45rem] font-bold leading-tight tracking-[-0.025em] text-[#123f37] lg:text-[1.6rem]">
                      {card.heading}
                    </h2>
                    <p className="mt-2.5 text-sm leading-6 text-[#55736d]">
                      {card.copy}
                    </p>
                    <Link
                      href={card.href}
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-md text-[13px] font-semibold text-[#164f44] outline-none transition-colors hover:text-[#dc654c] focus-visible:ring-2 focus-visible:ring-[#f47d61] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
                    >
                      {card.linkLabel}
                      <span className="grid size-7 place-items-center rounded-full bg-[#fff0e9] text-[#e26a50] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#f47d61] group-hover:text-white">
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="pt-5 mt-5">
            <h1 className="text-2xl md:text-3xl font-bold text-[#123f37] text-center">
              Have a pet-care question?
            </h1>
            <p className="text-sm text-center pt-5">
              Send us a message. We are happy to point you toward helpful
              general information.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button className="text-sm  px-8 py-5 hover:bg-[#123f37] bg-[#058e75] mt-5  hover:scale-103 ease duration-150">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
