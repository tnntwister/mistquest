export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

export const slideUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const glowPulse = {
  initial: { opacity: 0.1 },
  animate: { opacity: 0.3 },
  transition: { 
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse" 
  }
};