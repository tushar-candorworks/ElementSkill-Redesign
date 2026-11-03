import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import siteData from "../data/elementskill-data.json";
import { CompassIllustration } from "../components/CompassIllustration";
import { PageHeader } from "../components/PageHeader";

const DIMENSIONS = [
  {
    cardinal: "NORTH",
    symbol: "Np",
    title: "Core Purpose & Direction",
    description:
      "Clarifying the non-negotiable mission and long-horizon vision that guides leadership decisions.",
  },
  {
    cardinal: "EAST",
    symbol: "Av",
    title: "Strategic Agility",
    description:
      "Evaluating how swiftly a leader or team pivots when environmental and technological conditions shift.",
  },
  {
    cardinal: "SOUTH",
    symbol: "Vf",
    title: "Grounded Values & Ethics",
    description:
      "Understanding the bedrock principles that anchor culture during high-pressure cycles.",
  },
  {
    cardinal: "WEST",
    symbol: "Pi",
    title: "People Impact & Empathy",
    description:
      "Measuring psychological safety, developmental mentoring, and cross-functional resonance.",
  },
];

export function AssessmentPage() {
  const { pages } = siteData;
  const assessmentPage = pages.assessment;
  const dimensions = DIMENSIONS;

  return (
    <div className="bg-[#f8fafc] text-[#061a22]">
      <PageHeader
        title="Know Your North"
        subtitle="Our self-discovery diagnostic tool will help you identify your direction, strategic agility, and organizational leadership resonance."
      />

      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-white border-b border-[#e5eff3]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#daf1f6] text-xs font-bold uppercase tracking-wider text-[#005a75]">
              <span>Self Discovery Diagnostic</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#061a22] leading-tight">
              Direction Uncovered.
            </h2>

            <p className="text-lg sm:text-xl text-[#005a75] font-semibold leading-relaxed">
              {assessmentPage.subheadline}
            </p>

            <p className="text-sm sm:text-base text-[#455c65] leading-relaxed max-w-xl">
              In turbulent business cycles, skills can be acquired, but
              direction must be uncovered. Our proprietary self-discovery
              diagnostic is designed to help founders, executives, and
              high-potential managers find their true compass.
            </p>

            <div className="pt-2">
              <Link
                to="/contact?interest=Assessment"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#005a75] text-white font-semibold text-xs sm:text-sm hover:bg-[#004358] shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <Compass size={17} />
                <span>Inquire for Organization Pilot</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <CompassIllustration />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-gradient-to-b from-[#f0f6f8]/60 via-[#f8fafc] to-[#f8fafc]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#005a75] font-bold block mb-1">
              DIAGNOSTIC ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#061a22]">
              The Four Vectors of Alignment
            </h2>
            <p className="text-sm text-[#455c65] mt-2">
              How the Know Your North framework calibrates executive potential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dimensions.map((dim, idx) => (
              <div
                key={dim.cardinal}
                className="bg-white p-7 rounded-[28px] border border-[#e5eff3] shadow-sm flex flex-col justify-between hover:border-[#005a75]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="font-bold text-[#005a75] tracking-wider">
                      {dim.cardinal}
                    </span>
                    <span className="text-lg font-extrabold text-[#005a75]">
                      {dim.symbol}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#061a22] mb-2">
                    {dim.title}
                  </h4>
                  <p className="text-xs text-[#455c65] leading-relaxed">
                    {dim.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#e5eff3] text-[11px] font-semibold text-[#455c65]/70">
                  <span>DIMENSION 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
