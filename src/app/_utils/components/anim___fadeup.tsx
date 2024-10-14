"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Anim___FadeUp = ({
  children,
  delay,
  key,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  key: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      key={key}
      initial={{ opacity: 0, }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5, delay: delay || 0 }}
      className={cn(className, "transition-transform")}
    >
      {children}
    </motion.div>
  );
};

export default Anim___FadeUp;
