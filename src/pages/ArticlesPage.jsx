import { useState, useMemo } from "react";
import {
  ArrowRight,
  Download,
  ExternalLink,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

import article1Img from "../assets/images/articles/article-1-growth.webp";
import article2Img from "../assets/images/articles/article-2-workplace.webp";
import article3Img from "../assets/images/articles/article-3-future.webp";
import article4Img from "../assets/images/articles/article-4-retention.webp";
import article5Img from "../assets/images/articles/article-5-orgdesign.webp";
import article6Img from "../assets/images/articles/article-6-learning.webp";

import { ArticleIllustration } from "../components/ArticleIllustration";
import { PageHeader } from "../components/PageHeader";

const ARTICLES_LIST = [
  {
    title:
      "Unlocking career potential: The rise of internal mobility as a powerful strategy for employee advancement",
    category: "CAREER GROWTH",
    categoryStyle: "bg-[#e0f2fe] text-[#0284c7]",
    topics: ["StrategicHR"],
    publisher: "ET HRWorld",
    image: article1Img,
    url: "https://hr.economictimes.indiatimes.com/news/hrtech/talent-acquisition-and-management/unlocking-career-potential-the-rise-of-internal-mobility-as-a-powerful-strategy-for-employee-advancement/106046654",
  },
  {
    title: "Democratised workplace: what it is and why it matters?",
    category: "WORKPLACE",
    categoryStyle: "bg-[#e6f4ea] text-[#0f9d58]",
    topics: ["StrategicHR"],
    publisher: "ET HRWorld",
    image: article2Img,
    url: "https://hr.economictimes.indiatimes.com/news/workplace-4-0/democratised-workplace-what-it-is-and-why-it-matters/97247649",
  },
  {
    title: "How employee-centric workplace will define the future of work?",
    category: "FUTURE OF WORK",
    categoryStyle: "bg-[#ede9fe] text-[#7c3aed]",
    topics: ["StrategicHR", "EVP"],
    publisher: "ET HRWorld",
    image: article3Img,
    url: "https://hr.economictimes.indiatimes.com/news/workplace-4-0/employee-engagement/how-employee-centric-workplace-will-define-the-future-of-work/95391050",
  },
  {
    title: "Why EVP is Key for Talent Retention",
    category: "DIVERSITY & INCLUSION",
    categoryStyle: "bg-[#ffedd5] text-[#ea580c]",
    topics: ["StrategicHR", "EVP"],
    publisher: "ET HRWorld",
    image: article4Img,
    url: "https://hr.economictimes.indiatimes.com/news/workplace-4-0/talent-management/why-evp-is-key-for-talent-retention/86335821",
  },
  {
    title: "Redefining Organisational Design in New Normal",
    category: "ORGANISATIONAL DESIGN",
    categoryStyle: "bg-[#e0e7ff] text-[#4f46e5]",
    topics: ["StrategicHR"],
    publisher: "ET HRWorld",
    image: article5Img,
    url: "https://hr.economictimes.indiatimes.com/news/hrtech/organization-development/redefining-organisational-design-in-new-normal/80277177",
  },
  {
    title: "Learnability: A New Organizational Learning Mindset",
    category: "LEARNING & DEVELOPMENT",
    categoryStyle: "bg-[#ccfbf1] text-[#0d9488]",
    topics: ["StrategicHR"],
    publisher: "AllThingsTalent",
    image: article6Img,
    url: "https://allthingstalent.org/learnability-a-new-organizational-learning-mindset/2021/01/21/",
  },
  {
    title: "How to make HR future-ready",
    category: "FUTURE OF HR",
    categoryStyle: "bg-[#e0f2fe] text-[#0284c7]",
    topics: ["StrategicHR"],
    publisher: "People Matters",
    illustrationId: "future-hr",
    url: "https://www.peoplematters.in/blog/strategic-hr/how-to-make-hr-future-ready-18695",
  },
  {
    title:
      "How employee-centric workplace will define the future of work? (Timesascent)",
    category: "WORKPLACE CULTURE",
    categoryStyle: "bg-[#fef3c7] text-[#b45309]",
    topics: ["EVP"],
    publisher: "Times Ascent",
    illustrationId: "workplace-culture",
    url: "https://timesascent.com/articles/how-employee-centric-workplace-will-define-the-future-of-work-/157006",
  },
  {
    title: "Reetu Raina, CHRO, Quick Heal on DE&I Challenges in 2021",
    category: "DIVERSITY & INCLUSION",
    categoryStyle: "bg-[#ffedd5] text-[#ea580c]",
    topics: ["Diversity&Inclusion"],
    publisher: "Sights In Plus",
    illustrationId: "dei-interview",
    url: "https://sightsinplus.com/interview/chro/reetu-raina-chro-quick-heal-on-dei-challenges-in-2021/",
  },
  {
    title: "Are data-driven decisions the best decisions?",
    category: "HR ANALYTICS",
    categoryStyle: "bg-[#ede9fe] text-[#7c3aed]",
    topics: ["HRAnalytics"],
    publisher: "People Matters",
    illustrationId: "hr-analytics",
    url: "https://www.peoplematters.in/article/hr-technology/are-data-driven-decisions-the-best-decisions-23868",
  },
];

const RESEARCH_PAPERS = [
  {
    title: "The Emerging New World Of Glocalised Leadership",
    category: "EXECUTIVE WHITEPAPER",
    categoryStyle: "bg-[#ccfbf1] text-[#0d9488]",
    author: "Reetu Raina · Founder & CEO",
    summary:
      "A seminal longitudinal study exploring how global leadership archetypes must be localized for high-growth Indian enterprise scale.",
    highlights: [
      "Empirical analysis drawn from 100+ enterprise transformations",
      "Global corporate models vs local execution realities",
      "Actionable roadmap for GCCs and Indian enterprises",
    ],
    illustrationId: "research-glocalised",
    url: "https://www.elementskill.com/wp-content/uploads/2024/01/Glocalised-Leadership-1.pdf",
    downloadLabel: "Download Whitepaper (PDF)",
    isExternal: false,
  },
  {
    title: "Engaging Indian Millennial At Workplace",
    category: "LONGITUDINAL STUDY",
    categoryStyle: "bg-[#ede9fe] text-[#7c3aed]",
    author: "Reetu Raina · TEDx Speaker",
    summary:
      "Deep empirical investigation into the aspirations, intrinsic drivers, and retention levers of the Indian millennial workforce.",
    highlights: [
      "Comprehensive survey across 1,500+ professionals",
      "EVP preferences beyond compensation benchmarks",
      "Retention and engagement frameworks for high-velocity teams",
    ],
    illustrationId: "research-millennial",
    url: "https://www.elementskill.com/wp-content/uploads/2024/01/Engaging-Indian-Millennial-_240415-1.pdf",
    downloadLabel: "Download Research (PDF)",
    isExternal: false,
  },
  {
    title: "Quick Heal Technologies: Quest For A Performance-Driven Culture",
    category: "IVEY PUBLISHING CASE STUDY",
    categoryStyle: "bg-[#e0f2fe] text-[#0284c7]",
    author: "Reetu Raina (Co-Author) · Harvard Business Publishing Partner",
    summary:
      "Published and distributed globally by Ivey Publishing, detailing the enterprise turnaround from annual reviews to a continuous performance culture.",
    highlights: [
      "Official Ivey Publishing peer-reviewed business case",
      "Taught in top executive MBA programs globally",
      "End-to-end performance culture turnaround playbook",
    ],
    illustrationId: "research-ivey",
    url: "https://www.iveypublishing.ca/s/product/quick-heal-technologies-quest-for-a-performancedriven-culture/01tOF000002bbU5YAI",
    downloadLabel: "Access Ivey Case Study",
    isExternal: true,
  },
];

const TOPIC_FILTERS = [
  { id: "ALL", label: "All" },
  { id: "StrategicHR", label: "#StrategicHR" },
  { id: "EVP", label: "#EVP" },
  { id: "Diversity&Inclusion", label: "#Diversity&Inclusion" },
  { id: "HRAnalytics", label: "#HRAnalytics" },
];

export function ArticlesPage() {
  const [selectedTopic, setSelectedTopic] = useState("ALL");
  const [showAll, setShowAll] = useState(false);

  const filteredArticles = useMemo(() => {
    if (selectedTopic === "ALL") return ARTICLES_LIST;
    return ARTICLES_LIST.filter(
      (item) => item.topics && item.topics.includes(selectedTopic),
    );
  }, [selectedTopic]);

  const displayedArticles = showAll
    ? filteredArticles
    : filteredArticles.slice(0, 6);
  const hasMore = filteredArticles.length > 6;

  return (
    <div className="bg-[#f8fafc] text-[#061a22] relative overflow-hidden">
      <PageHeader
        title="Articles"
        subtitle="Ideas, insights and stories to help you build a better workplace and a brighter future."
      />

      <section className="pb-16 sm:pb-24 px-6 sm:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 pb-4 border-b border-[#e5eff3]">
            {TOPIC_FILTERS.map((tab) => {
              const isActive = selectedTopic === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setSelectedTopic(tab.id);
                    setShowAll(false);
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#005a75] text-white shadow-md shadow-[#005a75]/20 scale-[1.02]"
                      : "bg-white text-[#455c65] border border-[#dce8ed] hover:border-[#005a75]/50 hover:text-[#005a75] hover:bg-[#f0f7f9]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-[24px] border border-[#e5eff3] p-8 max-w-md mx-auto">
              <h3 className="text-lg font-bold text-[#061a22] mb-1">
                No articles found
              </h3>
              <p className="text-xs text-[#455c65] mb-4">
                No articles matched the selected filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedTopic("ALL");
                  setShowAll(false);
                }}
                className="px-4 py-2 rounded-full bg-[#005a75] text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                {displayedArticles.map((article) => (
                  <a
                    key={article.title}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-[24px] sm:rounded-[26px] p-5 sm:p-6 border border-[#e5eff3] shadow-[0_6px_24px_rgba(0,90,117,0.06)] hover:shadow-[0_16px_36px_rgba(0,90,117,0.12)] hover:-translate-y-1 hover:border-[#005a75]/40 transition-all duration-300 flex flex-col sm:flex-row items-stretch justify-between gap-4 sm:gap-5 group"
                  >
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                      <div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider mb-2.5 ${article.categoryStyle}`}
                        >
                          {article.category}
                        </span>

                        <h3 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#061a22] group-hover:text-[#005a75] leading-snug transition-colors line-clamp-3 mb-3">
                          {article.title}
                        </h3>
                      </div>

                      <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-[#005a75] group-hover:text-[#004358] transition-colors mt-auto pt-2">
                        <span>Read more</span>
                        <span className="w-5 h-5 rounded-full bg-[#005a75] group-hover:bg-[#004358] text-white flex items-center justify-center transition-colors shadow-sm">
                          <ArrowRight
                            size={11}
                            className="group-hover:translate-x-0.5 transition-transform"
                          />
                        </span>
                      </div>
                    </div>

                    <ArticleIllustration
                      id={article.illustrationId}
                      image={article.image}
                      title={article.title}
                    />
                  </a>
                ))}
              </div>

              {hasMore && (
                <div className="flex justify-center mt-10 sm:mt-12">
                  <button
                    type="button"
                    onClick={() => setShowAll((prev) => !prev)}
                    className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-[#005a75] hover:bg-[#004358] text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_16px_rgba(0,90,117,0.2)] hover:shadow-[0_6px_22px_rgba(0,90,117,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
                  >
                    <span>
                      {showAll
                        ? "Show Less"
                        : `View More Articles (${filteredArticles.length - 6} more)`}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        showAll ? "rotate-180" : "group-hover:translate-y-0.5"
                      }`}
                    />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-20 px-6 sm:px-8 bg-gradient-to-b from-[#f0f6f8]/60 via-[#f8fafc] to-[#f8fafc] border-t border-[#e5eff3] relative overflow-hidden">
        <div className="absolute top-10 left-10 pointer-events-none select-none opacity-20 hidden md:block">
          <svg
            className="w-20 h-16 text-[#005a75]"
            viewBox="0 0 60 48"
            fill="currentColor"
          >
            {[0, 1, 2, 3, 4].map((c) =>
              [0, 1, 2, 3].map((r) => (
                <circle
                  key={`res-dots-${c}-${r}`}
                  cx={c * 12 + 6}
                  cy={r * 12 + 6}
                  r="2"
                />
              )),
            )}
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
              <svg
                className="w-6 h-6 text-[#005a75]"
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

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061a22] tracking-tight relative">
                <span className="relative inline-block pb-1.5">
                  Research Papers
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-3 text-[#005a75]"
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
                className="w-6 h-6 text-[#005a75]"
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

            <p className="text-sm sm:text-base text-[#455c65] leading-relaxed">
              Longitudinal empirical studies and peer-reviewed business cases
              co-authored with global academic institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
            {RESEARCH_PAPERS.map((paper) => (
              <div
                key={paper.title}
                className="bg-white rounded-[26px] p-6 sm:p-7 border border-[#e5eff3] shadow-[0_8px_30px_rgba(0,90,117,0.06)] hover:shadow-[0_18px_45px_rgba(0,90,117,0.14)] hover:-translate-y-1 hover:border-[#005a75]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider mb-2.5 ${paper.categoryStyle}`}
                      >
                        {paper.category}
                      </span>
                      <h3 className="text-[17px] font-bold text-[#061a22] group-hover:text-[#005a75] leading-snug transition-colors">
                        {paper.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#005a75] mt-1">
                        {paper.author}
                      </p>
                    </div>

                    <ArticleIllustration
                      id={paper.illustrationId}
                      title={paper.title}
                    />
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#455c65] leading-relaxed mb-4">
                    {paper.summary}
                  </p>

                  <div className="space-y-1.5 mb-6 pt-3 border-t border-[#e5eff3]">
                    {paper.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-xs text-[#455c65]"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-[#005a75] shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#e5eff3]">
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#005a75] hover:bg-[#004358] text-white text-xs font-semibold tracking-wide shadow-[0_2px_10px_rgba(0,90,117,0.2)] hover:shadow-[0_4px_14px_rgba(0,90,117,0.3)] transition-all cursor-pointer group/btn"
                  >
                    <span>{paper.downloadLabel}</span>
                    {paper.isExternal ? (
                      <ExternalLink
                        size={13}
                        className="group-hover/btn:translate-x-0.5 -translate-y-0.5 transition-transform"
                      />
                    ) : (
                      <Download
                        size={13}
                        className="group-hover/btn:translate-y-0.5 transition-transform"
                      />
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
