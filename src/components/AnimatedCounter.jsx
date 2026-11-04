import { useState, useEffect, useRef } from "react";

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1200,
  className = "",
}) {
  const isNumeric =
    typeof value === "number" ||
    (typeof value === "string" && value.trim() !== "" && !isNaN(Number(value)));
  const targetValue = isNumeric ? Number(value) : null;

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [count, setCount] = useState(() =>
    prefersReducedMotion || !isNumeric ? targetValue : 0,
  );
  const elementRef = useRef(null);
  const animatedRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isNumeric || prefersReducedMotion || animatedRef.current) {
      return;
    }

    const currentEl = elementRef.current;
    if (!currentEl) return;

    const startAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * targetValue));

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setCount(targetValue);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    };

    if (typeof IntersectionObserver === "undefined") {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(currentEl);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      observer.disconnect();
    };
  }, [targetValue, duration, prefersReducedMotion, isNumeric]);

  if (!isNumeric) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
