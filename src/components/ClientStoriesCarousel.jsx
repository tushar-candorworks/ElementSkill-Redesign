import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import { TestimonialModal } from "./TestimonialModal";

import sapiensLogo from "../assets/images/logo/sapiens_main_logo_website.webp";
import snowflakeLogo from "../assets/images/logo/snoflake.webp";
import amaraRajaLogo from "../assets/images/logo/Amara-raja.webp";
import gentrackLogo from "../assets/images/logo/gentrack_logo.webp";
import teConnectivityLogo from "../assets/images/logo/TE_Connectivity_logo.svg_-300x162.webp";
import omyaLogo from "../assets/images/logo/Logo_Omya.svg_-300x198.webp";
import btbLogo from "../assets/images/logo/Be-the-bank.webp";
import octavoLogo from "../assets/images/logo/logo-new-2.webp";
import sgAnalyticsLogo from "../assets/images/logo/sg_analytics_logo-1.webp";
import proeonLogo from "../assets/images/logo/Proeons.webp";

import oritAvatar from "../assets/images/avatars/orit-kraitsman.webp";
import garyAvatar from "../assets/images/avatars/gary-cheng.webp";
import adityaAvatar from "../assets/images/avatars/aditya-palthi.webp";
import vaniAvatar from "../assets/images/avatars/vani-vasudeva.webp";
import archanaAvatar from "../assets/images/avatars/archana-srivastava.webp";
import swatiAvatar from "../assets/images/avatars/swati-dogra.webp";
import vijayAvatar from "../assets/images/avatars/vijay-totlani.webp";
import bidanAvatar from "../assets/images/avatars/bidan-das.webp";
import kiranAvatar from "../assets/images/avatars/kiran-bala.webp";
import ashishAvatar from "../assets/images/avatars/ashish-korde.webp";

