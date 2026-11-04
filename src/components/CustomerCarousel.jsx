import snowflakeLogo from "../assets/images/logo/snoflake.webp";
import teConnectivityLogo from "../assets/images/logo/TE_Connectivity_logo.svg_-300x162.webp";
import proeonLogo from "../assets/images/logo/Proeons.webp";
import btbLogo from "../assets/images/logo/Be-the-bank.webp";
import sapiensLogo from "../assets/images/logo/sapiens_main_logo_website.webp";
import octavoLogo from "../assets/images/logo/logo-new-2.webp";
import amaraRajaLogo from "../assets/images/logo/Amara-raja.webp";
import gentrackLogo from "../assets/images/logo/gentrack_logo.webp";

const ROW_1_COMPANIES = [
  {
    name: "Blitzy",
    sector: "Next-Gen Workflow Tech",
    logo: (
      <svg
        className="w-4 h-4 text-[#061a22]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        <path d="M12 2a4 4 0 0 1 4 4c0 3-4 6-4 6s-4-3-4-6a4 4 0 0 1 4-4z" />
        <path d="M12 22a4 4 0 0 1-4-4c0-3 4-6 4-6s4 3 4 6a4 4 0 0 1-4 4z" />
        <path d="M2 12a4 4 0 0 1 4-4c3 0 6 4 6 4s-3 4-6 4a4 4 0 0 1-4-4z" />
        <path d="M22 12a4 4 0 0 1-4 4c-3 0-6-4-6-4s3-4 6-4a4 4 0 0 1 4 4z" />
      </svg>
    ),
  },
  {
    name: "Snowflake",
    sector: "Cloud Data Platform",
    logo: (
      <img
        src={snowflakeLogo}
        alt="Snowflake"
        className="h-4 max-w-[20px] object-contain"
      />
    ),
  },
  {
    name: "MoveInSync",
    sector: "Employee Commute SaaS",
    logo: (
      <svg
        className="w-4 h-4 text-[#00b4d8]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L13.5 6.5L18 5L15.5 9L20 10.5L16 12L20 13.5L15.5 15L18 19L13.5 17.5L12 22L10.5 17.5L6 19L8.5 15L4 13.5L8 12L4 10.5L8.5 9L6 5L10.5 6.5L12 2Z" />
      </svg>
    ),
  },
  {
    name: "Checkmarx",
    sector: "Application Security",
    logo: (
      <svg
        className="w-4 h-4 text-[#00c975]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "druva",
    sector: "Cloud Data Resiliency",
    logo: (
      <svg
        className="w-4 h-4 text-[#ff9e1b]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
  {
    name: "NEWRØCKET",
    sector: "Enterprise Service Management",
    logo: (
      <span className="w-2.5 h-2.5 rounded-full bg-[#005a75] shadow-[0_0_6px_#005a75]" />
    ),
  },
  {
    name: "TransUnion",
    sector: "Global Information & Insights",
    logo: (
      <span className="w-5 h-5 rounded-full bg-[#00a6ca] text-white text-[10px] font-black italic flex items-center justify-center shadow-[0_0_6px_rgba(0,166,202,0.4)]">
        tu
      </span>
    ),
  },
  {
    name: "genpact",
    sector: "Professional Services",
    logo: (
      <div className="w-3.5 h-3.5 rotate-45 bg-gradient-to-tr from-[#d62828] to-[#f77f00] rounded-[2px] shadow-[0_0_6px_rgba(214,40,40,0.4)]" />
    ),
  },
  {
    name: "Globant",
    symbolSuffix: ">",
    sector: "Digital Engineering & Tech",
    logo: (
      <span className="text-[#84cc16] font-black text-[15px] leading-none">
        &gt;
      </span>
    ),
  },
  {
    name: "TE connectivity",
    sector: "Sensors & Connectors",
    logo: (
      <img
        src={teConnectivityLogo}
        alt="TE Connectivity"
        className="h-3.5 max-w-[20px] object-contain"
      />
    ),
  },
  {
    name: "novo holdings",
    sector: "Life Sciences & Healthcare",
    logo: (
      <span className="w-2.5 h-2.5 rounded-full bg-[#004e89] shadow-[0_0_6px_#004e89]" />
    ),
  },
  {
    name: "Davies",
    sector: "Insurance & Consulting Ops",
    logo: (
      <div className="w-3.5 h-3.5 rounded-[3px] bg-gradient-to-br from-[#7209b7] via-[#3a86ff] to-[#4cc9f0] flex items-center justify-center text-white text-[9px] font-bold">
        D
      </div>
    ),
  },
  {
    name: "PROEON",
    sector: "Safety & Control Engineering",
    logo: (
      <img
        src={proeonLogo}
        alt="PROEON"
        className="h-3.5 max-w-[20px] object-contain rounded-xs"
      />
    ),
  },
  {
    name: "OKVA",
    sector: "Enterprise Systems",
    logo: (
      <span className="w-2.5 h-2.5 rounded-full bg-[#00a3e0] shadow-[0_0_6px_#00a3e0]" />
    ),
  },
  {
    name: "BOBST",
    sector: "Packaging Machinery",
    logo: (
      <span className="w-2.5 h-2.5 rounded-[1px] bg-[#e63946] shadow-[0_0_6px_#e63946]" />
    ),
  },
  {
    name: "Be The Bank",
    sector: "Digital Fintech Solutions",
    logo: (
      <img
        src={btbLogo}
        alt="Be The Bank"
        className="h-3 max-w-[20px] object-contain rounded-xs"
      />
    ),
  },
];

const ROW_2_COMPANIES = [
  {
    name: "SAPIENS",
    sector: "InsurTech Solutions",
    logo: (
      <img
        src={sapiensLogo}
        alt="Sapiens"
        className="h-3 max-w-[20px] object-contain"
      />
    ),
  },
  {
    name: "Cognyte",
    sector: "Investigative Analytics",
    logo: (
      <span className="w-2.5 h-2.5 rounded-full bg-[#0077b6] shadow-[0_0_6px_#0077b6]" />
    ),
  },
  {
    name: "ICL",
    sector: "Specialty Minerals & Tech",
    logo: (
      <svg
        className="w-3.5 h-3.5 text-[#00a8cc]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z" />
      </svg>
    ),
  },
  {
    name: "OCTAVO",
    sector: "Educational Technology",
    logo: (
      <img
        src={octavoLogo}
        alt="Octavo"
        className="h-4 max-w-[20px] object-contain"
      />
    ),
  },
  {
    name: "CRISIL",
    sector: "S&P Global Analytics",
    logo: (
      <span className="w-2.5 h-2.5 rounded-full bg-[#d90429] shadow-[0_0_6px_#d90429]" />
    ),
  },
  {
    name: "Quick Heal",
    sector: "Cybersecurity Solutions",
    logo: (
      <div className="w-3.5 h-3.5 bg-[#f97316] rounded-[2px] flex items-center justify-center shadow-xs">
        <span className="text-white text-[9px] font-black leading-none">Q</span>
      </div>
    ),
  },
  {
    name: "HDFC BANK",
    sector: "Banking & Financial Services",
    logo: (
      <div className="w-3.5 h-3.5 bg-[#004c8f] rounded-[2px] flex items-center justify-center shadow-[0_0_4px_rgba(0,76,143,0.5)]">
        <span className="text-white text-[9px] font-bold leading-none">+</span>
      </div>
    ),
  },
  {
    name: "AMARA RAJA",
    sector: "Industrial Energy Storage",
    logo: (
      <img
        src={amaraRajaLogo}
        alt="Amara Raja"
        className="h-4 max-w-[20px] object-contain"
      />
    ),
  },
  {
    name: "AIVID.AI",
    sector: "Computer Vision & AI",
    logo: (
      <div className="w-3.5 h-3.5 rounded-full bg-blue-100 border border-blue-500 flex items-center justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
      </div>
    ),
  },
  {
    name: "adani",
    sector: "Energy & Infrastructure",
    logo: (
      <span className="w-2.5 h-2.5 rounded-full bg-[#008080] shadow-[0_0_6px_#008080]" />
    ),
  },
  {
    name: "GoldenRay",
    sector: "Solar & Clean Energy",
    logo: (
      <span className="w-2.5 h-2.5 rounded-full bg-[#fb8500] shadow-[0_0_6px_#fb8500]" />
    ),
  },
  {
    name: "3i Infotech",
    sector: "Enterprise IT Solutions",
    logo: (
      <span className="text-[#0077b6] font-black text-xs leading-none">3i</span>
    ),
  },
  {
    name: "dentsu",
    sector: "Global Media & Advertising",
    logo: (
      <span className="w-2.5 h-2.5 rounded-full bg-[#00b4d8] shadow-[0_0_6px_#00b4d8]" />
    ),
  },
  {
    name: "Straive",
    sector: "EdTech & Data Solutions",
    logo: (
      <div className="w-3.5 h-3.5 rounded-[3px] bg-[#f77f00] flex items-center justify-center text-white text-[9px] font-black">
        S
      </div>
    ),
  },
  {
    name: "THIESS",
    sector: "Mining & Infrastructure Services",
    logo: <span className="text-[#f77f00] text-[13px] leading-none">▲</span>,
  },
  {
    name: "gentrack",
    sector: "Utilities & Cleantech Software",
    logo: (
      <img
        src={gentrackLogo}
        alt="Gentrack"
        className="h-4 max-w-[20px] object-contain"
      />
    ),
  },
];

const DOUBLED_ROW_1 = [...ROW_1_COMPANIES, ...ROW_1_COMPANIES];
const DOUBLED_ROW_2 = [...ROW_2_COMPANIES, ...ROW_2_COMPANIES];

export function CustomerCarousel() {
  return (
    <section className="bg-[#FEF7E4] py-3.5 sm:py-4.5 border-y border-[#EDE0C4] overflow-hidden select-none relative">
      <div className="carousel-container relative overflow-hidden space-y-2.5 sm:space-y-3">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FEF7E4] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FEF7E4] to-transparent z-10" />

        <div className="flex overflow-hidden py-0.5">
          <div className="carousel-track-left shrink-0 items-center">
            {DOUBLED_ROW_1.map((company, idx) => (
              <span
                key={`r1-${company.name}-${idx}`}
                className="inline-flex items-center"
              >
                <span className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] md:text-[15px] font-extrabold text-[#005a75] uppercase tracking-[0.14em] hover:text-[#FF5A36] transition-colors cursor-pointer whitespace-nowrap">
                  <span className="shrink-0 w-4 h-4 flex items-center justify-center opacity-85">
                    {company.logo}
                  </span>
                  <span>
                    {company.name}
                    {company.symbolSuffix && (
                      <span className="text-[#84cc16] ml-0.5">
                        {company.symbolSuffix}
                      </span>
                    )}
                  </span>
                </span>
                <span className="text-[#005a75] font-black text-base sm:text-lg px-3.5 sm:px-5 select-none opacity-60">
                  •
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden py-0.5">
          <div className="carousel-track-right shrink-0 items-center">
            {DOUBLED_ROW_2.map((company, idx) => (
              <span
                key={`r2-${company.name}-${idx}`}
                className="inline-flex items-center"
              >
                <span className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] md:text-[15px] font-extrabold text-[#005a75] uppercase tracking-[0.14em] hover:text-[#FF5A36] transition-colors cursor-pointer whitespace-nowrap">
                  <span className="shrink-0 w-4 h-4 flex items-center justify-center opacity-85">
                    {company.logo}
                  </span>
                  <span>{company.name}</span>
                </span>
                <span className="text-[#005a75] font-black text-base sm:text-lg px-3.5 sm:px-5 select-none opacity-60">
                  •
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
