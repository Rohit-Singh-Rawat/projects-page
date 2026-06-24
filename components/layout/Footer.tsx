import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Navigation links for the footer
const NAV_LINKS = [
  { label: 'OUR STORY', href: '/our-story/' },
  { label: 'OUR PROJECTS', href: '/our-projects/' },
  { label: 'BLOGS', href: '/blog/', target: '_blank', rel: 'noopener noreferrer' },
  { label: 'MEDIA', href: '/media/' },
  { label: 'EVENTS', href: '/events/' },
  { label: 'CAREERS', href: '/careers/' },
  { label: 'ENQUIRE', href: '/enquire/' },
  { label: 'PARTNER WITH US', href: '/partner/' },
];

// Social media links and icons
const SOCIALS = [
  {
    href: 'https://www.facebook.com/ASBLIndia',
    img: 'https://cdn.asbl.in/asbl.in/web/footer/footer_facebook.svg',
    alt: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/asblindia/',
    img: 'https://cdn.asbl.in/asbl.in/web/footer/footer_instagram.svg',
    alt: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/company/asblindia',
    img: 'https://cdn.asbl.in/asbl.in/web/footer/footer_linkedin.svg',
    alt: 'LinkedIn',
  },
  {
    href: 'https://www.youtube.com/channel/UCbqY0YzIVLhIbCaFMtWijOQ',
    img: 'https://cdn.asbl.in/asbl.in/web/footer/footer_youtube.svg',
    alt: 'YouTube',
  },
  {
    href: 'https://twitter.com/AsblIndia',
    img: 'https://cdn.asbl.in/asbl.in/web/footer/Twitter-icon-Footer.svg',
    alt: 'Twitter/X',
  },
];

// Bottom utility links
const FOOTER_LINKS = [
  { label: 'Cookies & Privacy Policy', href: '/privacy/' },
  { label: 'Terms & Conditions', href: '/terms-conditions/' },
  { label: 'Refunds / Cancellations', href: '/refund-cancellation/' },
];

export function Footer() {
  return (
    <footer
      id="$FOOTER$VIEW"
      className="overflow-hidden bg-black py-16"
    >
      <div className="container mx-auto flex items-center justify-center max-md:flex-col max-md:items-start max-md:gap-5">
        <nav className="flex flex-col max-md:mx-[5%] gap-1">
          {NAV_LINKS.map(({ label, href, target, rel }) => (
            <a
              key={label}
              href={href}
              target={target}
              rel={rel}
              className="font-poppins text-4xl leading-relaxed font-normal tracking-widest text-white transition-opacity hover:opacity-70 max-md:text-2xl"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center justify-center gap-24 max-md:w-full max-md:gap-12 max-md:pb-8">
          {/* Logo, responsive with <picture> */}
          <div className="relative">
            <picture>
              <source
                srcSet="https://cdn.asbl.in/asbl.in/web/footer/ASBL-Footer.webp"
                media="(min-width: 916px)"
              />
              <source
                srcSet="https://cdn.asbl.in/asbl.in/mobile/footer/ASBL-footer-new.webp"
                media="(max-width: 915px)"
              />
              {/* Default image as fallback */}
              <img
                alt="ASBL Footer Logo"
                width={600}
                height={200}
                className="relative -right-24 w-[40vw] max-md:right-0 max-md:w-88"
                src="https://cdn.asbl.in/asbl.in/web/footer/ASBL-Footer.webp"
              />
            </picture>
          </div>
          {/* Socials */}
          <div className="flex items-center gap-5 ml-48 pb-12 max-md:ml-0 max-md:pb-0">
            {SOCIALS.map(({ href, img, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 flex items-center"
                aria-label={alt}
              >
                {/* use img for external icon to allow next/image optimization to skip */}
                <img
                  alt={alt}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                  src={img}
                  loading="lazy"
                  decoding="async"
                  style={{ color: "transparent" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="mx-auto w-[85%] border-white opacity-100 mt-16 max-md:mt-10" />

      <div className="flex justify-center">
        <div className="flex items-center justify-center gap-12 pt-8 max-md:flex-col max-md:gap-5 max-md:px-5 max-md:pt-7 w-full">
          <p className="hidden text-xs font-normal text-white max-md:block text-center">
            © ASBL ALL RIGHTS RESERVED
          </p>
          <div className="hidden h-10 w-0.5 bg-white max-md:hidden"></div>
          <div className="flex items-center gap-5 max-md:flex-wrap max-md:justify-center">
            <p className="text-xs font-normal text-white max-md:hidden">
              © ASBL ALL RIGHTS RESERVED
            </p>
            <div className="h-4 w-px bg-neutral-500 max-md:hidden"></div>
            {FOOTER_LINKS.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  className="cursor-pointer text-xs font-normal text-white underline transition-opacity hover:opacity-70"
                  href={link.href}
                >
                  {link.label}
                </a>
                {idx !== FOOTER_LINKS.length - 1 && (
                  <div className="h-4 w-px bg-neutral-500"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