const STORIES = [
  {
    id: "sapiens",
    number: "01",
    storyTag: "01 / STORY",
    highlight: "Reetu conducted a transformative session for our team.",
    body: "Her vast experience was evident throughout, and the practical frameworks delivered immediate business value.",
    fullQuote:
      "Reetu conducted a session for our HR team in India. We have enjoyed the collaboration and mutual work with Reetu. Reetu was very professional and attentive to our needs. Reetu’s vast experience was demonstrated during the session itself and the team really enjoyed. The content was interesting and practical.",
    name: "Orit Kraitsman",
    role: "Global VP HR P&C Division",
    company: "Sapiens",
    companyLogo: sapiensLogo,
    logoClass: "h-6 sm:h-7 max-w-[150px]",
    avatar: oritAvatar,
    service: "skilling",
  },
  {
    id: "snowflake",
    number: "02",
    storyTag: "02 / STORY",
    highlight:
      "Reetu was an accomplished coach who tailored the workshop directly to our needs.",
    body: "Her workshop was engaging, enlightening, and empowering, providing habit-forming exercises that stay with participants.",
    fullQuote:
      "Reetu was a highly accomplished coach who carefully seeks to understand our needs and objectives as she prepares her workshop for my team. Her workshop was engaging, enlightening and empowering. Her workshop incorporated active participation and practical activities to emphasize the key learnings for the participants as well as providing habit forming exercises that can stay with the participants long after the workshop. Thank you.",
    name: "Gary Cheng",
    role: "Global Technical Support – APAC",
    company: "Snowflake",
    companyLogo: snowflakeLogo,
    logoClass: "h-6 sm:h-7 max-w-[140px]",
    avatar: garyAvatar,
    service: "skilling",
  },
  {
    id: "amara-raja",
    number: "03",
    storyTag: "03 / STORY",
    highlight:
      "We needed a partner who could quickly grasp the brief and act with urgency.",
    body: "ElementSkill made the entire recruitment experience personal, proactive, and seamless.",
    fullQuote:
      "ElementSkill has been very resourceful in finding the apt talent for niche roles in my team. Though our industry is nascent to Indian market, team at ElementSkill was quick to understand our requirements, analyse the market both within and outside India, and pool up possible prospects within a short amount of time to successfully close key positions. The team is proactive and very pleasant to work with, making the recruitment process a highly collaborative and efficient experience.",
    name: "Aditya Palthi",
    role: "Head – Cell Operations for Giga Factories",
    company: "Amara Raja",
    companyLogo: amaraRajaLogo,
    logoClass: "h-10 sm:h-11 max-w-[110px]",
    avatar: adityaAvatar,
    service: "hiring",
  },
  {
    id: "gentrack",
    number: "04",
    storyTag: "04 / STORY",
    highlight:
      "What stands out is the care and genuine partnering behind their process.",
    body: "ElementSkill listened closely, moved quickly, and helped us build a stronger team without ever compromising on fit.",
    fullQuote:
      "When it comes to having a trusted partner in talent acquisition, Element Skill is one of the first names that comes to mind. Reetu is a highly credible, well-connected leader who is deeply respected for her expertise in global talent acquisition, leadership coaching, business partnering, and RPO management. What sets Reetu and the ElementSkill team apart is their genuine partnering approach. They invest the time to understand the business, build trusted relationships, think creatively to solve complex hiring challenges, and consistently deliver strong outcomes for all stakeholders.",
    name: "Vani Vasudeva",
    role: "People Experience Director - India & Product Development at Gentrack Ltd (Global)",
    company: "gentrack",
    companyLogo: gentrackLogo,
    logoClass: "h-10 sm:h-11 max-w-[120px]",
    avatar: vaniAvatar,
    service: "hiring",
  },
  {
    id: "te-connectivity",
    number: "05",
    storyTag: "05 / STORY",
    highlight:
      "Their design thinking approach transformed our organization structure.",
    body: "They enabled us to align strategy with our people, fostering a culture of innovation and driving sustainable results.",
    fullQuote:
      "ElementSkill played a pivotal role in supporting the organization design activity for the auto business of TE Connectivity India. Their innovative approach, rooted in design thinking, enabled us to align our strategy with people, fostering a culture of collaboration and innovation. ElementSkill’s tailored solutions truly resonated with our business needs, helping us drive impactful and sustainable results.",
    name: "Archana Srivastava",
    role: "Head HR – TE Connectivity",
    company: "TE Connectivity",
    companyLogo: teConnectivityLogo,
    logoClass: "h-8 sm:h-9 max-w-[130px]",
    avatar: archanaAvatar,
    service: "consulting",
  },
  {
    id: "omya",
    number: "06",
    storyTag: "06 / STORY",
    highlight:
      "Working with ElementSkill has been a transformative partnership.",
    body: "They distinguish themselves as dedicated partners who collaborate closely at every stage of our talent strategy.",
    fullQuote:
      "ElementSkill is not just a premier recruitment and consulting firm- they distinguish themselves as dedicated partners who collaborate closely with clients at every stage of their talent needs. Working with Reetu has been a transformative experience; she has been both a recruitment partner and a mentor. The market & talent insights that she has shared have been instrumental in helping us develop a robust people strategy that aligns seamlessly with our business objectives. Reetu and her team consistently go above and beyond to provide support, demonstrating an unwavering commitment to their clients' success. I highly recommend ElementSkill to any organization seeking a strategic partner in the space of talent acquisition, leadership and organizational development",
    name: "Swati Dogra",
    role: "Head of HR - South Asia at Omya",
    company: "Omya",
    companyLogo: omyaLogo,
    logoClass: "h-9 sm:h-10 max-w-[110px]",
    avatar: swatiAvatar,
    service: "hiring",
  },
  {
    id: "btb",
    number: "07",
    storyTag: "07 / STORY",
    highlight:
      "ElementSkill is an exceptional, highly dependable talent partner.",
    body: "Their tireless commitment played a critical role in helping us close niche engineering positions on time and above benchmark.",
    fullQuote:
      "I would like to extend my heartfelt appreciation to ElementSkill for being an exceptional and dependable vendor partner. Your unwavering commitment, dedication, and tireless efforts have played a critical role in helping us close key hiring positions on time, often exceeding our expectations in both quality and efficiency. The partnership with ElementSkill has proven to be a true strategic advantage.",
    name: "Vijay Totlani",
    role: "VP, R&D Engineering & Head of India Centre, BTB India",
    company: "BTB India",
    companyLogo: btbLogo,
    logoClass: "h-7 sm:h-8 max-w-[150px]",
    avatar: vijayAvatar,
    service: "hiring",
  },
  {
    id: "octavo",
    number: "08",
    storyTag: "08 / STORY",
    highlight:
      "We collaborated with ElementSkill on a challenging healthcare assignment.",
    body: "Despite numerous hurdles and impediments, their resilience, dedication, and distinctive approach were truly exceptional.",
    fullQuote:
      "We collaborated with ElementSkill on a challenging healthcare assignment for hiring. Despite numerous hurdles and impediments, the resilience and commitment demonstrated by the ElementSkill team were exceptional. Their distinctive approach and dedication to delivering results set them apart from many other partners we have worked with.",
    name: "Dr Bidan Das",
    role: "Founder & Managing Director",
    company: "Octavo",
    companyLogo: octavoLogo,
    logoClass: "h-8 sm:h-9 max-w-[130px]",
    avatar: bidanAvatar,
    service: "hiring",
  },
  {
    id: "sg-analytics",
    number: "09",
    storyTag: "09 / STORY",
    highlight:
      "ElementSkill has been my go-to partner for niche, strategic hiring.",
    body: "Every shortlist was relevant, and they helped us build a stronger team without ever compromising on fit or speed.",
    fullQuote:
      "ElementSkill has been my go-to partner for any critical, niche, or strategic hiring. A partner you can totally rely on and works with you day in and day out! I have been very impressed with their speed to quickly adapt, modify and understand the requirements to ensure our talent needs are met with the most suitable talent within the timelines we are looking at. In addition to that, I truly value the strategic inputs and market insights that are shared to ensure we are not blindsided in our talent strategy and are constantly evolving with the changing talent landscape. Looking forward to engaging on other areas and keep strengthening the relationship.",
    name: "Dr. Kiran Bala",
    role: "CHRO SG Analytics",
    company: "SG Analytics",
    companyLogo: sgAnalyticsLogo,
    logoClass: "h-10 sm:h-11 max-w-[110px]",
    avatar: kiranAvatar,
    service: "hiring",
  },
  {
    id: "proeon",
    number: "10",
    storyTag: "10 / STORY",
    highlight:
      "Building the right team is absolutely critical for any growing start-up.",
    body: "ElementSkill took the time to deeply understand our vision, values, and culture, laying the perfect foundation for our team.",
    fullQuote:
      "For any growing start-up, building the right team is absolutely critical for success. Yet, finding the right talent is never easy. Beyond skills and competencies, we seek people who share our values, believe in our mission, and are willing to take bold risks. Equally important is finding the right talent acquisition partner who truly understands this need. We had an excellent experience working with ElementSkill in building our team. The founder, Reetu Raina, personally took the time to meet our existing team, experience our products, and deeply understand our vision, values, and culture. This laid the perfect foundation for identifying the right people for us. I would strongly recommend ElementSkill to any fast-growing organization. They not only bring expertise and professionalism but also the right mindset to partner with founders in their growth journey.",
    name: "Ashish Korde",
    role: "Co-Founder Proeon",
    company: "Proeon",
    companyLogo: proeonLogo,
    logoClass: "h-6 sm:h-7 max-w-[140px]",
    avatar: ashishAvatar,
    service: "hiring",
  },
];

