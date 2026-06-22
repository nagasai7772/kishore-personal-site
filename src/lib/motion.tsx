import * as React from "react";
import { motion, useScroll, useSpring, useInView, useMotionValue, useTransform, animate, type Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: any;
}) {
  const MotionTag = (motion as any)[As] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerGroup({
  children,
  className,
  amount = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  whileHover,
}: {
  children: React.ReactNode;
  className?: string;
  whileHover?: any;
}) {
  return (
    <motion.div className={className} variants={fadeUp} whileHover={whileHover}>
      {children}
    </motion.div>
  );
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-accent"
    />
  );
}

/** Animated count-up that preserves the original label exactly (e.g. "5+", "27+", "4"). */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString());
  const [n, setN] = React.useState("0");

  React.useEffect(() => rounded.on("change", (v) => setN(v)), [rounded]);
  React.useEffect(() => {
    if (!inView || !match) return;
    const controls = animate(mv, target, { duration: 1.4, ease });
    return controls.stop;
  }, [inView, target, mv, match]);

  if (!match) return <span ref={ref} className={className}>{value}</span>;
  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  );
}

export { motion };