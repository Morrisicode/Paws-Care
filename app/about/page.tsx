import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Paws & Care | Paws & Care",
  description:
    "Learn why Paws & Care shares simple, practical information for people caring for pets.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#fbf7ef] text-[#123f37]">
      <section className="relative isolate">
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
        </div>
      </Container>
    </main>
  );
}
