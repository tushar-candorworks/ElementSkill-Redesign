import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  X,
  Users,
  Layers,
  Code2,
  FlaskConical,
  BatteryCharging,
} from "lucide-react";

import { FAQAccordion } from "../components/FAQAccordion";
import { LinkedInIcon } from "../components/SocialIcons";

import teamHeroBg from "../assets/images/team_hero_bg.webp";
import reetuImg from "../assets/images/Reetu-Raina-3.webp";
import shekharImg from "../assets/images/Shekhar-1.webp";
import khushiImg from "../assets/images/Gemini3_Generated_Image_bqfzk2bq.webp";
import shagunImg from "../assets/images/Shagun-2.webp";
import shakshiImg from "../assets/images/Shakshi.webp";
import falakImg from "../assets/images/Falak-3.webp";
import rakhiImg from "../assets/images/Rakhi-3.webp";

const LEADERSHIP = [
  {
    name: "Reetu Raina",
    role: "Founder & CEO",
    subtitle: "Ex-CHRO · TEDx Speaker · 25+ Years Practitioner",
    photo: reetuImg,
    linkedin: "https://in.linkedin.com/in/reeturaina",
    bio: "Reetu, an Ex CHRO with 25+ years’ experience, is a research-driven practitioner, TEDx speaker, and award-winning leader recognized for her work on Millennials, leadership, high-performance culture. She founded Elementskill to help industries build the right culture, leadership, and employee experience, contributing to India’s global growth.",
    tags: ["Leadership Culture", "Executive Coaching", "EVP Strategy"],
    stats: "25+ Years HR Leadership",
    objectPosition: "50% 25%",
    theme: "teal",
  },
  {
    name: "Shekhar Jakhadi",
    role: "Global Technology & Business Leader",
    subtitle: "Global Enterprise Architect · 20+ Years Experience",
    photo: shekharImg,
    linkedin: "https://www.linkedin.com/in/jakhadi/",
    bio: "Shekhar Jakhadi is a global technology and business leader with over 20 years of experience building and scaling enterprises across the U.S., Europe, India, and the Middle East. He has also been recognized at an international level through his selection for the Delegation of the Government of the Netherlands for Innovation, where he represented entrepreneurial innovation for two consecutive years.",
    tags: ["Enterprise Scale", "Global Tech Strategy", "Venture Innovation"],
    stats: "Delegation for Innovation (Netherlands)",
    objectPosition: "50% 25%",
    theme: "blue",
  },
];

const DELIVERY_LEAD = {
  name: "Khushi Raina",
  role: "Customer Delivery Lead",
  subRole: "Founder of ElementSkill Hiring Vertical",
  photo: khushiImg,
  shortBio:
    "Khushi Raina brings a rare combination of entrepreneurial drive and precision in talent building. As the founder of ElementSkill’s hiring vertical, she has built her reputation on one core belief: the right people, hired the right way.",
  bio: "Khushi Raina brings a rare combination of entrepreneurial drive and precision in talent building. As the founder of ElementSkill’s hiring vertical, she has built her reputation on one core belief: the right people, hired the right way… can transform a business. With a foundation from Delhi University and a deeply ingrained client-first mindset, Khushi has helped companies scale their teams rapidly, delivering exceptional talent within defined timelines and budgets.",
  highlights: [
    {
      title: "High-Velocity Mandates",
      desc: "Accelerated turnaround time while preserving uncompromised candidate vetting.",
    },
    {
      title: "Precision Culture Fit",
      desc: "Deep calibration with client ethos ensures seamless executive onboarding.",
    },
    {
      title: "Scalable Workforce Solutions",
      desc: "End-to-end recruitment execution across specialized niche roles and global GCCs.",
    },
  ],
};

