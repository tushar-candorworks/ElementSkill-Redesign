import {
  Building2,
  Laptop,
  Globe,
  Hourglass,
  Zap,
  Landmark,
} from "lucide-react";
import deliverBg from "../assets/images/Deliver_Bg.webp";
import { AnimatedCounter } from "./AnimatedCounter";

const STATS_DATA = [
  {
    id: "global-clients",
    icon: Building2,
    number: "35",
    suffix: "+",
    label: "Enterprise Clients Globally",
    iconAria: "Building icon",
  },
  {
    id: "tech",
    icon: Laptop,
    number: "20",
    suffix: "",
    label: "Tech",
    iconAria: "Laptop icon",
  },
  {
    id: "gcc",
    icon: Globe,
    number: "8",
    suffix: "",
    label: "GCC",
    iconAria: "Globe icon",
  },
  {
    id: "specialty-chemicals",
    icon: Hourglass,
    number: "5",
    suffix: "",
    label: "Specialty Chemicals",
    iconAria: "Hourglass icon",
  },
  {
    id: "energy",
    icon: Zap,
    number: "2",
    suffix: "",
    label: "Energy",
    iconAria: "Energy icon",
  },
  {
    id: "bfsi",
    icon: Landmark,
    number: "2",
    suffix: "",
    label: "BFSI",
    iconAria: "Banking icon",
  },
];

export function WhatWeDelivered() {
  return (
    <section
      aria-label="What We Delivered"
      className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-28 px-4 sm:px-6 select-none overflow-hidden"
      style={{
        backgroundImage: `url(${deliverBg})`,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-white tracking-tight drop-shadow-md">
            What We Delivered
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6 lg:gap-4 items-start">
          {STATS_DATA.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="mb-3 sm:mb-4 text-white/95 group-hover:text-white transition-colors">
                  <IconComponent
                    size={42}
                    strokeWidth={1.75}
                    className="drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex items-baseline justify-center mb-2 leading-none">
                  <span className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight drop-shadow-md">
                    <AnimatedCounter value={item.number} />
                  </span>
                  {item.suffix && (
                    <span className="text-2xl sm:text-3xl font-semibold text-white ml-0.5 -translate-y-3 sm:-translate-y-4 inline-block drop-shadow-md">
                      {item.suffix}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-[13px] md:text-sm text-white/90 font-medium leading-snug max-w-[130px] drop-shadow-sm">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
