import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, X, CheckCircle2, ArrowRight, Mail } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

import adventureBg from "../assets/images/skilling/large-adventure.webp";
import designThinkingImg from "../assets/images/skilling/92925.webp";
import adaptabilityImg from "../assets/images/skilling/photoholgic-aEaXkNAZNTE-unsplash.webp";
import growthMindsetImg from "../assets/images/skilling/2150936873.webp";
import aiAdvantageImg from "../assets/images/skilling/Gemini_Generated_Image_3euefh3euefh3eue-1.webp";
import adaptiveLeadershipImg from "../assets/images/skilling/campaign-creators-gMsnXqILjp4-unsplash.webp";
import ambidextrousLeadershipImg from "../assets/images/skilling/Gemini_Generated_Image_3eax7g3eax7g3eax-1.webp";

const LEARNING_PROGRAMS = [
  {
    id: "design-thinking",
    number: "01",
    title: "Design Thinking",
    description: "Innovation frameworks for product and process transformation",
    image: designThinkingImg,
    modules: [
      "Human-centric problem definition & user empathy mapping",
      "Rapid prototyping & iterative validation cycles",
      "Cross-functional innovation labs & execution frameworks",
    ],
    audience: "Product Leaders, R&D Executives, and Engineering Managers",
  },
  {
    id: "adaptability-resilience",
    number: "02",
    title: "Adaptability & Resilience",
    description:
      "Building agile leadership in volatile and uncertain environments.",
    image: adaptabilityImg,
    modules: [
      "Cognitive agility under market disruptions",
      "Somatic resilience & stress management frameworks",
      "Leading teams through restructuring & change fatigue",
    ],
    audience: "Executive Directors, Business Unit Heads, and Senior Managers",
  },
  {
    id: "growth-mindset",
    number: "03",
    title: "Growth Mindset",
    description:
      "Cultivating continuous learning culture across the organization.",
    image: growthMindsetImg,
    modules: [
      "Reframing organizational setbacks into generative insight",
      "Feedback mechanics that foster psychological safety",
      "Unlocking discretionary effort across hybrid workforces",
    ],
    audience: "People Leaders, Functional Heads, and High-Potential Talent",
  },
  {
    id: "ai-advantage",
    number: "04",
    title: "AI Advantage",
    description:
      "Leveraging AI for workforce productivity and strategic advantage.",
    image: aiAdvantageImg,
    modules: [
      "GenAI workflows for strategic executive decision-making",
      "Automating operational bottlenecks with human-in-the-loop oversight",
      "Responsible AI governance, ethics, and workforce enablement",
    ],
    audience: "Tech Leads, Digital Transformation Officers, and Operations VPs",
  },
  {
    id: "adaptive-leadership",
    number: "05",
    title: "Adaptive Leadership",
    description:
      "Diagnosing systemic challenges, building team resilience, fostering a culture of continuous learning, managing productive tension",
    image: adaptiveLeadershipImg,
    modules: [
      "Distinguishing technical problems from complex adaptive challenges",
      "Regulating distress and holding productive tension",
      "Mobilizing collective intelligence across siloed functions",
    ],
    audience: "C-Suite Executives, Founders, and Senior Capability Leaders",
  },
  {
    id: "ambidextrous-leadership",
    number: "06",
    title: "Ambidextrous Leadership",
    description:
      "Drives both high innovation and operational efficiency by flexibly balancing two opposing styles: opening behaviors.",
    image: ambidextrousLeadershipImg,
    modules: [
      "Balancing core operational exploitation with exploratory innovation",
      "Switching between opening behaviors and closing governance",
      "Dual-operating structures for mature enterprise scaling",
    ],
    audience: "Managing Directors, Country Heads, and Strategic Planners",
  },
];

