import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import footerLogo from "../assets/images/ElementSkill-footer.webp";
import {
  LinkedInIcon,
  TwitterXIcon,
  FacebookIcon,
  InstagramIcon,
} from "./SocialIcons";

const SOCIAL_LINKS = [
  {
    name: "X (Twitter)",
    url: "https://twitter.com/element_skill",
    icon: <TwitterXIcon size={23} />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/elementskill.social/",
    icon: <FacebookIcon size={25} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/element-skill-llp/",
    icon: <LinkedInIcon size={25} />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/elementskill/",
    icon: <InstagramIcon size={25} />,
  },
  {
    name: "Email",
    url: "mailto:sales@elementskill.com",
    icon: <Mail size={25} />,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-black text-white pt-14 sm:pt-16 pb-10 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/15 items-start">
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="inline-block group">
              <img
                src={footerLogo}
                alt="ElementSkill"
                width="180"
                height="48"
                loading="lazy"
                decoding="async"
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-[15px] sm:text-base text-white/90 leading-relaxed max-w-sm">
              One stop shop for all your talent needs. High-impact strategic
              hiring, executive capability skilling, and leadership
              self-discovery.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <MapPin size={22} className="text-white shrink-0" />
              <h4 className="text-lg sm:text-[20px] font-semibold text-white tracking-tight">
                Office Address
              </h4>
            </div>

            <div className="text-[15px] sm:text-base text-white leading-relaxed space-y-1">
              <p>4th Floor, Westend Center 3, Aundh,</p>
              <p>Pune – 411007, Maharashtra, India.</p>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <Mail size={22} className="text-white shrink-0" />
              <h4 className="text-lg sm:text-[20px] font-semibold text-white tracking-tight">
                Contact Us
              </h4>
            </div>

            <div className="text-[15px] sm:text-base text-white leading-relaxed space-y-2">
              <p className="text-white">
                For speaking opportunities please reach out :
              </p>

              <div>
                <a
                  href="mailto:sales@elementskill.com"
                  className="inline-block text-[16px] sm:text-[18px] font-medium text-white hover:text-[#00c9ff] underline underline-offset-4 decoration-white/50 hover:decoration-[#00c9ff] transition-colors"
                >
                  sales@elementskill.com
                </a>
              </div>

              <div className="flex items-center gap-4.5 sm:gap-5 text-white pt-3">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="text-white hover:text-[#00c9ff] hover:scale-110 active:scale-95 transition-all duration-200"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-[14px] sm:text-[15px] text-white">
          <p>© {currentYear} Copyright Elementskill | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
