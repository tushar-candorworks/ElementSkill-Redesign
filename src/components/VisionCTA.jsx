import { Link } from "react-router-dom";
import visionBg from "../assets/images/vision_Bg.webp";

export function VisionCTA() {
  return (
    <section
      aria-label="Where Vision Meets Implementation"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-36 select-none bg-[#eaf3f6] border-t border-[#cde0e7] border-b border-[#cde0e7]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75 pointer-events-none"
        style={{
          backgroundImage: `url(${visionBg})`,
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#eaf3f6]/88 via-[#eaf3f6]/62 to-[#eaf3f6]/90 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#005a75]/12 mix-blend-multiply pointer-events-none"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_45%,rgba(0,90,117,0.14),transparent_70%)] pointer-events-none"
      />

      <div
        aria-hidden="true"
        className="absolute -top-36 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full border border-[#005a75]/15 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full border border-[#005a75]/10 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#061a22] tracking-[-0.02em] leading-[1.18] max-w-4xl mx-auto drop-shadow-sm">
          Where Vision Meets Implementation, <br className="hidden sm:inline" />
          <span className="text-[#005a75]">Excellence Follows</span>
        </h2>

        <div className="mt-9 sm:mt-11 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-3.5 sm:px-11 sm:py-4 rounded-full bg-[#005a75] hover:bg-[#004358] text-white font-semibold text-[15px] sm:text-base tracking-wide shadow-[0_4px_20px_rgba(0,90,117,0.32)] hover:shadow-[0_8px_28px_rgba(0,90,117,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
