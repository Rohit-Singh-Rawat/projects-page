"use client";

import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Project } from "@/data/projects";

interface ProjectSpotlightProps {
  projects: Project[];
  onEnquire: (project: Project) => void;
}

const AUTOPLAY_MS = 6000;
const IMAGE_SPRING = { type: "spring" as const, duration: 0.5, bounce: 0 };
const TEXT_SPRING = { type: "spring" as const, duration: 0.4, bounce: 0 };

const textVariants = {
  hidden: { opacity: 0, filter: "blur(6px)", y: 8 },
  show: { opacity: 1, filter: "blur(0px)", y: 0, transition: TEXT_SPRING },
};

const factsContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

type Role = "prev" | "center" | "next";

/**
 * Custom hook encapsulating carousel state and autoplay behavior.
 */
function useCarousel(itemCount: number, autoplayMs: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const hasInteracted = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  const goTo = useCallback((index: number) => {
    hasInteracted.current = true;
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isHovering || hasInteracted.current) return;
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % itemCount);
    }, autoplayMs);
    return () => clearInterval(interval);
  }, [isHovering, prefersReducedMotion, itemCount, autoplayMs]);

  return { activeIndex, setIsHovering, goTo };
}

/**
 * Bottom navigation thumbnail row, memoized to prevent re-rendering
 * every 5 seconds when the carousel ticks, as the project list is static.
 */
const ProjectThumbnails = memo(function ProjectThumbnails({
  projects,
  activeIndex,
  goTo,
}: {
  projects: Project[];
  activeIndex: number;
  goTo: (idx: number) => void;
}) {
  return (
    <div className="mt-16 w-full max-w-3xl px-6">
      <h2 className="mb-6 text-center text-sm uppercase tracking-[0.3em] text-gray-500">All Projects</h2>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {projects.map((p, idx) => (
          <button
            key={p.id}
            type="button"
            onClick={() => goTo(idx)}
            aria-label={`Go to ${p.name}`}
            aria-current={idx === activeIndex}
            className={cn(
              "flex items-center gap-2 rounded-full py-1.5 pr-4 pl-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
              idx === activeIndex ? "bg-white/10 text-white ring-1 ring-white" : "text-gray-500 hover:text-white"
            )}
          >
            <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
              <Image src={p.image} alt="" fill sizes="32px" className="object-cover" />
            </span>
            {p.name.replace("ASBL ", "")}
          </button>
        ))}
      </div>
    </div>
  );
});

/**
 * Pagination dots, memoized to only re-render its own small DOM nodes.
 */
const CarouselDots = memo(function CarouselDots({
  count,
  activeIndex,
  goTo,
}: {
  count: number;
  activeIndex: number;
  goTo: (idx: number) => void;
}) {
  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      {Array.from({ length: count }).map((_, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => goTo(idx)}
          aria-label={`Go to slide ${idx + 1}`}
          aria-current={idx === activeIndex}
          className={cn(
            "h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
            idx === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
          )}
        />
      ))}
    </div>
  );
});

