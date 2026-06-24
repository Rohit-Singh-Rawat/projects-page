"use client";

import { useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Our Story", href: "#" },
  { name: "Our Projects", href: "#" },
  { name: "Blogs", href: "#" },
  { name: "Media", href: "#" },
  { name: "Events", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Enquire", href: "#" },
  { name: "Partner with us", href: "#" },
];

// Emil Kowalski iOS Drawer ease
const drawerEase: [number, number, number, number] = [0.32, 0.72, 0, 1];

const drawerVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.5, ease: drawerEase, when: "beforeChildren", staggerChildren: 0.04 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.4, ease: drawerEase },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const SocialIcons = () => (
  <>
    <a href="https://www.facebook.com/ASBLIndia" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-75 transition-opacity flex items-center justify-center">
      <img src="https://cdn.asbl.in/asbl.in/web/footer/footer_facebook.svg" alt="Facebook" width={24} height={24} className="h-6 w-6" />
    </a>
    <a href="https://www.instagram.com/asblindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-75 transition-opacity flex items-center justify-center">
      <img src="https://cdn.asbl.in/asbl.in/web/footer/footer_instagram.svg" alt="Instagram" width={24} height={24} className="h-6 w-6" />
    </a>
    <a href="https://www.linkedin.com/company/asblindia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity flex items-center justify-center">
      <img src="https://cdn.asbl.in/asbl.in/web/footer/footer_linkedin.svg" alt="LinkedIn" width={24} height={24} className="h-6 w-6" />
    </a>
    <a href="https://www.youtube.com/channel/UCbqY0YzIVLhIbCaFMtWijOQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-75 transition-opacity flex items-center justify-center">
      <img src="https://cdn.asbl.in/asbl.in/web/footer/footer_youtube.svg" alt="YouTube" width={24} height={24} className="h-6 w-6" />
    </a>
    <a href="https://twitter.com/AsblIndia" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="hover:opacity-75 transition-opacity flex items-center justify-center">
      <img src="https://cdn.asbl.in/asbl.in/web/footer/Twitter-icon-Footer.svg" alt="Twitter/X" width={24} height={24} className="h-6 w-6" />
    </a>
  </>
);

export function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 z-[9999] h-[100dvh] w-full bg-white max-[600px]:bg-white"
          variants={drawerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="h-full">
            <div className="flex h-full max-[600px]:flex-col">
              {/* LEFT DARK PANEL (Desktop Only) */}
              <div className="relative h-full w-1/2 bg-black opacity-[0.85] max-[600px]:hidden">
                <div className="flex w-full justify-end">
                  <div className="w-full max-w-[80%]">
                    <Link href="/" onClick={onClose}>
                      <Image
                        src="/logo-white.png"
                        alt="ASBL Logo"
                        width={200}
                        height={64}
                        className="mx-8 my-8 w-32 h-auto"
                      />
                    </Link>
                  </div>
                </div>
                <div className="absolute bottom-16 left-8">
                  <div className="flex flex-col items-center gap-4 pb-8">
                    <SocialIcons />
                  </div>
                </div>
              </div>

              {/* RIGHT LIGHT PANEL */}
              <div className="w-1/2 bg-[#F0F0F0] max-[600px]:w-full max-[600px]:h-full max-[600px]:bg-transparent relative">
                {/* Header Area */}
                <div className="flex w-full max-w-[80%] justify-end max-[600px]:max-w-full max-[600px]:items-center max-[600px]:justify-between">
                  <div className="hidden max-[600px]:ml-6 max-[600px]:flex max-[600px]:mt-6">
                    <Link href="/" onClick={onClose}>
                      <Image
                        src="/logo-black.png"
                        alt="ASBL Logo"
                        width={120}
                        height={40}
                        className="w-24 h-auto"
                      />
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="cursor-pointer mx-8 my-8 max-[600px]:mx-6 max-[600px]:my-6 p-2 hover:bg-black/5 rounded-full transition-colors"
                    onClick={onClose}
                    aria-label="Close menu"
                  >
                    <svg
                      className="h-8 w-8 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="max-[600px]:scrollbar-hide mx-12 my-8 flex flex-col gap-[2vw] max-[600px]:mx-6 max-[600px]:gap-6 max-[600px]:overflow-y-auto max-[600px]:pb-32">
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={linkVariants}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="font-sans text-[2rem] md:text-4xl lg:text-[2.5rem] font-medium tracking-[4px] text-[#171717] uppercase no-underline opacity-50 transition-all duration-300 hover:text-black hover:opacity-100 focus:outline-none max-[600px]:text-2xl"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* MOBILE SOCIALS */}
                <div className="hidden max-[600px]:flex max-[600px]:absolute max-[600px]:bottom-0 max-[600px]:w-full max-[600px]:bg-black h-[120px] items-center justify-center gap-6 pb-4">
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
