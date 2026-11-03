import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import hiringImg from "../assets/images/HiringImage.webp";
import skillingImg from "../assets/images/skllingImage.webp";
import assessmentImg from "../assets/images/AssementImage.webp";

const CARDS = [
  {
    number: "01",
    tag: "TALENT ACQUISITION",
    title: "Hiring",
    description:
      "Find and onboard the right talent with end-to-end recruitment support built for growth.",
    image: hiringImg,
    secondaryAction: "Learn capabilities",
    link: "/hiring",
  },
  {
    number: "02",
    tag: "WORKFORCE TRAINING",
    title: "Skilling",
    description:
      "Build lasting capabilities with tailored learning paths that grow with your business.",
    image: skillingImg,
    secondaryAction: "Explore paths",
    link: "/skilling",
  },
  {
    number: "03",
    tag: "EVALUATION & BENCHMARKS",
    title: "Assessment",
    description:
      "Evaluate potential with clear, data-backed insights and easy-to-read scorecards.",
    image: assessmentImg,
    secondaryAction: "View benchmarks",
    link: "/assessment",
  },
];

export function TalentSolutions() {
  return (
    <section className="bg-[#005a75] pt-10 sm:pt-12 pb-20 px-6 sm:px-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-12">
          <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#86d4e7] mb-2.5">
            TALENT SOLUTIONS
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] xl:text-[52px] font-bold text-white tracking-[-0.02em] leading-tight mb-3 sm:whitespace-nowrap">
            One Stop Shop For All Your Talent Needs
          </h2>

          <p className="text-[15px] sm:text-[16px] text-[#cbe6ee] font-normal leading-relaxed max-w-2xl mx-auto">
            Hiring, skilling, and assessment — joined up in one simple partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[20px] overflow-hidden shadow-[0_10px_28px_rgba(0,0,0,0.16)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)] group"
            >
              <div className="relative h-[260px] sm:h-[275px] w-full overflow-hidden bg-[#061a22]">
                <img
                  src={card.image}
                  alt={card.title}
                  width="400"
                  height="275"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a22]/90 via-[#061a22]/35 to-transparent" />

                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#6bd5ec] mb-1">
                    {card.tag}
                  </p>
                  <h3 className="text-[26px] font-bold text-white leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>

              <div className="bg-white px-5 py-4 flex flex-col justify-between">
                <p className="text-[14px] text-[#4d6671] leading-[1.55] mb-3.5">
                  {card.description}
                </p>

                <div className="pt-3 border-t border-[#e8eff2] flex items-center justify-between text-[14px]">
                  <span className="text-[#6d8894] font-medium hover:text-[#005a75] transition-colors cursor-pointer">
                    {card.secondaryAction}
                  </span>

                  <Link
                    to={card.link}
                    className="inline-flex items-center gap-1.5 font-bold text-[#005a75] hover:text-[#004358] transition-colors group/link"
                  >
                    <span>Read more</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