export function ProjectSpotlight({ projects, onEnquire }: ProjectSpotlightProps) {
  const { activeIndex, setIsHovering, goTo } = useCarousel(projects.length, AUTOPLAY_MS);

  // Compute derived state inline
  const activeProject = projects[activeIndex];
  const prevIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
  const nextIndex = (activeIndex + 1) % projects.length;

  const slots: { project: Project; role: Role }[] = [
    { project: projects[prevIndex], role: "prev" },
    { project: activeProject, role: "center" },
    { project: projects[nextIndex], role: "next" },
  ];

  const handleDragEnd = useCallback(
    (e: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number } }) => {
      if (info.offset.x < -50) goTo(nextIndex);
      else if (info.offset.x > 50) goTo(prevIndex);
    },
    [goTo, nextIndex, prevIndex]
  );

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured projects"
      className="flex flex-col items-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
    >
      <span className="sr-only" aria-live="polite">
        {`Showing ${activeProject.name}, project ${activeIndex + 1} of ${projects.length}`}
      </span>

      <div className="relative flex w-full max-w-[100vw] items-center justify-center overflow-hidden h-[460px] md:h-[520px]">
        <button
          type="button"
          onClick={() => goTo(prevIndex)}
          aria-label="Previous project"
          className="absolute left-2 z-20 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:-translate-x-1/2 md:left-[max(2rem,calc(50%-456px))] lg:left-[max(2rem,calc(50%-500px))]"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </button>

        <button
          type="button"
          onClick={() => goTo(nextIndex)}
          aria-label="Next project"
          className="absolute right-2 z-20 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:translate-x-1/2 md:right-[max(2rem,calc(50%-456px))] lg:right-[max(2rem,calc(50%-500px))]"
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>

        <div className="relative flex w-full max-w-6xl items-center justify-center gap-3 sm:gap-4 lg:gap-10">
          <AnimatePresence mode="popLayout" initial={false}>
            {slots.map(({ project, role }) => {
              const isCenter = role === "center";
              return (
                <motion.div
                  key={project.id}
                  layoutId={`spotlight-${project.id}`}
                  layout
                  transition={IMAGE_SPRING}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.45,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  drag={isCenter ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  className={cn(
                    "relative shrink-0 overflow-hidden rounded-2xl touch-pan-y",
                    isCenter
                      ? "z-10 h-[440px] w-[80vw] shadow-2xl sm:w-[320px] md:h-[520px] md:w-[360px] lg:w-[400px] cursor-grab active:cursor-grabbing"
                      : "z-0 h-[360px] w-[25vw] sm:w-[200px] md:h-[400px] md:w-[260px]"
                  )}
                >
                  <Image
                    src={isCenter ? project.image : project.thumbnail ?? project.image}
                    alt={isCenter ? project.imageAlt : ""}
                    fill
                    sizes={isCenter ? "(max-width: 768px) 80vw, 400px" : "(max-width: 768px) 25vw, 260px"}
                    priority={isCenter}
                    className="pointer-events-none object-cover"
                    draggable={false}
                  />
                  {!isCenter && (
                    <button
                      type="button"
                      onClick={() => goTo(projects.indexOf(project))}
                      aria-label={`View ${project.name}`}
                      className="absolute inset-0 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    />
                  )}
                  {isCenter && (
                    <>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                      <div className="absolute left-5 top-5">
                        <StatusBadge status={project.status} />
                      </div>

                      <div className="pointer-events-none absolute bottom-0 left-0 p-6">
                        <motion.h2
                          key={`title-${project.id}`}
                          variants={textVariants}
                          initial="hidden"
                          animate="show"
                          transition={{ ...TEXT_SPRING, delay: 0.12 }}
                          className="text-2xl font-bold tracking-tight text-white md:text-3xl"
                        >
                          {project.name}
                        </motion.h2>
                        <motion.p
                          key={`tagline-${project.id}`}
                          variants={textVariants}
                          initial="hidden"
                          animate="show"
                          transition={{ ...TEXT_SPRING, delay: 0.18 }}
                          className="mt-1 text-sm text-white/80 md:text-base"
                        >
                          {project.tagline}
                        </motion.p>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <CarouselDots count={projects.length} activeIndex={activeIndex} goTo={goTo} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          variants={factsContainerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-12 w-full max-w-3xl px-6 text-center"
        >
          <motion.dl variants={textVariants} className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {[
              { label: "Configuration", value: activeProject.configurations },
              { label: "Locality", value: activeProject.locality },
              { label: "Timeline", value: activeProject.timeline },
              ...(activeProject.scale ? [{ label: "Scale", value: activeProject.scale }] : []),
            ].map((fact) => (
              <div key={fact.label} className="min-w-30 text-left">
                <dt className="text-xs uppercase tracking-widest text-gray-500">{fact.label}</dt>
                <dd className="mt-1 line-clamp-2 font-medium text-white">{fact.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.p variants={textVariants} className="mx-auto mt-8 min-h-18 max-w-xl line-clamp-3 text-gray-300">
            {activeProject.description}
          </motion.p>

          <motion.div
            variants={textVariants}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => onEnquire(activeProject)}
              className="w-full rounded-full bg-white px-8 py-3.5 font-semibold text-black transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
            >
              Enquire Now
            </button>
            <a
              href={activeProject.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-white px-8 py-3.5 text-center font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
            >
              Visit Website
            </a>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <ProjectThumbnails projects={projects} activeIndex={activeIndex} goTo={goTo} />
    </section>
  );
}