const DOMAIN_EXPERTS = [
  {
    name: "Shagun Dassi",
    specialtyTitle: "Product & Platform",
    specialty: "Expert Product & Platform",
    role: "Practice Lead · Product & Platform",
    shortDesc:
      "Shagun brings deep expertise in product and platform hiring across enterprise ecosystems.",
    photo: shagunImg,
    icon: Layers,
    bio: "Shagun brings deep expertise in product and platform hiring, with a sharp ability to identify high-quality talent across enterprise ecosystems such as ServiceNow, Salesforce, and other digital platforms.",
    tags: ["ServiceNow", "Salesforce", "Enterprise SaaS"],
  },
  {
    name: "Shakshi Chib",
    specialtyTitle: "Application & Technology",
    specialty: "Expert Application & Technology",
    role: "Practice Lead · Application & Technology",
    shortDesc:
      "Shakshi has extensive experience leading hiring mandates for large IT firms across key domains.",
    photo: shakshiImg,
    icon: Code2,
    bio: "Shakshi has extensive experience leading hiring mandates for large IT firms across key domains including Cloud, Infrastructure, and ESG.",
    tags: ["Cloud & DevOps", "Infrastructure", "ESG Systems"],
  },
  {
    name: "Falak Koul",
    specialtyTitle: "Specialty Chemical & Food Tech",
    specialty: "Expert Specialty Chemical & Food Tech",
    role: "Practice Lead · Chemicals & FoodTech",
    shortDesc:
      "Falak has built expertise in talent acquisition by leading hiring across the FoodTech and specialty chemicals sectors.",
    photo: falakImg,
    icon: FlaskConical,
    bio: "Falak has built expertise in talent acquisition by leading hiring across the FoodTech and specialty chemicals sectors.",
    tags: ["Formulation R&D", "Process Eng.", "Food Science"],
  },
  {
    name: "Rakhi Rajput",
    specialtyTitle: "Energy Lithium & Ion Batteries",
    specialty: "Expert Energy Lithium & Ion Batteries",
    role: "Practice Lead · Energy & Lithium Storage",
    shortDesc:
      "Rakhi brings strong expertise in the energy sector and has played a key role in building talent networks.",
    photo: rakhiImg,
    icon: BatteryCharging,
    bio: "Rakhi brings strong expertise in the energy sector and has played a key role in building talent networks focused on lithium-ion battery technology, electrode manufacturing, cell assembly and many more.",
    tags: ["Battery Tech", "Electrode Mfg", "EV Ecosystems"],
  },
];

const TEAM_FAQS = [
  {
    question: "How does ElementSkill find the right talent for our business?",
    answer:
      "At ElementSkill, we go beyond resume matching. We take the time to understand your business, team structure, culture, and role expectations to identify talent that is not only qualified, but also aligned with your long-term growth goals.",
  },
  {
    question:
      "What makes ElementSkill different from traditional hiring partners?",
    answer:
      "We work as an extension of your team, not just as an external vendor. Our approach combines market insight, strategic hiring expertise, and a strong focus on quality to help businesses close critical roles faster and more effectively.",
  },
  {
    question: "What kind of roles and industries does ElementSkill support?",
    answer:
      "We support hiring across a wide range of industries and functions, including Technology, Manufacturing, BFSI, Energy, Specialty Chemicals, and Healthcare, along with leadership, niche, and strategic hiring mandates. Our team can handle both high-volume hiring and specialized talent requirements.",
  },
];

