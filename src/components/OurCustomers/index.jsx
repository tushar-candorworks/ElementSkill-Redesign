import mapImage from "../../assets/images/MAP.webp";

export function OurCustomers() {
  return (
    <section
      className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#d5e2e7]"
      aria-label="Our Customers worldwide"
    >
      <div className="max-w-[1380px] w-full mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2.5">
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-[#005a75] shrink-0"
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

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#061a22] tracking-tight relative">
              <span className="relative inline-block pb-1.5">
                Our Customers
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3.5 text-[#005a75]"
                  viewBox="0 0 160 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 10 C45 3, 115 2, 157 9"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-[#005a75] shrink-0"
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

          <p className="text-[14px] sm:text-[15px] text-[#455c65] font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            Powering talent acquisition, workforce upskilling, and benchmark
            evaluations across the globe.
          </p>
        </div>

        <div className="bg-[#dfeceb] rounded-[24px] sm:rounded-[32px] shadow-[0_10px_35px_rgba(0,90,117,0.07)] overflow-hidden border border-[#cddedd] p-2 sm:p-3 relative group">
          <img
            src={mapImage}
            alt="ElementSkill Global Customer Footprint World Map"
            width="1340"
            height="620"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover rounded-[18px] sm:rounded-[26px] block shadow-xs transition-transform duration-500 group-hover:scale-[1.005]"
          />
        </div>
      </div>
    </section>
  );
}
