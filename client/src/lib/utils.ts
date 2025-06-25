import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Animation utility functions
export const springConfig = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const slideUpVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: springConfig,
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const magneticVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.05, 
    rotate: 2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// Utility for detecting reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return false;
};

// Custom easing functions for animations
export const easing = {
  easeInOutCubic: [0.4, 0, 0.2, 1],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
};
