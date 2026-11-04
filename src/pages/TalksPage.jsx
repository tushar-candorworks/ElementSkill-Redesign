import { useState } from "react";
import { Play, Clock, ArrowUpRight, ChevronDown } from "lucide-react";
import siteData from "../data/elementskill-data.json";
import { YouTubeIcon, SpotifyIcon } from "../components/SocialIcons";
import { PageHeader } from "../components/PageHeader";

import podcastCover from "../assets/images/podcast-cover.webp";
import podcastEp1 from "../assets/images/podcasts/podcast-ep-1.webp";
import podcastEp2 from "../assets/images/podcasts/podcast-ep-2.webp";
import podcastEp3 from "../assets/images/podcasts/podcast-ep-3.webp";
import podcastEp4 from "../assets/images/podcasts/podcast-ep-4.webp";
import podcastEp5 from "../assets/images/podcasts/podcast-ep-5.webp";

const PODCAST_EPISODES = [
  {
    id: "7GGGQVENZFulU0ee3BskmI",
    title: "Empowering Women in Tech: A Global Perspective",
    subname: "Tzvia Reinhold · Head of Learning & Org Development, Amdocs",
    category: "WOMEN IN TECH",
    categoryStyle: "bg-[#fce7f3] text-[#be185d]",
    duration: "32 min",
    image: podcastEp1,
    spotifyUrl: "https://open.spotify.com/episode/7GGGQVENZFulU0ee3BskmI",
    summary:
      "A deep-dive conversation on breaking systemic barriers in enterprise technology, intentional career charting, and building high-impact mentor networks.",
  },
  {
    id: "2wchFr4Psc8qzpkIhPKflZ",
    title: "Culture, Competence & Connection: The Amdocs Way",
    subname: "Esty Liani · Global Head of Culture & Talent Management",
    category: "CULTURE & LEADERSHIP",
    categoryStyle: "bg-[#e0f2fe] text-[#0284c7]",
    duration: "28 min",
    image: podcastEp2,
    spotifyUrl: "https://open.spotify.com/episode/2wchFr4Psc8qzpkIhPKflZ",
    summary:
      "Examining how a global matrix organization nurtures core competencies, employee connection, and high-trust leadership across international corridors.",
  },
  {
    id: "0lOCBwSyMCzX9TQVhQKYYE",
    title: "Navigating Career Inflection Points & Pivots",
    subname: "Adam Rogers · VP & Head of Global Talent Acquisition",
    category: "CAREER GROWTH",
    categoryStyle: "bg-[#dcfce7] text-[#15803d]",
    duration: "35 min",
    image: podcastEp3,
    spotifyUrl: "https://open.spotify.com/episode/0lOCBwSyMCzX9TQVhQKYYE",
    summary:
      "Strategic frameworks for identifying transformative career moments, navigating lateral moves, and taking intentional agency over professional trajectory.",
  },
  {
    id: "5AgPW4wX9AeHw2PlsbqB09",
    title: "Leading Through Ambiguity in High-Scale Tech",
    subname: "Itzhak Tueg · VP Global Cloud Services & Delivery, Amdocs",
    category: "TECH LEADERSHIP",
    categoryStyle: "bg-[#ede9fe] text-[#7c3aed]",
    duration: "30 min",
    image: podcastEp4,
    spotifyUrl: "https://open.spotify.com/episode/5AgPW4wX9AeHw2PlsbqB09",
    summary:
      "Decisive leadership strategies in the face of rapid technological disruption, enterprise cloud migration, and volatile stakeholder expectations.",
  },
  {
    id: "5FfuFi5JCrJCFJmV6Ld8sQ",
    title: "The Psychology of Resilience & High Performance",
    subname: "Ayana Gisser · Executive Coach & Senior Org Psychologist",
    category: "HIGH PERFORMANCE",
    categoryStyle: "bg-[#ffedd5] text-[#ea580c]",
    duration: "33 min",
    image: podcastEp5,
    spotifyUrl: "https://open.spotify.com/episode/5FfuFi5JCrJCFJmV6Ld8sQ",
    summary:
      "Unpacking cognitive resilience, boundary architecture, and psychological safety as foundational pillars for enduring executive longevity.",
  },
  {
    id: "1hsPqOmf0nXHXlQJVpOSor",
    title: "Designing Inclusive Career Mobility Frameworks",
    subname:
      "Shir Erlichman · Director, Diversity, Inclusion & People Experience",
    category: "DIVERSITY & MOBILITY",
    categoryStyle: "bg-[#ccfbf1] text-[#0d9488]",
    duration: "27 min",
    image: podcastCover,
    spotifyUrl: "https://open.spotify.com/episode/1hsPqOmf0nXHXlQJVpOSor",
    summary:
      "Moving internal mobility from HR rhetoric to scalable infrastructure, ensuring equitable advancement pathways across multicultural teams.",
  },
  {
    id: "3RfGXmVK1Q2WVQRrBTGAyb",
    title: "Building Agile Teams for Exponential Scale",
    subname: "Nati Oz Sinay · Head of Global Engineering Excellence",
    category: "ORGANISATIONAL DESIGN",
    categoryStyle: "bg-[#fef3c7] text-[#b45309]",
    duration: "31 min",
    image: podcastEp2,
    spotifyUrl: "https://open.spotify.com/episode/3RfGXmVK1Q2WVQRrBTGAyb",
    summary:
      "How high-velocity technology organizations dismantle silos, empower cross-functional squads, and accelerate enterprise delivery cycles.",
  },
  {
    id: "0Min4hJlqPS6zQJlMCmfy2",
    title: "Coaching the Next Generation of Global Leaders",
    subname: "Mike MacDade · Executive Leadership Coach & Strategist",
    category: "EXECUTIVE COACHING",
    categoryStyle: "bg-[#ede9fe] text-[#6366f1]",
    duration: "34 min",
    image: podcastEp3,
    spotifyUrl: "https://open.spotify.com/episode/0Min4hJlqPS6zQJlMCmfy2",
    summary:
      "Key frameworks for mentoring emerging leaders, bridging generational workplace expectations, and cultivating authentic leadership presence.",
  },
  {
    id: "6HcnzALppvS6HMt06gZPo2",
    title: "Future of Work: Human Agency in the AI Era",
    subname: "Reetu Raina · Founder ElementSkill & Former Global CHRO",
    category: "STRATEGIC HR",
    categoryStyle: "bg-[#e0f2fe] text-[#0369a1]",
    duration: "38 min",
    image: podcastCover,
    spotifyUrl: "https://open.spotify.com/episode/6HcnzALppvS6HMt06gZPo2",
    summary:
      "A signature dialogue exploring how human agency, empathy, and continuous reskilling remain irreplaceable differentiators in automated environments.",
  },
];

