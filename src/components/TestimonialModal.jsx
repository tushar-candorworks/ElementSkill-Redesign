import { useEffect } from "react";
import { X, Quote } from "lucide-react";

const SERVICE_BADGES = {
  hiring: {
    label: "Hiring Partnership",
    badgeClass: "bg-[#daf1f6] text-[#005a75] border-[#b2e2ec]",
  },
  skilling: {
    label: "Skilling & Leadership",
    badgeClass: "bg-[#e0f2fe] text-[#007b9e] border-[#bae6fd]",
  },
  consulting: {
    label: "Strategic Consulting",
    badgeClass: "bg-[#eaf3f6] text-[#005a75] border-[#cfe2e8]",
  },
};

export function TestimonialModal({ testimonial, onClose }) {
  useEffect(() => {
    if (!testimonial) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [testimonial, onClose]);

  if (!testimonial) return null;

  const badge = SERVICE_BADGES[testimonial.service] || SERVICE_BADGES.hiring;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#030d14]/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white border border-[#e5eff3] rounded-[28px] sm:rounded-[32px] max-w-2xl w-full p-7 sm:p-10 shadow-[0_24px_60px_rgba(0,90,117,0.18)] overflow-hidden text-left transform animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#005a75] via-[#00a8cc] to-[#38bdf8]" />

        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full border border-[#d5e2e7] bg-white flex items-center justify-center text-[#455c65] hover:bg-[#eaf3f6] hover:text-[#005a75] transition-colors cursor-pointer shadow-xs"
          aria-label="Close story modal"
        >
          <X size={18} />
        </button>

        <div className="flex items-center justify-between gap-4 mb-4 pr-10">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wide uppercase border ${badge.badgeClass}`}
          >
            {badge.label}
          </span>
          <Quote size={32} className="text-[#00a8cc]/25 shrink-0" />
        </div>

        <div className="mb-7">
          <p className="font-sans text-base sm:text-lg text-[#061a22] leading-relaxed font-normal">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>

        <div className="pt-6 border-t border-[#e5eff3] flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1 pr-2">
            {testimonial.photo ? (
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#daf1f6] shadow-xs shrink-0"
                onError={(e) => {
                  e.target.style.display = "none";
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = "flex";
                  }
                }}
              />
            ) : null}
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#daf1f6] border border-[#b2e2ec] items-center justify-center font-bold text-sm text-[#005a75] shrink-0 ${
                testimonial.photo ? "hidden" : "flex"
              }`}
            >
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="font-sans text-base sm:text-lg font-bold text-[#061a22] leading-snug truncate">
                {testimonial.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#455c65] mt-0.5 line-clamp-2">
                {testimonial.role}
              </p>
              {testimonial.company && (
                <p className="font-mono text-xs font-semibold text-[#007b9e] mt-0.5 truncate">
                  {testimonial.company}
                </p>
              )}
            </div>
          </div>

          {testimonial.logo && (
            <div className="shrink-0 flex items-center justify-end pl-2">
              <img
                src={testimonial.logo}
                alt={testimonial.company || "Company logo"}
                className="h-8 sm:h-10 max-h-11 max-w-[120px] sm:max-w-[160px] w-auto object-contain object-right opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
