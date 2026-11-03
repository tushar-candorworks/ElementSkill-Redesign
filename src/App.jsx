import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { VisionCTA } from "./components/VisionCTA";
import { Footer } from "./components/Footer";
import { ErrorBoundary } from "./components/ErrorBoundary";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((m) => ({ default: m.HomePage })),
);
const OurTeamPage = lazy(() =>
  import("./pages/OurTeamPage").then((m) => ({ default: m.OurTeamPage })),
);
const HiringPage = lazy(() =>
  import("./pages/HiringPage").then((m) => ({ default: m.HiringPage })),
);
const SkillingPage = lazy(() =>
  import("./pages/SkillingPage").then((m) => ({ default: m.SkillingPage })),
);
const AssessmentPage = lazy(() =>
  import("./pages/AssessmentPage").then((m) => ({ default: m.AssessmentPage })),
);
const TalksPage = lazy(() =>
  import("./pages/TalksPage").then((m) => ({ default: m.TalksPage })),
);
const ArticlesPage = lazy(() =>
  import("./pages/ArticlesPage").then((m) => ({ default: m.ArticlesPage })),
);
const AboutUsPage = lazy(() =>
  import("./pages/AboutUsPage").then((m) => ({ default: m.AboutUsPage })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);

function RouteFallback() {
  return (
    <div
      className="min-h-[50vh] flex items-center justify-center"
      aria-label="Loading page"
    >
      <div className="w-8 h-8 rounded-full border-2 border-[#005a75]/20 border-t-[#005a75] animate-spin" />
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const isContactPage = location.pathname.replace(/\/$/, "") === "/contact";

  return (
    <div className="min-h-screen bg-[#f6f9fa] text-[#061a22] flex flex-col justify-between">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <ErrorBoundary>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/our-team" element={<OurTeamPage />} />
              <Route path="/our-team-2" element={<OurTeamPage />} />
              <Route path="/hiring" element={<HiringPage />} />
              <Route path="/skilling" element={<SkillingPage />} />
              <Route path="/skilling-2" element={<SkillingPage />} />
              <Route path="/assessment" element={<AssessmentPage />} />
              <Route path="/talks-and-podcast" element={<TalksPage />} />
              <Route
                path="/articles-research-papers"
                element={<ArticlesPage />}
              />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      {!isContactPage && <VisionCTA />}
      <Footer />
    </div>
  );
}