export function ClientStoriesCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const isAutoPlaying = true;
  const [selectedStory, setSelectedStory] = useState(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const total = STORIES.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, handleNext]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getOffset = (index) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      aria-label="What Our Clients Say"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#f4f9fb] to-white text-[#061a22] focus:outline-none"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-220px] top-[56%] -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#007b9e]/12 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-110px] top-[56%] -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-[#007b9e]/8 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-220px] top-[56%] -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#007b9e]/12 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-110px] top-[56%] -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-[#007b9e]/8 pointer-events-none"
      />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
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
                What Our Clients Say
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
            Real feedback from enterprise partners and leaders who have
            transformed their talent strategy with ElementSkill.
          </p>
        </div>

        <div
          className="relative w-full h-[400px] sm:h-[370px] md:h-[350px] flex items-center justify-center overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {STORIES.map((story, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;
            const isPrev = offset === -1;
            const isNext = offset === 1;
            const isVisible = Math.abs(offset) <= 1;

            if (!isVisible) return null;
            let transformStyle = "";
            let zIndex = 10;
            let opacity = 0;
            let pointerEvents = "none";

            if (isActive) {
              transformStyle = "translateX(0%) scale(1)";
              zIndex = 30;
              opacity = 1;
              pointerEvents = "auto";
            } else if (isPrev) {
              transformStyle = "translateX(-74%) scale(0.92)";
              zIndex = 20;
              opacity = 0.38;
              pointerEvents = "auto";
            } else if (isNext) {
              transformStyle = "translateX(74%) scale(0.92)";
              zIndex = 20;
              opacity = 0.38;
              pointerEvents = "auto";
            }

            return (
              <div
                key={story.id}
                onClick={() => {
                  if (isPrev) handlePrev();
                  if (isNext) handleNext();
                  if (isActive) setSelectedStory(story);
                }}
                style={{
                  transform: transformStyle,
                  zIndex,
                  opacity,
                  pointerEvents,
                }}
                className="absolute w-[92vw] sm:w-[86vw] max-w-[760px] transition-all duration-500 ease-out select-none"
              >
                <div
                  className={`w-full min-h-[300px] sm:min-h-[285px] flex flex-col justify-between bg-white rounded-[26px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 border relative overflow-hidden group transition-all duration-300 ease-out ${
                    isActive
                      ? "border-[#e6eff2] shadow-[0_20px_50px_-12px_rgba(0,90,117,0.12),0_4px_16px_-4px_rgba(6,26,34,0.04)] hover:-translate-y-2 hover:shadow-[0_28px_65px_-10px_rgba(0,90,117,0.22),0_12px_24px_-6px_rgba(6,26,34,0.08)] hover:border-[#005a75]/40 cursor-pointer"
                      : "border-[#e6eff2] shadow-sm hover:opacity-75 cursor-pointer"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-5 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold tracking-widest text-[#007b9e] uppercase">
                        {story.storyTag}
                      </span>
                    </div>

                    <div className="w-36 sm:w-44 h-11 sm:h-12 flex items-center justify-end shrink-0">
                      {story.companyLogo ? (
                        <img
                          src={story.companyLogo}
                          alt={story.company}
                          className={`${story.logoClass || "h-9 sm:h-10 max-w-[140px]"} w-auto object-contain object-right opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.03)]`}
                          onError={(e) => {
                            e.target.style.display = "none";
                            if (e.target.nextSibling) {
                              e.target.nextSibling.style.display =
                                "inline-block";
                            }
                          }}
                        />
                      ) : null}
                      <span
                        className={`font-mono text-sm font-bold tracking-tight text-[#061a22] uppercase ${
                          story.companyLogo ? "hidden" : "inline-block"
                        }`}
                      >
                        {story.company}
                      </span>
                    </div>
                  </div>
                  <div className="my-auto py-2 relative z-10">
                    <p className="font-sans text-lg sm:text-[21px] md:text-[22px] text-[#061a22] leading-[1.42] tracking-tight">
                      <span className="font-bold">“{story.highlight} </span>
                      <span className="font-normal text-[#1e343f]">
                        {story.body}”
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between relative z-10 pt-3.5 border-t border-[#f0f5f7]">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-[#e6eff2] border border-[#d5e2e7] shrink-0 shadow-sm group-hover:ring-2 group-hover:ring-[#005a75]/30 transition-all duration-300">
                        {story.avatar ? (
                          <img
                            src={story.avatar}
                            alt={story.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              if (e.target.nextSibling) {
                                e.target.nextSibling.style.display = "flex";
                              }
                            }}
                          />
                        ) : null}
                        <div
                          className={`w-full h-full items-center justify-center font-bold text-xs font-mono text-[#005a75] ${
                            story.avatar ? "hidden" : "flex"
                          }`}
                        >
                          {story.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm sm:text-[15px] font-bold text-[#061a22] leading-tight">
                          {story.name}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-[#7a919a] mt-0.5 leading-snug">
                          {story.role}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedStory(story);
                      }}
                      className="hidden sm:inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#007b9e] group-hover:text-[#005a75] transition-colors cursor-pointer"
                      aria-label={`Read full story by ${story.name}`}
                    >
                      <span>Full story</span>
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1.5 group-hover:h-2 flex items-center transition-all duration-300">
                    {isPrev ? (
                      <>
                        <div className="h-full w-36 sm:w-52 bg-[#007b9e] rounded-tr-sm rounded-bl-[26px] sm:rounded-bl-[32px]" />
                        <div className="h-full flex-1 bg-[#e6eff2] opacity-40 rounded-br-[26px] sm:rounded-br-[32px]" />
                      </>
                    ) : (
                      <>
                        <div className="h-full flex-1 bg-[#e6eff2] opacity-40 rounded-bl-[26px] sm:rounded-bl-[32px]" />
                        <div className="h-full w-36 sm:w-52 bg-[#007b9e] rounded-tl-sm rounded-br-[26px] sm:rounded-br-[32px]" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-[760px] mx-auto mt-6 sm:mt-7 px-2 flex flex-col items-center justify-center gap-2">
          <div
            className="flex items-center gap-1.5"
            role="tablist"
            aria-label="Story navigation"
          >
            {STORIES.map((story, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={story.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to story ${story.number}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-7 bg-[#007b9e]"
                      : "w-2 bg-[#d5e2e7] hover:bg-[#a0b8c2]"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {selectedStory && (
        <TestimonialModal
          testimonial={{
            name: selectedStory.name,
            role: selectedStory.role,
            company: selectedStory.company,
            photo: selectedStory.avatar,
            logo: selectedStory.companyLogo,
            quote: selectedStory.fullQuote,
            service: selectedStory.service,
          }}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </section>
  );
}