export function SkillingPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProgram(null);
    };
    if (selectedProgram) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProgram]);

  return (
    <div className="bg-white text-[#061a22] min-h-screen">
      <PageHeader
        title="Skilling Solutions"
        subtitle="Empowering modern enterprises with future-ready leadership capability, adaptive resilience, and transformative learning interventions."
      >
        <div className="pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="mailto:info@elementskill.com?subject=Skilling%20Expert%20Request%20-%20ElementSkill"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#005a75] text-white font-semibold text-xs sm:text-sm hover:bg-[#004358] shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <span>Book an Expert Request</span>
            <ArrowRight size={14} />
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-[#005a75] text-[#005a75] font-semibold text-xs sm:text-sm hover:bg-[#005a75]/10 transition-colors cursor-pointer"
          >
            <span>View 6 Learning Programs</span>
          </a>
        </div>
      </PageHeader>

      <section
        id="programs"
        aria-label="Our Learning Programs"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-10"
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#005a75] tracking-tight">
              Our Learning Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {LEARNING_PROGRAMS.map((program) => (
              <div
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden h-[330px] sm:h-[350px] md:h-[360px] p-6 sm:p-7 flex flex-col items-center justify-center text-center cursor-pointer shadow-[0_8px_26px_rgba(0,0,0,0.10)] hover:shadow-[0_20px_45px_rgba(0,90,117,0.24)] transition-all duration-300 hover:-translate-y-1.5"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/30 group-hover:from-black/50 group-hover:via-black/20 group-hover:to-black/25 transition-all duration-300 pointer-events-none"
                />

                <div className="relative z-10 flex flex-col items-center justify-center max-w-[320px] mx-auto">
                  <div className="mb-3.5 inline-flex items-center justify-center max-w-full">
                    <span className="inline-block px-5 sm:px-6 py-2.5 rounded-[12px] bg-[#005a75] text-white font-bold text-[15px] sm:text-[17px] md:text-[18px] lg:text-[18.5px] tracking-tight shadow-md group-hover:bg-[#00485e] transition-colors leading-tight whitespace-nowrap text-center">
                      {program.title}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] md:text-[13.5px] font-medium text-white leading-relaxed max-w-[92%] mx-auto drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.9)]">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label="Book an expert request"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-[#edf6f9] border-y border-[#dce8ed]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#061a22] tracking-tight mb-4">
            To book an expert or drop a request
          </h2>

          <p className="text-sm sm:text-base text-[#455c65] max-w-2xl mx-auto leading-relaxed mb-8">
            Connect directly with ElementSkill practice leaders to design
            tailored institutional workshops, leadership coaching pods, and
            customized talent diagnostics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <a
              href="mailto:info@elementskill.com?subject=Skilling%20and%20Workshop%20Inquiry%20-%20ElementSkill"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#005a75] hover:bg-[#004358] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-colors cursor-pointer"
            >
              <Mail size={16} />
              <span>info@elementskill.com</span>
              <ArrowRight size={14} />
            </a>

            <Link
              to="/contact?interest=Skilling"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#005a75] text-[#005a75] hover:bg-[#005a75]/10 font-semibold text-sm sm:text-base transition-colors cursor-pointer"
            >
              <span>Schedule Consultation</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-[#d8e6eb] grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-xs sm:text-sm text-[#455c65]">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#005a75] shrink-0" />
              <span>Bespoke Cohort Design</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#005a75] shrink-0" />
              <span>Global Faculty Network</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#005a75] shrink-0" />
              <span>Measurable Leadership ROI</span>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Building Leaders For Tomorrow"
        className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-28 px-4 sm:px-6 overflow-hidden select-none"
        style={{
          backgroundImage: `url(${adventureBg})`,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70 pointer-events-none"
        />

        <div className="relative z-10 max-w-[1140px] mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white tracking-tight drop-shadow-md">
              Building Leaders For Tomorrow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 max-w-[960px] mx-auto text-center">
            <div className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1.5">
              <div className="mb-3 text-white/95 group-hover:text-white transition-colors">
                <svg
                  className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect
                    x="2.5"
                    y="3.5"
                    width="19"
                    height="17"
                    rx="2"
                    strokeDasharray="2.5 2.5"
                  />
                  <line
                    x1="2.5"
                    y1="8.5"
                    x2="21.5"
                    y2="8.5"
                    strokeDasharray="none"
                  />
                  <circle cx="5.5" cy="6" r="0.8" fill="currentColor" />
                  <circle cx="8" cy="6" r="0.8" fill="currentColor" />
                </svg>
              </div>

              <div className="flex items-baseline justify-center mb-2 leading-none">
                <span className="text-5xl sm:text-6xl md:text-[64px] font-bold text-white tracking-tight drop-shadow-md">
                  200
                </span>
                <span className="text-3xl sm:text-4xl font-bold text-white ml-0.5 -translate-y-3">
                  +
                </span>
              </div>

              <p className="text-base sm:text-[17px] font-medium text-white/95 tracking-wide">
                Coaching Hours
              </p>
            </div>

            <div className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1.5">
              <div className="mb-3 text-white/95 group-hover:text-white transition-colors">
                <svg
                  className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="16" y1="11" x2="22" y2="11" />
                </svg>
              </div>

              <div className="flex items-baseline justify-center mb-2 leading-none">
                <span className="text-5xl sm:text-6xl md:text-[64px] font-bold text-white tracking-tight drop-shadow-md">
                  700
                </span>
                <span className="text-3xl sm:text-4xl font-bold text-white ml-0.5 -translate-y-3">
                  +
                </span>
              </div>

              <p className="text-base sm:text-[17px] font-medium text-white/95 tracking-wide">
                Facilitation Hours
              </p>
            </div>

            <div className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1.5">
              <div className="mb-3 text-white/95 group-hover:text-white transition-colors">
                <Users
                  size={42}
                  strokeWidth={1.6}
                  className="drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex items-baseline justify-center mb-2 leading-none">
                <span className="text-5xl sm:text-6xl md:text-[64px] font-bold text-white tracking-tight drop-shadow-md">
                  20
                </span>
                <span className="text-3xl sm:text-4xl font-bold text-white ml-0.5 -translate-y-3">
                  +
                </span>
              </div>

              <p className="text-base sm:text-[17px] font-medium text-white/95 tracking-wide">
                Clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {selectedProgram && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-[26px] overflow-hidden shadow-2xl border border-[#d5e2e7] animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#061a22]">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a22] via-[#061a22]/75 to-black/40" />

              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-5 left-6 right-6">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#86d4e7] mb-1.5 block">
                  PROGRAM {selectedProgram.number} / CURRICULUM
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {selectedProgram.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-[15px] sm:text-base text-[#334e58] font-medium leading-relaxed">
                  {selectedProgram.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#005a75] mb-3">
                  Key Curriculum Focus Areas
                </h4>
                <div className="space-y-2.5">
                  {selectedProgram.modules.map((mod, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-[#455c65]"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#007b9e] shrink-0 mt-0.5"
                      />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f0f6f8] border border-[#d5e2e7] flex items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-[#005a75]">Target Cohort:</span>
                <span className="text-[#334e58] font-medium">
                  {selectedProgram.audience}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#d5e2e7] text-[#455c65] font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={`mailto:info@elementskill.com?subject=Inquiry%20regarding%20${encodeURIComponent(selectedProgram.title)}%20Program`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#005a75] hover:bg-[#004358] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                >
                  <span>Request Full Syllabus</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
