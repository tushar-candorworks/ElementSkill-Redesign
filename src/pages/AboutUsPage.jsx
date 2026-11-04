import { Sparkles, ShieldCheck, Target, Award } from "lucide-react";
import siteData from "../data/elementskill-data.json";
import { FAQAccordion } from "../components/FAQAccordion";
import { AnimatedCounter } from "../components/AnimatedCounter";

import teamHeroBg from "../assets/images/team_hero_bg.webp";
import executivePresentationImg from "../assets/images/Executive-Presentation-in-a-City-Office-Copy.webp";
import smilingFriendsImg from "../assets/images/Smiling-Friends-in-a-Modern-Office-new.webp";

export function AboutUsPage() {
  const { pages } = siteData;
  const aboutData = pages.about;

  const teamFaqs = [
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

  return (
    <div className="bg-[#f8fafc] text-[#061a22]">
      <section className="relative overflow-hidden pt-20 sm:pt-28 pb-16 sm:pb-24 px-6 sm:px-8 bg-[#030d14] text-white border-b border-white/10 select-none">
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
            <Sparkles size={14} className="text-[#005a75]" />
            <span>Talent Intelligence &amp; HR Advisory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px] 2xl:text-[62px] font-bold text-white tracking-tight leading-tight max-w-none mx-auto mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] lg:whitespace-nowrap">
            {aboutData.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            {aboutData.heroIntro}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-gradient-to-b from-[#f0f6f8]/50 via-[#f8fafc] to-[#f8fafc] border-b border-[#e5eff3] relative overflow-hidden">
        <div className="absolute top-10 left-10 pointer-events-none select-none opacity-20 hidden md:block">
          <svg
            className="w-20 h-16 text-[#005a75]"
            viewBox="0 0 60 48"
            fill="currentColor"
          >
            {[0, 1, 2, 3, 4].map((c) =>
              [0, 1, 2, 3].map((r) => (
                <circle
                  key={`about-dots-${c}-${r}`}
                  cx={c * 12 + 6}
                  cy={r * 12 + 6}
                  r="2"
                />
              )),
            )}
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
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
                  About Us
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
              Empirical talent intelligence, corporate HR practitioner rigor,
              and meaningful career opportunities.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            <div className="bg-white rounded-[30px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 border border-[#e5eff3] shadow-[0_12px_40px_rgba(0,90,117,0.06)] hover:shadow-[0_20px_50px_rgba(0,90,117,0.1)] hover:border-[#005a75]/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center group">
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0284c7] text-[10.5px] font-bold uppercase tracking-wider mb-4 w-fit">
                  <Target size={12} />
                  <span>Founding Ethos · Est. 2023</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061a22] tracking-tight mb-4">
                  {aboutData.storyHeadline}
                </h3>

                <p className="text-sm sm:text-[15px] text-[#455c65] leading-relaxed mb-6">
                  {aboutData.storyText}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#e5eff3]">
                  <div className="p-3 rounded-xl bg-[#f8fafc] border border-[#e5eff3]">
                    <span className="text-[10px] font-bold text-[#005a75] uppercase block tracking-wider">
                      The Gap
                    </span>
                    <span className="text-xs font-semibold text-[#061a22]">
                      Hiring in a Hurry
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f8fafc] border border-[#e5eff3]">
                    <span className="text-[10px] font-bold text-[#005a75] uppercase block tracking-wider">
                      The Gap
                    </span>
                    <span className="text-xs font-semibold text-[#061a22]">
                      Disconnected Growth
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f8fafc] border border-[#e5eff3]">
                    <span className="text-[10px] font-bold text-[#005a75] uppercase block tracking-wider">
                      The Gap
                    </span>
                    <span className="text-xs font-semibold text-[#061a22]">
                      Pay Without Data
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-[26px] overflow-hidden shadow-lg border border-[#e5eff3] aspect-[4/3] w-full bg-[#031d27] group/img">
                  <img
                    src={executivePresentationImg}
                    alt="Reetu Raina - Founder of ElementSkill presenting in modern office"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.15)] text-[#061a22]">
                    <span className="text-xs sm:text-[13px] font-bold text-[#005a75] block">
                      Reetu Raina · Founder &amp; CEO
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#54707d] block leading-tight mt-0.5">
                      25+ Years CHRO Rigor · Ex-Quick Heal &amp; Amdocs
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[30px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 border border-[#e5eff3] shadow-[0_12px_40px_rgba(0,90,117,0.06)] hover:shadow-[0_20px_50px_rgba(0,90,117,0.1)] hover:border-[#0d9488]/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center group">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-[26px] overflow-hidden shadow-lg border border-[#e5eff3] aspect-[4/3] w-full bg-[#f0f6f8] group/img">
                  <img
                    src={smilingFriendsImg}
                    alt="ElementSkill all-women team smiling together"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.15)] text-[#061a22]">
                    <span className="text-xs sm:text-[13px] font-bold text-[#0d9488] block">
                      100% Women-Led Delivery Squad
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#54707d] block leading-tight mt-0.5">
                      Empowering Talent across Tier 2 &amp; Tier 3 Cities
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ccfbf1] text-[#0f766e] text-[10.5px] font-bold uppercase tracking-wider mb-4 w-fit">
                  <Award size={12} />
                  <span>All-Women Startup · Social Impact</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061a22] tracking-tight mb-4">
                  {aboutData.opportunityHeadline}
                </h3>

                <p className="text-sm sm:text-[15px] text-[#455c65] leading-relaxed mb-6">
                  {aboutData.opportunityText}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#e5eff3]">
                  <div className="p-3 rounded-xl bg-[#f8fafc] border border-[#e5eff3]">
                    <span className="text-[10px] font-bold text-[#0d9488] uppercase block tracking-wider">
                      Inclusion
                    </span>
                    <span className="text-xs font-semibold text-[#061a22]">
                      Tier 2 &amp; 3 Cities
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f8fafc] border border-[#e5eff3]">
                    <span className="text-[10px] font-bold text-[#0d9488] uppercase block tracking-wider">
                      Standards
                    </span>
                    <span className="text-xs font-semibold text-[#061a22]">
                      Global-Grade Rigor
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f8fafc] border border-[#e5eff3]">
                    <span className="text-[10px] font-bold text-[#0d9488] uppercase block tracking-wider">
                      Impact
                    </span>
                    <span className="text-xs font-semibold text-[#061a22]">
                      Changing Access
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 sm:px-8 border-b border-[#e5eff3] bg-white">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#f8fafc] border border-[#e5eff3]">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#005a75]">
              <AnimatedCounter value={35} suffix="+" />
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#455c65] mt-1">
              Enterprise Clients
            </p>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-[#f8fafc] border border-[#e5eff3]">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#005a75]">
              <AnimatedCounter value={25} suffix="+ Years" />
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#455c65] mt-1">
              CHRO Leadership Rigor
            </p>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-[#f8fafc] border border-[#e5eff3]">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#005a75]">
              <AnimatedCounter value={100} suffix="+" />
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#455c65] mt-1">
              Transformations Delivered
            </p>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-[#f8fafc] border border-[#e5eff3]">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#005a75]">
              Pune, India
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#455c65] mt-1">
              Global Strategic Delivery
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-gradient-to-b from-[#f0f6f8]/60 via-[#f8fafc] to-[#f8fafc] border-t border-[#e5eff3]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#005a75] font-bold block mb-3">
              FOUNDATIONAL VALUES
            </span>

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
                  How We Operate
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
              The foundational principles that guide our talent advisory, client
              partnerships, and delivery standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[28px] border border-[#e5eff3] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#daf1f6] text-[#005a75] flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <span className="text-xs font-bold text-[#005a75] block mb-2">
                PRINCIPLE 01
              </span>
              <h3 className="text-xl font-bold text-[#061a22] mb-3">
                Partner, Not Vendor
              </h3>
              <p className="text-sm text-[#455c65] leading-relaxed">
                We embed deeply into your leadership culture and operational
                nuances. Our mandates are approached with the strategic rigor of
                an in-house talent office.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] border border-[#e5eff3] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#daf1f6] text-[#005a75] flex items-center justify-center mb-4">
                <Target size={20} />
              </div>
              <span className="text-xs font-bold text-[#005a75] block mb-2">
                PRINCIPLE 02
              </span>
              <h3 className="text-xl font-bold text-[#061a22] mb-3">
                Research-Backed Precision
              </h3>
              <p className="text-sm text-[#455c65] leading-relaxed">
                From case studies published with Ivey to longitudinal studies on
                generational workplace dynamics, empirical insight informs every
                recruitment search and workshop.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] border border-[#e5eff3] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#daf1f6] text-[#005a75] flex items-center justify-center mb-4">
                <Award size={20} />
              </div>
              <span className="text-xs font-bold text-[#005a75] block mb-2">
                PRINCIPLE 03
              </span>
              <h3 className="text-xl font-bold text-[#061a22] mb-3">
                Measurable Momentum
              </h3>
              <p className="text-sm text-[#455c65] leading-relaxed">
                We hold ourselves accountable to retention longevity, capability
                adoption, and leadership outcomes that directly move business
                indicators.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-6 sm:px-8 bg-gradient-to-b from-[#f8fafc] via-[#eaf3f6]/40 to-[#f8fafc] border-t border-[#d5e2e7]">
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
              Common questions about how our executive team and delivery
              practice partner with enterprise clients.
            </p>
          </div>

          <FAQAccordion items={teamFaqs} />
        </div>
      </section>
    </div>
  );
}
