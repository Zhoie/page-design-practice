import type { Variants } from 'framer-motion'

export const animations: Variants = {
    initial: {
      opacity: 0,
    //   x: 300,
    },
  
    show: {
      opacity: 1,
    //   x: 300,
      borderRadius: 8,
      background: "linear-gradient(to right, #FFFFFF, #FBFFFF)",
      transition: { duration: 0.5, ease: "easeInOut" }
    },
  
    hover: {
      background: "linear-gradient(to right, #3D7CD9, #39BFE9)",
      transition: { type: "tween", duration: 0.5, ease: "easeInOut" }
    },

    tap: {

        rotate: 45,

    }
  };
