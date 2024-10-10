"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HeadingOneProps {
  children: React.ReactNode;
  delay?: number;
  shine?: boolean;
  className?: string;
  color?: string;
}

const HeadingOne: React.FC<HeadingOneProps> = ({
  children,
  delay = 0.5,
  shine = false,
  className = "",
  color = "hsl(var(--dark))",
}) => {
  return (
    <motion.h1
      className={cn("flex text-center heading-one", { shine }, className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay,
        duration: 0.5,
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 5,
          mass: 0.5,
        },
      }}
      style={{
        display: "inline-block",
        color: color,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
      {shine && (
        <motion.span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)`,
            opacity: 0.5,
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
      )}
    </motion.h1>
  );
};

export default HeadingOne;
