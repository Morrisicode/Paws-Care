import Link from "next/link";
import { cacheLife } from "next/cache";

const socialLinks = [
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.264-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0 4.865a4.972 4.972 0 1 0 0 9.944 4.972 4.972 0 0 0 0-9.944Zm0 8.205a3.233 3.233 0 1 1 0-6.466 3.233 3.233 0 0 1 0 6.466Zm6.406-8.405a1.161 1.161 0 1 1-2.322 0 1.161 1.161 0 0 1 2.322 0Z",
  },
  {
    label: "Facebook",
    path: "M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.024 1.792-4.693 4.533-4.693 1.312 0 2.686.235 2.686.235v2.972h-1.513c-1.49 0-1.956.931-1.956 1.887v2.259h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z",
  },
  {
    label: "TikTok",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.11-.01 2.17-.66 2.75-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z",
  },
  {
    label: "Twitter",
    path: "M23.953 4.57a10.016 10.016 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723 10.016 10.016 0 0 1-3.127 1.195A4.92 4.92 0 0 0 11.78 8.299 13.963 13.963 0 0 1 1.64 3.162a4.822 4.822 0 0 0-.666 2.475A4.92 4.92 0 0 0 3.162 9.73a4.904 4.904 0 0 1-2.228-.616v.06A4.923 4.923 0 0 0 4.88 14a4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417A9.867 9.867 0 0 1 1.2 19.594 10.23 10.23 0 0 1 0 19.524a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.209 0-.42-.016-.63A9.935 9.935 0 0 0 24 4.59Z",
  },
];

async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-[#164f44] px-5 py-9 text-center text-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">
          Quick Links
        </h2>
        <nav
          aria-label="Footer navigation"
          className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
        >
          <Link href="/" className="text-sm text-amber-100 transition-colors hover:text-[#ffad98]">
            Home
          </Link>
          <Link href="/about" className="text-sm text-amber-100 transition-colors hover:text-[#ffad98]">
            About Us
          </Link>
          <Link href="/contact" className="text-sm text-amber-100 transition-colors hover:text-[#ffad98]">
            Contact Us
          </Link>
        </nav>

        <section className="mt-8 w-full border-t border-white/15 pt-7" aria-labelledby="footer-contact-heading">
          <h2 id="footer-contact-heading" className="text-sm font-semibold uppercase tracking-[0.18em]">
            Contact Us
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#footer-contact-heading"
                aria-label={social.label}
                title={social.label}
                className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/10 text-amber-100 outline-none transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f47d61] hover:bg-[#f47d61] hover:text-white focus-visible:ring-2 focus-visible:ring-[#ffad98] focus-visible:ring-offset-2 focus-visible:ring-offset-[#164f44]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[18px] fill-current">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </section>

        <p className="mt-7 w-full border-t border-white/15 pt-5 text-xs text-white/65">
          &copy; {year} Paws &amp; Care. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
