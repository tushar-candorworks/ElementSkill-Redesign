import { useState, useEffect, useRef } from "react";

export function StatBlock({
  value = 35,
  suffix = "+",
  prefix = "",
  label = "Enterprise Clients",
  sublabel = "",
  theme = "light",
  className = "",
}) {
  const targetValue = Number(value) || 0;
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [count, setCount] = useState(() => (prefersReducedMotion ? targetValue : 0));
  const elementRef = useRef(null);
  const animatedRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || animatedRef.current) {
      return;
    }

    const currentEl = elementRef.current;
    if (!currentEl) return;

    const startAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      const duration = 1200;
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
  }, [targetValue, prefersReducedMotion]);

  const isDark = theme === "dark";

  return (
    <div ref={elementRef} className={`flex flex-col ${className}`}>
      <div className="flex items-baseline gap-1">
        {prefix && (
          <span
            className={`font-serif text-3xl sm:text-4xl ${
              isDark ? "text-[#FF5A36]" : "text-[#C93A1A]"
            }`}
          >
            {prefix}
          </span>
        )}
        <span
          className={`font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none ${
            isDark ? "text-[#FAF7F2]" : "text-[#0F1B2D]"
          }`}
        >
          {count}
        </span>
        {suffix && (
          <span className="font-serif text-4xl sm:text-5xl font-bold text-[#FF5A36]">
            {suffix}
          </span>
        )}
      </div>

      <div className="mt-2.5">
        <p
          className={`font-mono text-xs uppercase tracking-[0.14em] font-medium ${
            isDark ? "text-[#FAF7F2]/80" : "text-[#3B475C]"
          }`}
        >
          {label}
        </p>
        {sublabel && (
          <p
            className={`text-xs mt-0.5 ${
              isDark ? "text-[#FAF7F2]/50" : "text-[#3B475C]/70"
            }`}
          >
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
}
