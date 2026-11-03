import { useRef, useCallback } from "react";

export function CompassIllustration() {
  const needleRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = (Math.atan2(y, x) * (180 / Math.PI) + 90) * 0.25;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (needleRef.current) {
        needleRef.current.setAttribute("transform", `rotate(${angle} 160 160)`);
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (needleRef.current) {
      needleRef.current.setAttribute("transform", "rotate(0 160 160)");
    }
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-72 h-72 sm:w-88 sm:h-88 mx-auto flex items-center justify-center cursor-pointer select-none group"
    >
      <div className="absolute inset-0 rounded-full bg-[#F5B83D]/10 blur-2xl group-hover:bg-[#F5B83D]/20 transition-all duration-500" />

      <svg
        viewBox="0 0 320 320"
        className="w-full h-full relative z-10 drop-shadow-[0_12px_28px_rgba(245,184,61,0.18)]"
      >
        <circle
          cx="160"
          cy="160"
          r="148"
          fill="#FAF7F2"
          stroke="#E1DACD"
          strokeWidth="1.5"
        />

        <circle
          cx="160"
          cy="160"
          r="132"
          fill="none"
          stroke="#E1DACD"
          strokeWidth="1"
          strokeDasharray="2 4"
        />

        <circle
          cx="160"
          cy="160"
          r="105"
          fill="#FFFFFF"
          stroke="#E1DACD"
          strokeWidth="1.5"
        />

        <g className="font-mono text-[11px] font-bold fill-[#0F1B2D]">
          <text
            x="160"
            y="42"
            textAnchor="middle"
            className="fill-[#F5B83D] font-serif text-[15px] font-bold tracking-widest"
          >
            NORTH
          </text>
          <text
            x="160"
            y="292"
            textAnchor="middle"
            className="fill-[#3B475C]/60"
          >
            S
          </text>
          <text
            x="286"
            y="164"
            textAnchor="middle"
            className="fill-[#3B475C]/60"
          >
            E
          </text>
          <text
            x="34"
            y="164"
            textAnchor="middle"
            className="fill-[#3B475C]/60"
          >
            W
          </text>
        </g>

        {[...Array(24)].map((_, i) => {
          const angle = (i * 360) / 24;
          const isMajor = i % 6 === 0;
          return (
            <line
              key={i}
              x1="160"
              y1={isMajor ? "20" : "23"}
              x2="160"
              y2={isMajor ? "28" : "26"}
              stroke={isMajor ? "#0F1B2D" : "#E1DACD"}
              strokeWidth={isMajor ? "1.5" : "1"}
              transform={`rotate(${angle} 160 160)`}
            />
          );
        })}

        <g
          ref={needleRef}
          transform="rotate(0 160 160)"
          style={{
            transformOrigin: "160px 160px",
            transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          <polygon points="160,54 170,160 160,150" fill="#F5B83D" />
          <polygon points="160,54 150,160 160,150" fill="#DF9E21" />

          <polygon points="160,266 170,160 160,170" fill="#3B475C" />
          <polygon points="160,266 150,160 160,170" fill="#0F1B2D" />

          <circle
            cx="160"
            cy="160"
            r="10"
            fill="#0F1B2D"
            stroke="#FAF7F2"
            strokeWidth="2"
          />
          <circle cx="160" cy="160" r="4" fill="#F5B83D" />
        </g>

        <text
          x="160"
          y="200"
          textAnchor="middle"
          className="font-mono text-[9px] uppercase tracking-[0.2em] fill-[#3B475C]/70"
        >
          KNOW YOUR NORTH
        </text>
      </svg>
    </div>
  );
}
