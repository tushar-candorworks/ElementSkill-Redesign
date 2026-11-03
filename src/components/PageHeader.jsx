const DOT_COORDS = [0, 1, 2, 3, 4].flatMap((c) =>
  [0, 1, 2, 3].map((r) => ({
    cx: c * 12 + 6,
    cy: r * 12 + 6,
    key: `dot-${c}-${r}`,
  })),
);

export function PageHeader({ title, subtitle, className = "", children }) {
  return (
    <section
      className={`relative pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-16 md:pb-20 px-6 sm:px-8 overflow-hidden bg-[#edf6f9] ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute -left-[160px] sm:-left-[200px] lg:-left-[220px] top-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] lg:w-[460px] h-[340px] sm:h-[420px] lg:h-[460px] rounded-full bg-[#dcf0f6]/80 pointer-events-none select-none"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[140px] sm:-left-[180px] lg:-left-[200px] top-1/2 -translate-y-1/2 w-[320px] sm:w-[400px] lg:w-[440px] h-[320px] sm:h-[400px] lg:h-[440px] rounded-full border-[2.5px] border-[#007b9e]/35 pointer-events-none select-none"
      />

      <div
        aria-hidden="true"
        className="absolute top-6 sm:top-8 right-6 sm:right-12 lg:right-16 pointer-events-none select-none"
      >
        <svg
          className="w-20 h-16 text-[#007b9e]/40"
          viewBox="0 0 60 48"
          fill="currentColor"
        >
          {DOT_COORDS.map((dot) => (
            <circle key={dot.key} cx={dot.cx} cy={dot.cy} r="2.2" />
          ))}
        </svg>
      </div>

      <div
        aria-hidden="true"
        className="absolute -bottom-16 -right-16 sm:-bottom-20 sm:-right-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#dcf0f6]/80 pointer-events-none select-none"
      />

      <div className="max-w-[1240px] mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-[#005a75] shrink-0"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          >
            <line x1="28" y1="16" x2="16" y2="16" />
            <line x1="26" y1="23" x2="18" y2="27" />
            <line x1="26" y1="9" x2="18" y2="5" />
          </svg>

          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#061a22] tracking-tight relative">
            <span className="relative inline-block pb-2">
              {title}
              <svg
                className="absolute -bottom-0.5 left-0 w-full h-3.5 text-[#005a75]"
                viewBox="0 0 160 14"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 3 4 C 45 11, 115 11, 157 5"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-[#005a75] shrink-0"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          >
            <line x1="4" y1="16" x2="16" y2="16" />
            <line x1="6" y1="23" x2="14" y2="27" />
            <line x1="6" y1="9" x2="14" y2="5" />
          </svg>
        </div>

        {subtitle && (
          <p className="text-sm sm:text-[15px] text-[#455c65] max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
