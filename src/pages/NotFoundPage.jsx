import { Link } from "react-router-dom";
import { Home, Compass } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-6 sm:px-8 bg-[#f8fafc] text-[#061a22]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-block p-4 rounded-full bg-[#eaf3f6] border border-[#d5e2e7] text-[#005a75]">
          <Compass size={40} />
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#005a75] font-bold block mb-1">
            404 · PAGE NOT LOCATED
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#061a22]">
            Page Not Found
          </h1>
        </div>

        <p className="text-sm text-[#455c65] leading-relaxed">
          The requested page or link could not be located on the ElementSkill
          portal.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#005a75] text-white text-sm font-medium hover:bg-[#004358] transition-colors"
          >
            <Home size={15} />
            <span>Return Home</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#005a75] text-[#005a75] text-sm font-medium hover:bg-[#005a75]/10 transition-colors"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