const FEATURED_TALK = siteData.talks[0];
const OTHER_TALKS = siteData.talks.slice(1);

export function TalksPage() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [showAllPodcasts, setShowAllPodcasts] = useState(false);

  const featuredTalk = FEATURED_TALK;
  const otherTalks = OTHER_TALKS;

  const displayedPodcasts = showAllPodcasts
    ? PODCAST_EPISODES
    : PODCAST_EPISODES.slice(0, 6);

  return (
    <div className="bg-[#f8fafc] text-[#061a22]">
      <PageHeader
        title="Talks & Podcasts"
        subtitle="Keynote addresses, global leadership interviews, and conversations on high-performance workplace design."
      />

      <section className="py-14 sm:py-18 px-6 sm:px-8 bg-gradient-to-b from-[#eaf4f7]/40 via-[#f8fafc] to-[#f8fafc] border-b border-[#e5eff3]">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-[#005a75] font-bold">
              FEATURED KEYNOTE
            </span>
            <div className="flex items-center gap-2 text-xs text-[#455c65]">
              <Clock size={13} className="text-[#005a75]" />
              <span>{featuredTalk.duration}</span>
            </div>
          </div>

          <div className="bg-white rounded-[28px] border border-[#e5eff3] overflow-hidden shadow-[0_8px_30px_rgba(0,90,117,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-[20px] overflow-hidden bg-black shadow-inner">
                {activeVideoId === featuredTalk.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${featuredTalk.youtubeId}?autoplay=1&rel=0`}
                    title={featuredTalk.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div
                    onClick={() => setActiveVideoId(featuredTalk.youtubeId)}
                    className="relative w-full h-full cursor-pointer group"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${featuredTalk.youtubeId}/maxresdefault.jpg`}
                      alt={featuredTalk.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${featuredTalk.youtubeId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#005a75] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play size={28} className="ml-1 fill-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="bg-black/70 px-3 py-1 rounded-md backdrop-blur-sm">
                        {featuredTalk.event}
                      </span>
                      <span className="bg-black/70 px-3 py-1 rounded-md backdrop-blur-sm">
                        {featuredTalk.duration}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#005a75] font-bold">
                {featuredTalk.event}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#061a22] leading-tight">
                {featuredTalk.title}
              </h2>
              <p className="text-sm text-[#455c65] leading-relaxed">
                In this celebrated TEDx address, Reetu Raina deconstructs
                internal agency and ownership—how individuals and leaders
                transition from passive recipients to architects of systemic
                value.
              </p>
              <div className="pt-2">
                <a
                  href={featuredTalk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#005a75] hover:bg-[#004358] text-white text-xs font-semibold tracking-wide shadow-sm hover:shadow-md transition-all"
                >
                  <YouTubeIcon size={16} className="text-white" />
                  <span>Open directly on YouTube</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 sm:pt-16 pb-8 sm:pb-10 px-6 sm:px-8 bg-[#f8fafc]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#005a75] font-bold block mb-2">
              EXECUTIVE SESSIONS
            </span>

            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6 text-[#005a75]"
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

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061a22] tracking-tight relative">
                <span className="relative inline-block pb-1.5">
                  Keynotes &amp; Industry Panels
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-3 text-[#00a8cc]"
                    viewBox="0 0 100 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9C25 3 75 3 98 9"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <svg
                className="w-5 sm:w-6 h-5 sm:h-6 text-[#005a75]"
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
            <p className="text-xs sm:text-sm text-[#455c65] mt-1">
              Featured executive addresses and global dialogues on future of
              work and high-performance talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherTalks.map((talk) => (
              <div
                key={talk.title}
                className="bg-white rounded-[24px] border border-[#e5eff3] shadow-[0_6px_24px_rgba(0,90,117,0.06)] hover:shadow-[0_16px_36px_rgba(0,90,117,0.12)] hover:-translate-y-1 hover:border-[#005a75]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video bg-black overflow-hidden">
                    {activeVideoId === talk.youtubeId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${talk.youtubeId}?autoplay=1&rel=0`}
                        title={talk.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    ) : (
                      <div
                        onClick={() => setActiveVideoId(talk.youtubeId)}
                        className="relative w-full h-full cursor-pointer group/thumb"
                      >
                        <img
                          src={`https://img.youtube.com/vi/${talk.youtubeId}/hqdefault.jpg`}
                          alt={talk.title}
                          className="w-full h-full object-cover opacity-85 group-hover/thumb:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 flex items-center justify-center transition-colors">
                          <div className="w-12 h-12 rounded-full bg-[#005a75] text-white flex items-center justify-center shadow-md transform group-hover/thumb:scale-110 transition-transform">
                            <Play size={20} className="ml-0.5 fill-white" />
                          </div>
                        </div>
                        <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded">
                          {talk.duration}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#005a75] block mb-2">
                      {talk.event}
                    </span>
                    <h3 className="text-lg font-bold text-[#061a22] leading-snug group-hover:text-[#005a75] transition-colors">
                      {talk.title}
                    </h3>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 flex items-center justify-between text-xs border-t border-[#e5eff3] text-[#455c65]">
                  <span>Duration: {talk.duration}</span>
                  <a
                    href={talk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#005a75] hover:text-[#004358] transition-colors"
                  >
                    <span>Watch on YouTube</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-8 sm:pt-10 pb-16 sm:pb-24 px-6 sm:px-8 bg-gradient-to-b from-[#f0f6f8]/70 via-[#f8fafc] to-[#f8fafc] border-t border-[#e5eff3] relative overflow-hidden">
        <div className="absolute top-10 left-10 pointer-events-none select-none opacity-20 hidden md:block">
          <svg
            className="w-20 h-16 text-[#005a75]"
            viewBox="0 0 60 48"
            fill="currentColor"
          >
            {[0, 1, 2, 3, 4].map((c) =>
              [0, 1, 2, 3].map((r) => (
                <circle
                  key={`pod-dots-${c}-${r}`}
                  cx={c * 12 + 6}
                  cy={r * 12 + 6}
                  r="2"
                />
              )),
            )}
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6 text-[#005a75]"
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
                  Podcast
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-3 text-[#00a8cc]"
                    viewBox="0 0 100 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9C25 3 75 3 98 9"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <svg
                className="w-5 sm:w-6 h-5 sm:h-6 text-[#005a75]"
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

            <p className="text-base sm:text-lg text-[#061a22] font-semibold leading-relaxed">
              Your Career: Is it Choice or Chance?
            </p>
            <p className="text-xs sm:text-sm text-[#455c65] mt-1.5 max-w-2xl mx-auto">
              Produced by Amdocs and co-hosted by Reetu Raina. Deep-dive
              dialogues with global tech executives exploring career agency,
              high-performance coaching, and leadership.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#005a75] via-[#004358] to-[#042838] rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-white mb-10 sm:mb-12 shadow-[0_8px_30px_rgba(0,90,117,0.12)] flex flex-col md:flex-row items-center justify-between gap-5 border border-white/10">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
                <SpotifyIcon size={32} className="text-[#1db954]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#38bdf8] block">
                  Full 9-Episode Archive
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Stream the Entire Series on Spotify
                </h3>
                <p className="text-xs text-white/75 mt-0.5">
                  Listen directly on Spotify or explore individual episodes
                  below.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
              <a
                href="https://open.spotify.com/show/4oT2rxMsRP64h9NXuA11DJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#1db954] hover:bg-[#1ed760] text-[#061a22] font-bold text-xs tracking-wide shadow-md hover:shadow-lg transition-all duration-200"
              >
                <SpotifyIcon size={16} />
                <span>Open Show on Spotify</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
            {displayedPodcasts.map((ep) => (
              <a
                key={ep.id}
                href={ep.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[24px] sm:rounded-[26px] p-5 sm:p-6 border border-[#e5eff3] shadow-[0_6px_24px_rgba(0,90,117,0.06)] hover:shadow-[0_16px_36px_rgba(0,90,117,0.12)] hover:-translate-y-1 hover:border-[#1db954]/50 transition-all duration-300 flex flex-col sm:flex-row items-stretch justify-between gap-5 group"
              >
                <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider ${ep.categoryStyle}`}
                      >
                        {ep.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-[#54707d] font-medium">
                        <Clock size={12} className="text-[#005a75]" />
                        <span>{ep.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#061a22] group-hover:text-[#005a75] leading-snug transition-colors line-clamp-2 mb-1.5">
                      {ep.title}
                    </h3>

                    <p className="text-xs sm:text-[12.5px] font-semibold text-[#005a75] flex items-center gap-1.5 mb-2 line-clamp-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00a8cc] shrink-0"></span>
                      <span className="truncate">{ep.subname}</span>
                    </p>

                    <p className="text-xs text-[#54707d] leading-relaxed line-clamp-2 mb-4">
                      {ep.summary}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-[#1db954] group-hover:text-[#15803d] transition-colors mt-auto pt-2">
                    <span>Listen on Spotify</span>
                    <span className="w-6 h-6 rounded-full bg-[#1db954] group-hover:bg-[#1ed760] text-white flex items-center justify-center transition-all duration-200 shadow-sm group-hover:scale-110">
                      <SpotifyIcon size={13} className="text-white" />
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="text-[#1db954] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>

                <div className="relative w-full sm:w-32 md:w-36 h-36 sm:h-auto rounded-2xl overflow-hidden bg-[#e5eff3] shrink-0 self-stretch flex items-center justify-center shadow-inner group/thumb">
                  <img
                    src={ep.image}
                    alt={ep.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#1db954] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play size={16} className="ml-0.5 fill-white" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-semibold text-white">
                    {ep.duration}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {PODCAST_EPISODES.length > 6 && (
            <div className="flex justify-center mt-10 sm:mt-12">
              <button
                type="button"
                onClick={() => setShowAllPodcasts((prev) => !prev)}
                className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-[#005a75] hover:bg-[#004358] text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_16px_rgba(0,90,117,0.2)] hover:shadow-[0_6px_22px_rgba(0,90,117,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
              >
                <span>
                  {showAllPodcasts
                    ? "Show Less"
                    : `View More Podcasts (${PODCAST_EPISODES.length - 6} more)`}
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    showAllPodcasts
                      ? "rotate-180"
                      : "group-hover:translate-y-0.5"
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
