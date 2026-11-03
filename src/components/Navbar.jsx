import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/images/ElementSkill-Logo.webp";

const NAV_ITEMS = [
  { id: "Home", label: "Home", path: "/" },
  { id: "Our Team", label: "Our Team", path: "/our-team" },
  {
    id: "Articles & Research Papers",
    label: "Articles & Research Papers",
    path: "/articles-research-papers",
  },
  {
    id: "Talks & Podcast",
    label: "Talks & Podcast",
    path: "/talks-and-podcast",
  },
  { id: "About Us", label: "About Us", path: "/about-us" },
  { id: "Contact Us", label: "Contact Us", path: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,90,117,0.04)]">
      <div className="max-w-[1320px] mx-auto px-6 h-[68px] flex items-center justify-between">
        <div className="flex items-center shrink-0">
          <Link
            to="/"
            className="flex items-center group select-none transition-transform hover:scale-[1.01]"
          >
            <img
              src={logoImg}
              alt="ElementSkill"
              width="168"
              height="42"
              className="h-[38px] md:h-[42px] w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center h-[68px] space-x-1 lg:space-x-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.id}
                to={item.path}
                className={`h-[68px] px-3.5 lg:px-4 text-[15px] flex items-center relative whitespace-nowrap transition-colors duration-150 ${
                  isActive
                    ? "text-[#005a75] font-bold"
                    : "text-[#455c65] font-medium hover:text-[#005a75]"
                }`}
              >
                <span>{item.label}</span>

                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#005a75] rounded-t-full shadow-[0_1px_4px_rgba(0,90,117,0.3)] transition-all" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-[8px] border border-[#d5e2e7] flex items-center justify-center text-[#005a75] hover:bg-[#005a75]/5 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="h-[2px] w-full bg-[#005a75]" />

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#d5e2e7] px-6 py-4 shadow-[0_8px_20px_rgba(0,90,117,0.08)] animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-3 rounded-[8px] text-[15px] font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-[#005a75]/10 text-[#005a75] font-bold"
                      : "text-[#455c65] hover:bg-[#005a75]/5 hover:text-[#005a75]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#005a75]" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
