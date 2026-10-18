import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Paws & Care | Paws & Care",
  description:
    "Learn why Paws & Care shares simple, practical information for people caring for pets.",
};

export default function AboutPage() {
  const datas = [
    {
      id: 1,
      label: "Fresh water",
      copy: "Keep clean water available.",
      image: "/3.avif",
    },
    {
      id: 2,
      label: "Right nutrition",
      copy:
        "Choose food that suits your pet and follow feeding advice from a veterinarian.",
      image: "/nutrition-card.avif",
    },
    {
      id: 3,
      label: "Daily movement",
      copy: "Make time for safe exercise, play, rest, and gentle attention.",
      image: "/1.avif",
    },
    {
      id: 4,
      label: "A safe home",
      copy: "Keep your pet’s living area clean and free from hazards.",
      image: "/4.avif",
    },
    {
      id: 5,
      label: "Health support",
      copy:
        "Arrange regular veterinary checkups and ask for help when you notice a concern.",
      image: "/2.avif",
    },
  ];
  return (
    <main className="flex-1 bg-[#fbf7ef] text-[#123f37]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.9),transparent_35%),linear-gradient(110deg,#fbf7ef_0%,#fbf7ef_48%,#f1eadf_100%)]" />

        <div className="relative mx-auto grid min-h-[650px] w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:min-h-[610px] lg:grid-cols-[46%_54%] lg:px-8 lg:py-20">
          <div className="relative z-20 max-w-xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-4 motion-safe:duration-700">
            <h1 className="max-w-[10ch] font-serif text-[clamp(3rem,7vw,5.7rem)] font-bold leading-[0.93] tracking-[-0.045em] text-[#123f37]">
              About Paws &amp; Care
            </h1>
            <p className="mt-6 max-w-[52ch] text-[15px] leading-7 text-[#315f56] sm:text-base">
              Learn why Paws &amp; Care shares simple, practical information for
              people caring for pets.
            </p>
          </div>

          <div className="relative z-10 min-h-[330px] overflow-hidden rounded-[3rem_3rem_1.5rem_1.5rem] shadow-[0_30px_80px_rgba(22,79,68,0.16)] motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-700 sm:min-h-[420px] lg:absolute lg:inset-y-0 lg:right-0 lg:min-h-0 lg:w-[57%] lg:rounded-none lg:shadow-none lg:[clip-path:ellipse(82%_92%_at_82%_50%)]">
            <Image
              src="/pet-owner-story.avif"
              alt="A pet owner sitting outside and embracing her golden retriever"
              fill
              priority
              sizes="(min-width: 1024px) 57vw, 100vw"
              className="object-cover object-[58%_center] lg:object-[61%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#123f37]/10 via-transparent to-white/10" />
          </div>

          <Sparkles
            aria-hidden="true"
            className="absolute bottom-24 left-[38%] z-20 hidden size-9 rotate-[-10deg] text-[#4f9887] lg:block"
            strokeWidth={1.7}
          />
          <Sparkles
            aria-hidden="true"
            className="absolute right-6 top-10 z-20 hidden size-11 rotate-12 text-[#f47d61] drop-shadow-sm sm:block lg:right-10 lg:top-16"
            strokeWidth={1.6}
          />
        </div>
      </section>

      <Container className="">
        <div className=" py-5 ">
          <h1 className=" text-center text-2xl lg:text-3xl underline pb-10 pt-5 font-bold">
            Small steps. Caring homes.
          </h1>

          <div className="flex item-center justify-center gap-15 flex-col md:flex-row  lg:px-10 ">
            <img
              src="/5.avif"
              alt=" about image"
              width={400}
              height={400}
              className="rounded-lg shadow-md"
            />
            <div className="my-auto">
              {" "}
              <p className="text-left text-sm ">
                Paws & Care is a simple learning project built around one idea:
                pets do better when the people who care for them have clear,
                useful information. We make everyday pet-care topics easier to
                understand, one step at a time.
              </p>
              <h3 className="text-lg  pt-5 font-semibold text-center md:text-left">
                What we believe
              </h3>
              <h3 className=" uppercase font-bold text-sm text-center md:text-left">
                Care means paying attention
              </h3>
              <p className="text-left text-sm pt-5  ">
                Every pet has its own personality and needs. A steady routine,
                patience, safe surroundings, and time together help pets feel
                secure. When something seems wrong, a veterinarian is the right
                person to give medical advice.
              </p>
              <div className="flex item-center justify-center md:justify-start   pt-5">
                <Button className="text-sm  px-8 py-5 hover:bg-[#123f37] bg-[#058e75] mt-5  hover:scale-103 ease duration-150">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>

          <section
            aria-labelledby="care-principles-heading"
            className="mx-auto max-w-6xl pb-28 pt-16 sm:pb-36 lg:pt-24"
          >
            <div className="mx-auto mb-10 max-w-2xl px-4 text-center sm:mb-14">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#e85f47]">
                Everyday pet care
              </p>
              <h2
                id="care-principles-heading"
                className="font-serif text-3xl font-bold tracking-[-0.03em] text-[#123f37] sm:text-4xl lg:text-5xl"
              >
                Our simple care principles
              </h2>
            </div>

            <div
              className={`${styles.stack} flex flex-col gap-5 px-2 sm:px-5 lg:px-10`}
            >
              {datas.map((data, index) => (
                <article
                  key={data.id}
                  className={`${styles.stackCard} sticky grid overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#123f37] text-[#fffaf2] shadow-[0_24px_70px_rgba(18,63,55,0.2)] md:grid-cols-[0.9fr_1.1fr]`}
                  style={
                    {
                      "--stack-mobile-top": `${92 + index * 10}px`,
                      "--stack-compact-top": `${72 + index * 8}px`,
                      "--stack-desktop-top": `${172 + index * 17}px`,
                      zIndex: 30 + index,
                    } as CSSProperties
                  }
                >
                  <div
                    className={`${styles.cardCopy} flex flex-col justify-center p-7 sm:p-10 lg:p-12`}
                  >
                    <div className="mb-7 flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-full bg-[#f47d61] text-xs font-bold text-white shadow-sm">
                        {String(data.id).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#a8d7c8]">
                        Care principle
                      </span>
                    </div>
                    <h3 className="max-w-[12ch] font-serif text-3xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                      {data.label}
                    </h3>
                    <p className="mt-5 max-w-[48ch] text-sm leading-7 text-[#e5f1ed] sm:text-base">
                      {data.copy}
                    </p>
                  </div>

                  <div
                    className={`${styles.cardMedia} relative overflow-hidden`}
                  >
                    <Image
                      src={data.image}
                      alt={`${data.label} for a happy, healthy pet`}
                      fill
                      sizes="(min-width: 1024px) 540px, (min-width: 768px) 55vw, 100vw"
                      className="object-cover transition-transform duration-500 motion-safe:hover:scale-[1.02]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#123f37]/20 via-transparent to-white/5 md:bg-gradient-to-r md:from-[#123f37]/20 md:to-transparent"
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
