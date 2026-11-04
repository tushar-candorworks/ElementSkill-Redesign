import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import siteData from "../data/elementskill-data.json";
import { FAQAccordion } from "../components/FAQAccordion";
import { StatBlock } from "../components/StatBlock";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { PageHeader } from "../components/PageHeader";

import khushiImg from "../assets/images/Gemini3_Generated_Image_bqfzk2bq.webp";
import shagunImg from "../assets/images/Shagun-2.webp";
import shakshiImg from "../assets/images/Shakshi.webp";
import falakImg from "../assets/images/Falak-3.webp";
import rakhiImg from "../assets/images/Rakhi-3.webp";

const EXPERT_PHOTOS = {
  "Khushi Raina": khushiImg,
  "Shagun Dassi": shagunImg,
  "Shakshi Chib": shakshiImg,
  "Falak Koul": falakImg,
  "Rakhi Rajput": rakhiImg,
};

const HIRING_TEAM = siteData.team.hiring;
const KHUSHI_LEAD =
  HIRING_TEAM.find((m) => m.name.includes("Khushi")) || HIRING_TEAM[0];
const DOMAIN_EXPERTS = HIRING_TEAM.filter((m) => !m.name.includes("Khushi"));

export function HiringPage() {
  const { industries, stats, faq } = siteData;
  const khushi = KHUSHI_LEAD;
  const experts = DOMAIN_EXPERTS;

  return (
    <div className="bg-[#f8fafc] text-[#061a22]">
      <PageHeader
        title="Hiring Solutions"
        subtitle="You build the vision, we bring the talent to power it. We identify skilled professionals who align with your goals, culture, and long-term vision."
      >
        <div className="pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/contact?interest=Hiring"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#005a75] text-white font-semibold text-xs sm:text-sm hover:bg-[#004358] shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <span>Start a Hiring Conversation</span>
            <ArrowRight size={14} />
          </Link>
          <a
            href="https://niyojsetu.com/#/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-[#005a75] text-[#005a75] font-semibold text-xs sm:text-sm hover:bg-[#005a75]/10 transition-colors"
          >
            <span>Niyojsetu Portal</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </PageHeader>

      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-[#f8fafc]">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-12 text-center sm:text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#005a75] font-bold block mb-1">
              DOMAIN SPECIALISTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#061a22]">
              Meet Our Hiring Practice
            </h2>
            <p className="text-sm sm:text-base text-[#455c65] mt-2 max-w-xl">
              Unlike generalized recruiters, our practice leads carry deep,
              localized domain intelligence across niche engineering and
              industrial ecosystems.
            </p>
          </div>

          <div className="mb-12 bg-white rounded-[28px] p-6 sm:p-8 lg:p-9 border border-[#e5eff3] shadow-[0_8px_30px_rgba(0,90,117,0.06)] flex flex-col md:flex-row items-center md:items-center gap-7 lg:gap-9">
            <div className="relative shrink-0">
              <div className="w-48 h-60 sm:w-56 sm:h-68 rounded-[22px] overflow-hidden border border-[#e5eff3] shadow-md relative bg-gradient-to-b from-[#eaf3f6] to-[#dfeceb]">
                <img
                  src={khushiImg}
                  alt="Khushi Raina"
                  width="224"
                  height="272"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-[44.5%_18%]"
                />
              </div>
              <span className="absolute -bottom-2.5 -right-2 bg-[#005a75] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md z-10 whitespace-nowrap">
                Customer Delivery Lead
              </span>
            </div>

            <div className="flex-1 min-w-0 space-y-3.5 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-xs uppercase tracking-widest text-[#005a75] font-bold">
                  LEADERSHIP MANDATES &amp; CUSTOMER DELIVERY
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#061a22]">
                {khushi.name}
              </h3>
              <p className="text-xs sm:text-[13px] font-semibold text-[#005a75]">
                {khushi.role} · Strategic Talent Architect
              </p>
              <p className="text-sm sm:text-base text-[#455c65] leading-relaxed">
                {khushi.bio}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert, idx) => {
              const photo = EXPERT_PHOTOS[expert.name] || expert.photo;
              return (
                <div
                  key={expert.name}
                  className="bg-white rounded-[24px] p-6 border border-[#e5eff3] shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#005a75]/40 group"
                >
                  <div>
                    <div className="w-full h-48 rounded-2xl bg-[#daf1f6]/30 overflow-hidden mb-5 border border-[#e5eff3] relative flex items-center justify-center">
                      {photo ? (
                        <img
                          src={photo}
                          alt={expert.name}
                          width="240"
                          height="192"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                        />
                      ) : (
                        <div className="flex items-center justify-center text-3xl font-bold text-[#005a75]/60">
                          {expert.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      )}
                    </div>

                    <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-[#daf1f6] text-[#005a75] inline-block mb-2">
                      {expert.specialty || "Talent Expert"}
                    </span>

                    <h4 className="text-lg font-bold text-[#061a22] group-hover:text-[#005a75] transition-colors">
                      {expert.name}
                    </h4>
                    <p className="text-xs text-[#455c65] mt-2 leading-relaxed">
                      {expert.bio}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#e5eff3] flex items-center justify-between text-xs text-[#455c65]">
                    <span>SPECIALIST 0{idx + 1}</span>
                    <span className="text-[#005a75] font-bold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-gradient-to-b from-[#f0f6f8]/60 via-[#f8fafc] to-[#f8fafc] border-t border-[#e5eff3]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#005a75] font-bold block mb-1">
              DOMAIN SECTORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#061a22]">
              Industries We Power
            </h2>
            <p className="text-sm text-[#455c65] mt-2">
              Deep networks and tailored talent mapping across enterprise
              verticals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((ind, idx) => {
              const code = ind.slice(0, 2).toUpperCase();
              const num = (idx + 1).toString().padStart(2, "0");

              return (
                <div
                  key={ind}
                  className="bg-white p-6 rounded-[24px] border border-[#e5eff3] shadow-sm transition-all duration-200 hover:border-[#005a75] hover:shadow-md hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center justify-between text-xs text-[#455c65] mb-3">
                    <span>{num}</span>
                    <span className="text-lg font-extrabold text-[#005a75] group-hover:scale-110 transition-transform">
                      {code}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#061a22]">{ind}</h4>
                  <p className="text-[11px] uppercase tracking-wider text-[#455c65]/70 mt-1">
                    Specialized mandate
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-6 sm:px-8 bg-gradient-to-r from-[#005a75] to-[#004358] text-white">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <StatBlock
              value={stats?.delivered?.headline?.value ?? 35}
              suffix="+"
              label="Enterprise Clients Globally"
              sublabel="High-velocity, high-retention strategic recruitment"
              theme="dark"
            />
          </div>
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="border-l border-white/20 pl-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#38bdf8]">
                <AnimatedCounter value={20} suffix="+" />
              </span>
              <p className="text-xs uppercase tracking-wider text-white/80 mt-1">
                Tech &amp; Platforms
              </p>
            </div>
            <div className="border-l border-white/20 pl-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#38bdf8]">
                <AnimatedCounter value={8} suffix="+" />
              </span>
              <p className="text-xs uppercase tracking-wider text-white/80 mt-1">
                Global Capability Centers
              </p>
            </div>
            <div className="border-l border-white/20 pl-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#38bdf8]">
                <AnimatedCounter value={9} suffix="+" />
              </span>
              <p className="text-xs uppercase tracking-wider text-white/80 mt-1">
                Chemicals, Energy &amp; BFSI
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-gradient-to-b from-[#f8fafc] via-[#eaf3f6]/40 to-[#f8fafc] border-t border-[#d5e2e7]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
              <svg
                className="w-6 h-6 text-[#005a75] shrink-0"
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
                  Frequently Asked Questions
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
                className="w-6 h-6 text-[#005a75] shrink-0"
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

            <p className="text-[15px] sm:text-base text-[#455c65] font-normal leading-relaxed pt-1 md:whitespace-nowrap">
              Common questions about how our executive team and delivery practice partner with enterprise clients.
            </p>
          </div>

          <FAQAccordion items={faq} />
        </div>
      </section>
    </div>
  );
}
