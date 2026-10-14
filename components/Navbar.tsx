"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 w-full border-b border-[#164f44]/10 bg-[#fffaf2]/90 shadow-[0_10px_35px_rgba(22,79,68,0.08)] backdrop-blur-xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-3 motion-safe:duration-700"
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f47d61]/70 to-transparent" />

      <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Paws and Care home"
          className="group relative z-10 rounded-md outline-none transition-transform duration-300 hover:scale-[1.025] focus-visible:ring-2 focus-visible:ring-[#f47d61] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fffaf2]"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/logo1.png"
            alt="Paws and Care"
            width={2172}
            height={724}
            priority
            className="h-auto w-[145px] object-contain transition-opacity duration-300 group-hover:opacity-90 sm:w-[178px]"
          />
        </Link>

        <div className="hidden items-center rounded-full border border-[#164f44]/10 bg-white/70 p-1.5 shadow-sm md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative rounded-full px-4 py-2 text-[13px] font-medium tracking-wide outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#f47d61] lg:px-5 ${
                  isActive
                    ? "bg-[#164f44] text-[#fffaf2] shadow-[0_6px_18px_rgba(22,79,68,0.2)]"
                    : "text-[#164f44]/75 hover:bg-[#f47d61]/10 hover:text-[#c95f47]"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {!isActive && (
                  <span className="absolute inset-x-1/2 bottom-1 h-0.5 w-0 rounded-full bg-[#f47d61] transition-all duration-300 group-hover:inset-x-3 group-hover:w-auto" />
                )}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="relative z-10 flex size-10 items-center justify-center rounded-full border border-[#164f44]/15 bg-white/80 text-[#164f44] shadow-sm outline-none transition-all duration-300 hover:border-[#f47d61]/50 hover:bg-[#f47d61]/10 hover:text-[#c95f47] focus-visible:ring-2 focus-visible:ring-[#f47d61] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffaf2] md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 rounded-full bg-current transition-all duration-200 ${
                isOpen ? "w-0 opacity-0" : "w-5 opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <div
          id="mobile-navigation"
          aria-hidden={!isOpen}
          className={`absolute left-4 right-4 top-[calc(100%+0.75rem)] origin-top rounded-3xl border border-[#164f44]/10 bg-[#fffaf2]/95 p-2 shadow-[0_24px_60px_rgba(22,79,68,0.18)] backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
            isOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-3 scale-[0.98] opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  style={{
                    transitionDelay: isOpen ? `${index * 45}ms` : "0ms",
                  }}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[13px] font-medium tracking-wide outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#f47d61] ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-2 opacity-0"
                  } ${
                    isActive
                      ? "bg-[#164f44] text-[#fffaf2]"
                      : "text-[#164f44]/80 hover:bg-[#f47d61]/10 hover:text-[#c95f47]"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`size-1.5 rounded-full transition-transform duration-300 ${
                      isActive ? "bg-[#f47d61]" : "bg-[#164f44]/20"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
