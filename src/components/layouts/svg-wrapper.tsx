import { motion, SVGMotionProps } from "framer-motion";
import React from "react";

interface IconWrapperProps extends SVGMotionProps<SVGSVGElement> {
  children: React.ReactNode;
  delay?: number;
}

const SvgWrapper: React.FC<IconWrapperProps> = ({
  children,
  delay = 0.5,
  ...rest
}) => {
  return (
    <motion.svg
      {...rest}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      {children}
    </motion.svg>
  );
};

export default SvgWrapper;
