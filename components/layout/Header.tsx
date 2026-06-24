"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenu } from "./NavigationMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="font-poppins absolute top-0 left-0 z-[100] w-full bg-transparent">
        <div className="flex items-center justify-around px-8 py-4 max-w-7xl mx-auto">
          <Link href="/">
            <Image
              src="/logo-black.png"
              alt="ASBL Logo"
              width={120}
              height={40}
              priority
              className="h-6 w-auto"
            />
          </Link>
          <button
            type="button"
            className="cursor-pointer p-2 hover:bg-black/5 rounded-full transition-colors flex items-center justify-center"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              className="h-3 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 13"
              fill="none"
            >
              <path
                d="M19.5005 6.68062C19.4125 6.83138 19.3438 6.99765 19.2313 7.13C19.0599 7.33311 18.8126 7.41601 18.5414 7.42813C18.459 7.43201 18.3766 7.43055 18.2942 7.43055C12.576 7.43055 6.85727 7.43104 1.13909 7.42813C0.976279 7.42813 0.805838 7.41504 0.652186 7.3685C0.226336 7.23907 -0.0382295 6.83186 0.00450808 6.40818C0.0467369 5.98643 0.390673 5.64321 0.835347 5.58456C0.941682 5.5705 1.05056 5.56807 1.15791 5.56807C6.86338 5.5671 12.5694 5.57147 18.2748 5.56177C18.8813 5.5608 19.3066 5.74841 19.4995 6.31752V6.68062H19.5005Z"
                fill="black"
              ></path>
              <path
                d="M19.5008 1.0929C19.3776 1.46956 19.1487 1.74588 18.7233 1.83217C18.6374 1.84962 18.5473 1.85398 18.4593 1.85398C14.2771 1.85495 10.0944 1.85495 5.91224 1.85447C5.37904 1.85447 4.9827 1.55197 4.88959 1.08175C4.80615 0.659999 5.06512 0.216921 5.4986 0.0656731C5.62071 0.0230135 5.75808 0.00265326 5.88833 0.00265326C10.0893 -0.000740117 14.2908 -0.000255349 18.4924 0.000714187C18.9676 0.000714187 19.2972 0.22904 19.459 0.654181C19.4692 0.680844 19.4865 0.704597 19.5008 0.729805V1.0929Z"
                fill="black"
              ></path>
              <path
                d="M19.4999 12.2691C19.445 12.3757 19.4017 12.4901 19.3325 12.5876C19.1377 12.862 18.8609 12.9996 18.5109 12.9996C17.6546 12.9996 16.7983 12.9996 15.942 12.9996C13.8932 12.9996 11.8443 13.0006 9.79596 12.9987C9.26174 12.9987 8.86388 12.6841 8.79061 12.2143C8.7031 11.6563 9.13353 11.1604 9.72524 11.1464C10.0422 11.1386 10.3597 11.1444 10.6767 11.1444C13.2201 11.1444 15.7634 11.1444 18.3074 11.1444C19.0029 11.1444 19.2374 11.2942 19.4999 11.9065V12.2696V12.2691Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
