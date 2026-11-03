export function ArticleIllustration({ id, image, title }) {
  if (image) {
    return (
      <div className="w-full sm:w-[130px] md:w-[140px] h-[130px] sm:h-auto rounded-[20px] overflow-hidden bg-gradient-to-br from-[#f4f9fb] to-[#eaf4f7] flex items-center justify-center shrink-0 border border-[#e5eff3]/60 relative group-hover:scale-102 transition-transform duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
    );
  }

  switch (id) {
    case "future-hr":
      return (
        <div className="w-full sm:w-[130px] md:w-[140px] h-[130px] sm:h-auto rounded-[20px] overflow-hidden bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] p-3 flex items-center justify-center shrink-0 border border-[#bae6fd]/60 relative group-hover:scale-102 transition-transform duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="42" fill="#f0f9ff" />
            <path
              d="M20 75 L40 55 L55 65 L80 35"
              stroke="#0284c7"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="80" cy="35" r="4" fill="#0284c7" />
            <path
              d="M50 20 C60 30 65 50 62 60 L38 60 C35 50 40 30 50 20 Z"
              fill="#005a75"
            />
            <circle cx="50" cy="38" r="4" fill="#ffffff" />
            <path d="M38 60 L32 70 L42 66 Z" fill="#0284c7" />
            <path d="M62 60 L68 70 L58 66 Z" fill="#0284c7" />
            <path d="M46 66 L50 78 L54 66 Z" fill="#f97316" />
          </svg>
        </div>
      );

    case "workplace-culture":
      return (
        <div className="w-full sm:w-[130px] md:w-[140px] h-[130px] sm:h-auto rounded-[20px] overflow-hidden bg-gradient-to-br from-[#fef3c7] to-[#fde68a] p-3 flex items-center justify-center shrink-0 border border-[#fde68a]/60 relative group-hover:scale-102 transition-transform duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="42" fill="#fffbeb" />
            <path
              d="M50 72 C50 72 26 54 26 38 C26 28 34 22 43 24 C47 25 50 29 50 29 C50 29 53 25 57 24 C66 22 74 28 74 38 C74 54 50 72 50 72 Z"
              fill="#f59e0b"
            />
            <circle cx="43" cy="42" r="4" fill="#ffffff" />
            <circle cx="57" cy="42" r="4" fill="#ffffff" />
            <path
              d="M35 54 C35 48 43 47 43 47 C43 47 47 47 50 49 C46 52 46 56 46 58 Z"
              fill="#ffffff"
              opacity="0.9"
            />
            <path
              d="M65 54 C65 48 57 47 57 47 C57 47 53 47 50 49 C54 52 54 56 54 58 Z"
              fill="#ffffff"
              opacity="0.9"
            />
          </svg>
        </div>
      );

    case "dei-interview":
      return (
        <div className="w-full sm:w-[130px] md:w-[140px] h-[130px] sm:h-auto rounded-[20px] overflow-hidden bg-gradient-to-br from-[#ffedd5] to-[#fed7aa] p-3 flex items-center justify-center shrink-0 border border-[#fed7aa]/60 relative group-hover:scale-102 transition-transform duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="42" fill="#fff7ed" />
            <circle cx="34" cy="44" r="8" fill="#ea580c" />
            <circle cx="50" cy="38" r="9" fill="#005a75" />
            <circle cx="66" cy="44" r="8" fill="#14b8a6" />
            <path
              d="M22 68 C22 56 34 54 34 54 C40 54 44 57 46 62 L22 68 Z"
              fill="#ea580c"
              opacity="0.85"
            />
            <path
              d="M36 74 C36 60 50 56 50 56 C64 56 64 60 64 74 Z"
              fill="#005a75"
            />
            <path
              d="M78 68 C78 56 66 54 66 54 C60 54 56 57 54 62 L78 68 Z"
              fill="#14b8a6"
              opacity="0.85"
            />
          </svg>
        </div>
      );

    case "hr-analytics":
      return (
        <div className="w-full sm:w-[130px] md:w-[140px] h-[130px] sm:h-auto rounded-[20px] overflow-hidden bg-gradient-to-br from-[#e0f2fe] to-[#c7d2fe] p-3 flex items-center justify-center shrink-0 border border-[#c7d2fe]/60 relative group-hover:scale-102 transition-transform duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="42" fill="#f8fafc" />
            <rect x="25" y="52" width="10" height="24" rx="3" fill="#38bdf8" />
            <rect x="40" y="38" width="10" height="38" rx="3" fill="#005a75" />
            <rect x="55" y="46" width="10" height="30" rx="3" fill="#6366f1" />
            <rect x="70" y="28" width="10" height="48" rx="3" fill="#0ea5e9" />
            <path
              d="M28 48 L44 32 L58 40 L74 22"
              stroke="#f59e0b"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="74" cy="22" r="3" fill="#f59e0b" />
          </svg>
        </div>
      );

    case "research-glocalised":
      return (
        <div className="w-full sm:w-[130px] md:w-[140px] h-[130px] sm:h-auto rounded-[20px] overflow-hidden bg-gradient-to-br from-[#ccfbf1] to-[#99f6e4] p-3 flex items-center justify-center shrink-0 border border-[#99f6e4]/60 relative group-hover:scale-102 transition-transform duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="42" fill="#f0fdfa" />
            <circle cx="50" cy="50" r="28" fill="#005a75" />
            <ellipse
              cx="50"
              cy="50"
              rx="28"
              ry="12"
              stroke="#5eead4"
              strokeWidth="1.5"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="12"
              ry="28"
              stroke="#5eead4"
              strokeWidth="1.5"
            />
            <line
              x1="22"
              y1="50"
              x2="78"
              y2="50"
              stroke="#5eead4"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="5" fill="#f59e0b" />
          </svg>
        </div>
      );

    case "research-millennial":
      return (
        <div className="w-full sm:w-[130px] md:w-[140px] h-[130px] sm:h-auto rounded-[20px] overflow-hidden bg-gradient-to-br from-[#ede9fe] to-[#ddd6fe] p-3 flex items-center justify-center shrink-0 border border-[#ddd6fe]/60 relative group-hover:scale-102 transition-transform duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="42" fill="#faf5ff" />
            <polygon
              points="50,22 56,36 71,36 59,46 63,60 50,51 37,60 41,46 29,36 44,36"
              fill="#7c3aed"
            />
            <circle cx="30" cy="72" r="5" fill="#a78bfa" />
            <circle cx="50" cy="72" r="5" fill="#7c3aed" />
            <circle cx="70" cy="72" r="5" fill="#a78bfa" />
            <path
              d="M24 82 C24 76 36 76 36 82"
              stroke="#a78bfa"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M42 82 C42 75 58 75 58 82"
              stroke="#7c3aed"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M64 82 C64 76 76 76 76 82"
              stroke="#a78bfa"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );

    case "research-ivey":
      return (
        <div className="w-full sm:w-[130px] md:w-[140px] h-[130px] sm:h-auto rounded-[20px] overflow-hidden bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] p-3 flex items-center justify-center shrink-0 border border-[#bae6fd]/60 relative group-hover:scale-102 transition-transform duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="42" fill="#ffffff" />
            <rect x="28" y="26" width="44" height="52" rx="4" fill="#005a75" />
            <line
              x1="36"
              y1="36"
              x2="64"
              y2="36"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="36"
              y1="44"
              x2="60"
              y2="44"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />
            <line
              x1="36"
              y1="52"
              x2="55"
              y2="52"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />
            <circle cx="58" cy="62" r="8" fill="#f59e0b" />
            <polygon
              points="58,58 60,63 65,63 61,66 63,71 58,68 53,71 55,66 51,63 56,63"
              fill="#ffffff"
            />
          </svg>
        </div>
      );

    default:
      return (
        <div className="w-full sm:w-[130px] md:w-[140px] h-[130px] sm:h-auto rounded-[20px] overflow-hidden bg-gradient-to-br from-[#f4f9fb] to-[#eaf4f7] flex items-center justify-center shrink-0 border border-[#e5eff3]/60 relative group-hover:scale-102 transition-transform duration-300">
          <svg
            viewBox="0 0 24 24"
            className="w-10 h-10 text-[#005a75]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>
      );
  }
}
