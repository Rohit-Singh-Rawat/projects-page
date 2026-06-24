"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
}

export function EnquireModal({ isOpen, onClose, projectName }: EnquireModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
      const raf = requestAnimationFrame(() => setHasEntered(true));
      return () => cancelAnimationFrame(raf);
    }

    document.body.style.overflow = "";
    const timeout = setTimeout(() => {
      dialog.close();
      setSuccess(false);
      setHasEntered(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  const isVisible = isOpen && hasEntered;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      console.log("Enquiry submitted for", projectName);
    }, 1000);
  };

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onClose={onClose}
      className={cn(
        "backdrop:bg-black/80 backdrop:backdrop-blur-sm",
        "bg-[#111] text-white p-0 m-auto rounded-2xl shadow-2xl w-[90%] max-w-md",
        "transition-all duration-200 ease-out motion-reduce:transition-none opacity-0 scale-95",
        isVisible && "opacity-100 scale-100"
      )}
    >
      <div className="relative p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="py-12 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold">Thank You!</h2>
            <p className="text-gray-400">
              Your enquiry for {projectName || "our project"} has been received. Our team will contact you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full py-3 px-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8 pr-8">
              <h2 className="text-2xl font-semibold mb-2">Enquire Now</h2>
              <p className="text-gray-400 text-sm">
                Leave your details below and our team will get in touch regarding {projectName ? <strong className="text-white">{projectName}</strong> : "this project"}.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                <input
                  id="name"
                  required
                  className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full py-3.5 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
