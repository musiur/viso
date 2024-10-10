"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const BG___HomeHero = ({ className }: { className?: string }) => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 1
      }
    }
  };

  const pathVariants = {
    animate: {
      strokeDashoffset: [1000, 0],
      fillOpacity: [0, 0.1],
      transition: {
        strokeDashoffset: { 
          duration: 3, 
          ease: "easeInOut", 
          repeat: Infinity, 
          repeatType: "reverse" 
        },
        fillOpacity: { 
          duration: 2, 
          delay: 1, 
          ease: "easeInOut", 
          repeat: Infinity, 
          repeatType: "reverse" 
        },
      },
    },
  };

  return (
    <motion.svg
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "")}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <g clipPath="url(#clip0_14_11)">
        <g filter="url(#filter0_b_14_11)">
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M260 1080C260 693.401 573.401 380 960 380C1346.6 380 1660 693.401 1660 1080H1460C1460 803.858 1236.14 580 960 580C683.858 580 460 803.858 460 1080H260Z"
            fill="url(#paint0_linear_14_11)"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeOpacity="0.1"
            strokeDasharray="1000"
            variants={pathVariants}
            animate="animate"
          />
        </g>
        <g filter="url(#filter1_b_14_11)">
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-440 1168C-440 394.801 186.801 -232 960 -232C1733.2 -232 2360 394.801 2360 1168L1960 1168C1960 615.717 1512.28 168.001 960 168.001C407.716 168.001 -39.9994 615.716 -40.0002 1168H-440ZM-40.0002 1168C-40.0002 1168 -40.0002 1168 -40.0002 1168H1960L-40.0002 1168Z"
            fill="url(#paint1_linear_14_11)"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeOpacity="0.1"
            strokeDasharray="1000"
            variants={pathVariants}
            animate="animate"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_14_11"
          x="240"
          y="360"
          width="1440"
          height="740"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_14_11"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_14_11"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_14_11"
          x="-460"
          y="-252"
          width="2840"
          height="1440"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_14_11"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_14_11"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14_11"
          x1="960"
          y1="480"
          x2="960"
          y2="980"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#737373" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_14_11"
          x1="960"
          y1="-31.9998"
          x2="960"
          y2="968.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#737373" />
        </linearGradient>
        <clipPath id="clip0_14_11">
          <rect width="1920" height="1080" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default BG___HomeHero;