export function OurTeamPage() {
  const [activeBio, setActiveBio] = useState(null);

  const leadership = LEADERSHIP;
  const deliveryLead = DELIVERY_LEAD;
  const domainExperts = DOMAIN_EXPERTS;
  const teamFaqs = TEAM_FAQS;

  useEffect(() => {
    if (!activeBio) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveBio(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeBio]);

  return (
    <div className="bg-white text-[#061a22]">
      <section className="relative overflow-hidden pt-16 sm:pt-24 pb-16 sm:pb-20 px-6 sm:px-8 bg-[#030d14] text-white border-b border-white/10 select-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(${teamHeroBg})`,
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/50 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#030d14]/60 via-transparent to-[#030d14]/80 pointer-events-none"
        />

        <div className="max-w-[1360px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#005a75]/30 shadow-[0_2px_12px_rgba(0,0,0,0.3)] text-xs font-semibold uppercase tracking-[0.16em] text-[#005a75] mb-6">
            <Users size={14} className="text-[#005a75]" />
            <span>Leadership &amp; Domain Specialists</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px] 2xl:text-[62px] font-bold text-white tracking-tight leading-tight max-w-none mx-auto mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] lg:whitespace-nowrap">
            You build the vision, we bring the{" "}
            <span className="relative inline-block pb-1.5 border-b-[3.5px] border-[#38bdf8] text-[#38bdf8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              talent
            </span>{" "}
            to power it.
          </h1>

          <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-3xl mx-auto mb-9 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            At ElementSkill, we connect you with the right talent to power your
            business forward. Our hiring solutions are designed to identify
            skilled professionals who align with your goals, culture, and
            vision—ensuring the right fit for long-term success.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#005a75] hover:bg-[#004358] text-white font-semibold text-sm tracking-wide shadow-[0_4px_16px_rgba(0,90,117,0.4)] hover:shadow-[0_8px_24px_rgba(0,90,117,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Partner With Our Team</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="#leadership"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold text-sm tracking-wide shadow-sm hover:border-white/50 transition-all duration-200"
            >
              <span>Meet The Leadership</span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="leadership"
        className="py-20 sm:py-28 px-6 sm:px-8 bg-white relative"
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
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
                  Meet Our Team
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

            <p className="text-[15px] sm:text-base text-[#455c65] font-normal leading-relaxed pt-1">
              Visionary enterprise operators, research practitioners, and global
              innovation delegates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-[1200px] mx-auto">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="relative bg-white rounded-[32px] p-6 sm:p-8 md:p-9 border border-[#e5eff3] shadow-[0_10px_35px_-8px_rgba(0,90,117,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(0,90,117,0.14)] transition-all duration-300 overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-7 group"
              >
                {leader.theme === "teal" ? (
                  <div className="absolute top-5 right-6 pointer-events-none select-none opacity-30">
                    <svg
                      className="w-16 h-12 text-[#005a75]"
                      viewBox="0 0 60 48"
                      fill="currentColor"
                    >
                      {[0, 1, 2, 3, 4].map((c) =>
                        [0, 1, 2, 3].map((r) => (
                          <circle
                            key={`${c}-${r}`}
                            cx={c * 12 + 6}
                            cy={r * 12 + 6}
                            r="2"
                          />
                        )),
                      )}
                    </svg>
                  </div>
                ) : (
                  <svg
                    className="absolute -top-4 -right-4 w-28 h-28 text-[#dbe6f8]/80 pointer-events-none select-none"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                  >
                    <path d="M30,10 C60,0 90,20 95,50 C100,80 75,95 45,90 C15,85 0,60 10,30 C20,15 20,15 30,10 Z" />
                  </svg>
                )}

                <svg
                  className={`absolute -bottom-10 -right-10 w-44 h-44 pointer-events-none select-none ${
                    leader.theme === "teal"
                      ? "text-[#daf1f6]/85"
                      : "text-[#e4edfb]/85"
                  }`}
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <path d="M45,15 C75,5 98,30 100,65 C100,95 70,100 40,95 C10,90 0,60 10,35 C20,10 35,18 45,15 Z" />
                </svg>

                <div className="absolute bottom-4 left-6 pointer-events-none select-none opacity-30 hidden sm:block">
                  <svg
                    className="w-12 h-9 text-[#005a75]"
                    viewBox="0 0 48 36"
                    fill="currentColor"
                  >
                    {[0, 1, 2, 3].map((c) =>
                      [0, 1, 2].map((r) => (
                        <circle
                          key={`${c}-${r}`}
                          cx={c * 12 + 6}
                          cy={r * 12 + 6}
                          r="2"
                        />
                      )),
                    )}
                  </svg>
                </div>
                <div className="relative shrink-0 flex flex-col items-center sm:items-start z-10">
                  <div
                    className={`absolute -inset-2 rounded-[30px] transition-all duration-500 pointer-events-none -rotate-3 group-hover:rotate-0 group-hover:scale-105 ${
                      leader.theme === "teal"
                        ? "bg-gradient-to-tr from-[#005a75]/20 via-[#daf1f6] to-[#005a75]/10 group-hover:from-[#005a75]/30"
                        : "bg-gradient-to-tr from-[#005a75]/20 via-[#dbe6f8] to-[#005a75]/10 group-hover:from-[#005a75]/30"
                    }`}
                  />
                  <div className="w-36 h-48 sm:w-40 sm:h-52 md:w-44 md:h-56 rounded-[26px] overflow-hidden shadow-[0_8px_24px_rgba(0,90,117,0.12)] border-4 border-white relative z-10 bg-gradient-to-br from-[#eaf3f6] to-[#dfeceb] group-hover:shadow-[0_16px_36px_rgba(0,90,117,0.22)] group-hover:-translate-y-1 transition-all duration-500">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      style={{ objectPosition: leader.objectPosition }}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-108 group-hover:brightness-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>

                <div className="flex-1 min-w-0 relative z-10 text-center sm:text-left flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#061a22] tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-bold text-[#005a75] mt-1 mb-3">
                      {leader.role}
                    </p>

                    <p className="text-[12px] sm:text-[13px] text-[#455c65] leading-relaxed mb-5">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="flex flex-col items-center sm:items-start gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setActiveBio(leader)}
                      className="inline-flex items-center justify-between gap-3 px-5 py-2 rounded-full bg-[#005a75] hover:bg-[#004358] text-white text-xs font-semibold tracking-wide shadow-[0_2px_10px_rgba(0,90,117,0.2)] hover:shadow-[0_4px_14px_rgba(0,90,117,0.3)] transition-all cursor-pointer group/btn"
                    >
                      <span>Read Detailed Bio</span>
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowRight
                          size={11}
                          className="group-hover/btn:translate-x-0.5 transition-transform"
                        />
                      </span>
                    </button>

                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between gap-3 px-5 py-2 rounded-full bg-white hover:bg-[#f4f9fb] border border-[#005a75] text-[#005a75] text-xs font-semibold tracking-wide shadow-sm hover:bg-[#005a75]/5 transition-all cursor-pointer"
                      >
                        <span>Follow on Linkedin</span>
                        <span className="w-5 h-5 rounded-[4px] bg-[#005a75] text-white flex items-center justify-center">
                          <LinkedInIcon size={12} className="text-white" />
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-6 sm:px-8 bg-gradient-to-b from-[#f8fafc] via-[#eaf4f7]/40 to-[#f8fafc] border-y border-[#d5e2e7] relative overflow-hidden">
        <div className="absolute top-12 left-10 pointer-events-none select-none opacity-20 hidden md:block">
          <svg
            className="w-20 h-16 text-[#005a75]"
            viewBox="0 0 60 48"
            fill="currentColor"
          >
            {[0, 1, 2, 3, 4].map((c) =>
              [0, 1, 2, 3].map((r) => (
                <circle
                  key={`team-dots-${c}-${r}`}
                  cx={c * 12 + 6}
                  cy={r * 12 + 6}
                  r="2"
                />
              )),
            )}
          </svg>
        </div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 pointer-events-none select-none text-[#daf1f6]/60">
          <svg
            viewBox="0 0 100 100"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M45,15 C75,5 98,30 100,65 C100,95 70,100 40,95 C10,90 0,60 10,35 C20,10 35,18 45,15 Z" />
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="relative bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 border border-[#e5eff3] shadow-[0_12px_40px_rgba(0,90,117,0.08)] hover:shadow-[0_18px_50px_rgba(0,90,117,0.12)] transition-all duration-300 max-w-4xl mx-auto mb-10 sm:mb-12 overflow-hidden flex flex-col md:flex-row items-center md:items-center gap-7 lg:gap-9 group">
            <svg
              className="absolute -top-12 -left-12 w-44 h-44 text-[#daf1f6]/70 pointer-events-none select-none"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M30,10 C60,0 90,20 95,50 C100,80 75,95 45,90 C15,85 0,60 10,30 C20,15 20,15 30,10 Z" />
            </svg>

            <svg
              className="absolute -bottom-16 -right-16 w-52 h-52 text-[#daf1f6]/80 pointer-events-none select-none"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M45,15 C75,5 98,30 100,65 C100,95 70,100 40,95 C10,90 0,60 10,35 C20,10 35,18 45,15 Z" />
            </svg>

            <div className="absolute top-5 right-7 pointer-events-none select-none opacity-30 hidden sm:block">
              <svg
                className="w-16 h-12 text-[#005a75]"
                viewBox="0 0 60 48"
                fill="currentColor"
              >
                {[0, 1, 2, 3, 4].map((c) =>
                  [0, 1, 2, 3].map((r) => (
                    <circle
                      key={`khushi-dots-tr-${c}-${r}`}
                      cx={c * 12 + 6}
                      cy={r * 12 + 6}
                      r="2"
                    />
                  )),
                )}
              </svg>
            </div>

            <div className="absolute bottom-4 left-6 pointer-events-none select-none opacity-25 hidden sm:block">
              <svg
                className="w-12 h-9 text-[#005a75]"
                viewBox="0 0 48 36"
                fill="currentColor"
              >
                {[0, 1, 2, 3].map((c) =>
                  [0, 1, 2].map((r) => (
                    <circle
                      key={`khushi-dots-bl-${c}-${r}`}
                      cx={c * 12 + 6}
                      cy={r * 12 + 6}
                      r="2"
                    />
                  )),
                )}
              </svg>
            </div>

            <div className="relative shrink-0 z-10 flex justify-center">
              <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-tr from-[#005a75]/15 via-[#daf1f6] to-[#005a75]/10 -rotate-3 scale-102 pointer-events-none group-hover:rotate-0 transition-transform duration-300" />
              <div className="w-40 h-52 sm:w-48 sm:h-60 rounded-[24px] overflow-hidden border-4 border-white shadow-[0_12px_32px_rgba(0,90,117,0.16)] relative z-10 bg-gradient-to-b from-[#eaf3f6] to-[#dfeceb]">
                <img
                  src={deliveryLead.photo}
                  alt={deliveryLead.name}
                  className="w-full h-full object-cover object-[44.5%_18%] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0 relative z-10 text-center md:text-left flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#061a22] tracking-tight">
                {deliveryLead.name}
              </h3>
              <p className="text-xs sm:text-[13px] font-bold text-[#005a75] mt-1 mb-3">
                {deliveryLead.role}
              </p>

              <p className="text-[12px] sm:text-[13.5px] text-[#455c65] leading-relaxed mb-5">
                {deliveryLead.shortBio}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => setActiveBio(deliveryLead)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#005a75] hover:bg-[#004358] text-white text-xs font-semibold tracking-wide shadow-[0_2px_10px_rgba(0,90,117,0.2)] hover:shadow-[0_4px_14px_rgba(0,90,117,0.3)] transition-all cursor-pointer group/btn"
                >
                  <span>Read Detailed Bio</span>
                  <ArrowUpRight
                    size={13}
                    className="group-hover/btn:translate-x-0.5 -translate-y-0.5 transition-transform"
                  />
                </button>
                <Link
                  to="/contact?interest=Hiring"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#f4f9fb] border border-[#005a75] text-[#005a75] text-xs font-semibold tracking-wide shadow-sm hover:bg-[#005a75]/5 transition-all"
                >
                  <span>Connect With Delivery Team</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 max-w-[1280px] mx-auto pt-8">
            {domainExperts.map((member) => {
              const IconComp = member.icon;
              return (
                <div
                  key={member.name}
                  className="relative bg-white rounded-[28px] sm:rounded-[32px] border border-[#e5eff3] shadow-[0_10px_35px_rgba(0,90,117,0.07)] hover:shadow-[0_22px_50px_rgba(0,90,117,0.16)] hover:-translate-y-2 hover:border-[#005a75]/40 transition-all duration-300 p-7 sm:p-8 pt-13 sm:pt-14 flex flex-col items-center text-center justify-between group min-h-[480px] sm:min-h-[500px]"
                >
                  <div className="absolute -top-6 sm:-top-6.5 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#005a75] text-white flex items-center justify-center shadow-md border-3 border-white group-hover:scale-110 transition-transform z-30">
                    <IconComp size={22} className="text-white" />
                  </div>

                  <div className="absolute inset-0 rounded-[28px] sm:rounded-[32px] overflow-hidden pointer-events-none">
                    <svg
                      className="absolute -bottom-10 -right-10 w-28 h-28 text-[#daf1f6]/60 pointer-events-none select-none group-hover:scale-110 transition-transform duration-500"
                      viewBox="0 0 100 100"
                      fill="currentColor"
                    >
                      <path d="M45,15 C75,5 98,30 100,65 C100,95 70,100 40,95 C10,90 0,60 10,35 C20,10 35,18 45,15 Z" />
                    </svg>
                  </div>

                  <div className="relative inline-block mb-5 mt-1">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#005a75]/15 via-[#daf1f6] to-[#005a75]/10 pointer-events-none group-hover:scale-105 transition-transform duration-300" />
                    <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_28px_rgba(0,90,117,0.14)] relative z-10 bg-gradient-to-b from-[#eaf3f6] to-[#dfeceb]">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-[50%_15%] group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg lg:text-[18px] font-bold text-[#005a75] mb-2.5 leading-snug min-h-[48px] flex items-center justify-center relative z-10">
                    {member.specialtyTitle}
                  </h4>

                  <p className="text-xs sm:text-[13.5px] text-[#455c65] leading-relaxed mb-6 flex-grow relative z-10 max-w-xs">
                    {member.shortDesc}
                  </p>

                  <div className="pt-4 border-t border-[#e5eff3] w-full flex items-center justify-center relative z-10">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-base sm:text-[17px] font-bold text-[#005a75] hover:text-[#004358] transition-colors  group/name"
                    >
                      <span>{member.name}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-6 sm:px-8 bg-gradient-to-b from-[#f8fafc] via-[#eaf3f6]/40 to-[#f8fafc] border-t border-[#d5e2e7]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
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

            <p className="text-[15px] sm:text-base text-[#455c65] font-normal leading-relaxed pt-1">
              Common questions about how our executive team and delivery
              practice partner with enterprise clients.
            </p>
          </div>

          <FAQAccordion items={teamFaqs} />
        </div>
      </section>

      {activeBio && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#061a22]/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveBio(null)}
        >
          <div
            className="relative bg-white border border-[#d5e2e7] rounded-[24px] max-w-xl w-full p-6 sm:p-9 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveBio(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#d5e2e7] flex items-center justify-center text-[#455c65] hover:bg-[#eaf3f6] hover:text-[#005a75] transition-colors cursor-pointer"
              aria-label="Close bio modal"
            >
              <X size={16} />
            </button>

            <div className="flex items-start gap-4 mb-5">
              <img
                src={activeBio.photo}
                alt={activeBio.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border border-[#d5e2e7] shadow-sm shrink-0"
              />

              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#005a75] font-bold block">
                  {activeBio.role || activeBio.specialty}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#061a22]">
                  {activeBio.name}
                </h3>
                {activeBio.subtitle && (
                  <p className="text-xs text-[#455c65] mt-0.5">
                    {activeBio.subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="text-sm text-[#455c65] leading-relaxed space-y-3 mb-6 max-h-[55vh] overflow-y-auto pr-2 border-t border-[#d5e2e7]/60 pt-4">
              <p>{activeBio.bio}</p>
            </div>

            <div className="pt-4 border-t border-[#d5e2e7] flex flex-wrap items-center justify-between gap-3">
              {activeBio.linkedin ? (
                <a
                  href={activeBio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#005a75] hover:text-[#004358] transition-colors"
                >
                  <LinkedInIcon size={15} />
                  <span>View LinkedIn Profile</span>
                  <ArrowUpRight size={13} />
                </a>
              ) : (
                <span className="text-xs font-mono text-[#455c65]/70">
                  ElementSkill LLP · Pune
                </span>
              )}

              <Link
                to="/contact"
                onClick={() => setActiveBio(null)}
                className="px-5 py-2.5 rounded-full bg-[#005a75] hover:bg-[#004358] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                Connect With Team
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
