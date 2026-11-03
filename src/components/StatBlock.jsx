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
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [count, setCount] = useState(() => (prefersReducedMotion ? value : 0));
  const [hasAnimated, setHasAnimated] = useState(() => prefersReducedMotion);
  const elementRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || hasAnimated) return;

    let rafId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1200;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));

            if (progress < 1) {
              rafId = requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          rafId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 },
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (currentEl) {
        observer.unobserve(currentEl);
      }
      observer.disconnect();
    };
  }, [value, hasAnimated, prefersReducedMotion]);

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
