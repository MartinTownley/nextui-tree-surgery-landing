"use client";
import { motion } from "framer-motion";

export default function HeroTextAnimated({
  children,
  scrollTriggered = false,
}: {
  children: React.ReactNode;
  scrollTriggered?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={scrollTriggered ? undefined : { opacity: 1, y: 0 }}
      whileInView={scrollTriggered ? { opacity: 1, y: 0 } : undefined}
      viewport={scrollTriggered ? { once: true } : undefined}
      transition={{ duration: 0.6, ease: "easeOut", delay: scrollTriggered ? 0 : 0.3 }}
    >
      {children}
    </motion.div>
  );
}
