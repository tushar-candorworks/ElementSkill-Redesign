import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import {
  MapPin,
  Send,
  ArrowRight,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import contactBg from "../assets/images/contact-bg.webp";
import inFlag from "../assets/images/in-flag.webp";
import usFlag from "../assets/images/us-flag.webp";

export function ContactPage() {
  const [searchParams] = useSearchParams();

  const initialInterest = (() => {
    const param = searchParams.get("interest");
    if (!param) return "Hiring";
    const valid = ["Hiring", "Skilling", "Assessment", "Speaking"];
    const found = valid.find((v) => v.toLowerCase() === param.toLowerCase());
    return found || "Hiring";
  })();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      interest: initialInterest,
      message: "",
      honeypot: "",
    },
    mode: "onTouched",
  });

  const selectedInterest = useWatch({ control, name: "interest" });

  useEffect(() => {
    setValue("interest", initialInterest);
  }, [initialInterest, setValue]);

  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    firstName: "",
    email: "",
    interest: "Hiring",
  });

  const handleClosePopup = useCallback(() => {
    setShowThankYouPopup(false);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      interest: initialInterest,
      message: "",
      honeypot: "",
    });
  }, [initialInterest, reset]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showThankYouPopup) {
        handleClosePopup();
      }
    };

    if (showThankYouPopup) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showThankYouPopup, handleClosePopup]);

  const onSubmit = async (data) => {
    if (data.honeypot) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 600));

    setSubmittedData({
      firstName: data.firstName,
      email: data.email,
      interest: data.interest,
    });
    setShowThankYouPopup(true);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      interest: initialInterest,
      message: "",
      honeypot: "",
    });
  };

  const offices = [
    {
      id: "pune",
      city: "Pune Office",
      region: "India Headquarters",
      flag: inFlag,
      addressLines: [
        "4th Floor, Westend Center 3, Aundh,",
        "Pune - 411007, Maharashtra, India",
      ],
      mapUrl:
        "https://maps.google.com/?q=Westend+Center+3,+Aundh,+Pune,+Maharashtra+411007",
      topStripeBg: "bg-[#ff8a00]",
      pinBoxBg: "bg-[#fff7ed]",
      pinColor: "text-[#ff8a00]",
      btnColor: "text-[#ff8a00] hover:text-[#d97706]",
    },
    {
      id: "gurugram",
      city: "Gurugram Office",
      region: "North India Office",
      flag: inFlag,
      addressLines: [
        "ElementSkill M3M Tee Point, Sector 65,",
        "Gurugram, Haryana 122101, India",
      ],
      mapUrl:
        "https://maps.google.com/?q=M3M+Tee+Point,+Sector+65,+Gurugram,+Haryana+122101",
      topStripeBg: "bg-[#ff8a00]",
      pinBoxBg: "bg-[#fff7ed]",
      pinColor: "text-[#ff8a00]",
      btnColor: "text-[#ff8a00] hover:text-[#d97706]",
    },
    {
      id: "usa",
      city: "USA Office",
      region: "North America",
      flag: usFlag,
      addressLines: [
        "8200 Wisconsin Ave, Bethesda,",
        "Maryland 20814, United States",
      ],
      mapUrl:
        "https://maps.google.com/?q=8200+Wisconsin+Ave,+Bethesda,+MD+20814",
      topStripeBg: "bg-[#2563eb]",
      pinBoxBg: "bg-[#eff6ff]",
      pinColor: "text-[#2563eb]",
      btnColor: "text-[#2563eb] hover:text-[#1d4ed8]",
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-[#061a22]">
      <section className="relative overflow-hidden pt-20 sm:pt-28 pb-16 sm:pb-24 px-6 sm:px-8 bg-[#030d14] text-white border-b border-white/10 select-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(${contactBg})`,
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/50 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#030d14]/60 via-transparent to-[#030d14]/80 pointer-events-none"
        />

        <div className="max-w-[1360px] mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            For Any Inquiries, Or To Say Hello,
            <span className="block mt-2 sm:mt-3">Get In Touch</span>
          </h1>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-gradient-to-b from-[#f0f6f8]/60 via-[#f8fafc] to-[#f8fafc] border-b border-[#e5eff3]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
              <svg
                className="w-6 h-6 text-[#005a75] shrink-0"
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
                  We're With You, Wherever You Are
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
                className="w-6 h-6 text-[#005a75] shrink-0"
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

            <p className="text-[15px] sm:text-base text-[#455c65] font-normal leading-relaxed pt-1 md:whitespace-nowrap">
              Visit one of our offices around the globe or connect directly with
              our leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between gap-5 h-full">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-white rounded-[28px] sm:rounded-[32px] border border-[#e5eff3] shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden px-6 py-5 sm:px-7 sm:py-5.5 lg:px-7 lg:py-5.5 flex-1 flex flex-col justify-between"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 ${office.topStripeBg}`}
                  />

                  <div className="flex items-center gap-3.5 sm:gap-4 relative z-10">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-xs border-2 border-white ring-1 ring-slate-100 shrink-0 bg-slate-50 flex items-center justify-center">
                      <img
                        src={office.flag}
                        alt={`${office.city} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-[22px] font-extrabold text-[#0f172a] tracking-tight leading-snug">
                        {office.city}
                      </h3>
                      <p className="text-xs sm:text-[13px] font-medium text-[#64748b] mt-0.5">
                        {office.region}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 relative z-10 my-auto py-2.5">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${office.pinBoxBg} flex items-center justify-center shrink-0 shadow-xs mt-0.5`}
                    >
                      <MapPin size={18} className={office.pinColor} />
                    </div>

                    <div className="text-xs sm:text-[13.5px] text-[#475569] leading-relaxed font-normal">
                      {office.addressLines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="border-t border-[#f1f5f9] mb-3 sm:mb-3.5" />
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold ${office.btnColor} hover:gap-3 transition-all`}
                    >
                      <span>Visit Office</span>
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-6 flex flex-col h-full">
              <div className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-9 border border-[#e5eff3] shadow-[0_12px_45px_rgba(0,90,117,0.08)] relative overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#005a75] via-[#00a8cc] to-[#38bdf8]" />

                <div className="mb-5 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#061a22] tracking-tight">
                    Send Us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-[#455c65] mt-1.5 leading-relaxed">
                    Tell us about your organization and requirements. We
                    typically respond within one business day.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-4 sm:space-y-4.5 flex-1 flex flex-col justify-between"
                >
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register("honeypot")}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-xs uppercase tracking-wider text-[#061a22] font-bold mb-1.5"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="e.g. Sarah"
                        {...register("firstName", {
                          required: "First name is required",
                          minLength: {
                            value: 2,
                            message: "First name must be at least 2 characters",
                          },
                        })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                        className={`w-full px-4 py-3 rounded-xl bg-[#f8fafc] border text-sm text-[#061a22] placeholder-[#94a3b8] focus:bg-white focus:outline-none transition-all ${
                          errors.firstName
                            ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15"
                            : "border-[#d5e2e7] focus:border-[#005a75] focus:ring-2 focus:ring-[#005a75]/15"
                        }`}
                      />
                      {errors.firstName && (
                        <p
                          className="text-xs text-rose-600 font-medium flex items-center gap-1 mt-1.5"
                          role="alert"
                        >
                          <AlertCircle size={13} className="shrink-0" />
                          <span>{errors.firstName.message}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-xs uppercase tracking-wider text-[#061a22] font-bold mb-1.5"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="e.g. Jenkins"
                        {...register("lastName", {
                          required: "Last name is required",
                          minLength: {
                            value: 2,
                            message: "Last name must be at least 2 characters",
                          },
                        })}
                        aria-invalid={errors.lastName ? "true" : "false"}
                        className={`w-full px-4 py-3 rounded-xl bg-[#f8fafc] border text-sm text-[#061a22] placeholder-[#94a3b8] focus:bg-white focus:outline-none transition-all ${
                          errors.lastName
                            ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15"
                            : "border-[#d5e2e7] focus:border-[#005a75] focus:ring-2 focus:ring-[#005a75]/15"
                        }`}
                      />
                      {errors.lastName && (
                        <p
                          className="text-xs text-rose-600 font-medium flex items-center gap-1 mt-1.5"
                          role="alert"
                        >
                          <AlertCircle size={13} className="shrink-0" />
                          <span>{errors.lastName.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-wider text-[#061a22] font-bold mb-1.5"
                      >
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="s.jenkins@company.com"
                        {...register("email", {
                          required: "Work email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email address",
                          },
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                        className={`w-full px-4 py-3 rounded-xl bg-[#f8fafc] border text-sm text-[#061a22] placeholder-[#94a3b8] focus:bg-white focus:outline-none transition-all ${
                          errors.email
                            ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15"
                            : "border-[#d5e2e7] focus:border-[#005a75] focus:ring-2 focus:ring-[#005a75]/15"
                        }`}
                      />
                      {errors.email && (
                        <p
                          className="text-xs text-rose-600 font-medium flex items-center gap-1 mt-1.5"
                          role="alert"
                        >
                          <AlertCircle size={13} className="shrink-0" />
                          <span>{errors.email.message}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs uppercase tracking-wider text-[#061a22] font-bold mb-1.5"
                      >
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        placeholder="e.g. Sapiens / GCC Center"
                        {...register("company")}
                        className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-[#d5e2e7] text-sm text-[#061a22] placeholder-[#94a3b8] focus:bg-white focus:outline-none focus:border-[#005a75] focus:ring-2 focus:ring-[#005a75]/15 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#061a22] font-bold mb-2">
                      Primary Service of Interest:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Hiring", "Skilling", "Assessment", "Speaking"].map(
                        (cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() =>
                              setValue("interest", cat, { shouldDirty: true })
                            }
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                              selectedInterest === cat
                                ? "bg-[#005a75] text-white shadow-sm font-bold"
                                : "bg-[#f1f5f9] text-[#455c65] hover:bg-[#e2e8f0] border border-[#e2e8f0]"
                            }`}
                          >
                            {cat}
                          </button>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-wider text-[#061a22] font-bold mb-1.5"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Outline role requirements, workshop expectations, or target timelines..."
                      {...register("message", {
                        required: "Your message is required",
                        minLength: {
                          value: 10,
                          message:
                            "Please provide at least 10 characters describing your request",
                        },
                      })}
                      aria-invalid={errors.message ? "true" : "false"}
                      className={`w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#f8fafc] border text-sm text-[#061a22] placeholder-[#94a3b8] focus:bg-white focus:outline-none transition-all resize-none ${
                        errors.message
                          ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15"
                          : "border-[#d5e2e7] focus:border-[#005a75] focus:ring-2 focus:ring-[#005a75]/15"
                      }`}
                    />
                    {errors.message && (
                      <p
                        className="text-xs text-rose-600 font-medium flex items-center gap-1 mt-1.5"
                        role="alert"
                      >
                        <AlertCircle size={13} className="shrink-0" />
                        <span>{errors.message.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#005a75] hover:bg-[#004358] text-white font-semibold text-sm tracking-wide shadow-sm hover:shadow active:translate-y-0 disabled:opacity-60 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showThankYouPopup && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#030d14]/70 backdrop-blur-md animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClosePopup();
          }}
        >
          <div
            className="relative bg-white border border-[#e5eff3] rounded-[28px] sm:rounded-[32px] max-w-xl w-full p-7 sm:p-10 shadow-[0_24px_60px_rgba(0,90,117,0.18)] overflow-hidden text-left transform animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#005a75] via-[#00a8cc] to-[#38bdf8]" />

            <button
              type="button"
              onClick={handleClosePopup}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full border border-[#d5e2e7] bg-white flex items-center justify-center text-[#455c65] hover:bg-[#eaf3f6] hover:text-[#005a75] transition-colors cursor-pointer shadow-xs"
              aria-label="Close thank you popup"
            >
              <X size={18} />
            </button>

            <div className="flex items-center justify-between gap-4 mb-4 pr-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wide uppercase bg-[#daf1f6] text-[#005a75] border border-[#b2e2ec]">
                {submittedData.interest} &middot; INQUIRY RECEIVED
              </span>
              <CheckCircle2 size={32} className="text-[#00a8cc] shrink-0" />
            </div>

            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#061a22] tracking-tight mb-2.5">
              Thank You, {submittedData.firstName || "there"}!
            </h3>

            <div className="mb-7">
              <p className="font-sans text-sm sm:text-base text-[#455c65] leading-relaxed">
                Your inquiry regarding{" "}
                <strong className="text-[#061a22] font-semibold">
                  {submittedData.interest}
                </strong>{" "}
                has been received successfully. Our team will review your
                organization&apos;s requirements and connect with you at{" "}
                <strong className="text-[#005a75] font-semibold">
                  {submittedData.email}
                </strong>{" "}
                within one business day.
              </p>
            </div>

            <div className="pt-6 border-t border-[#e5eff3] flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-11 h-11 rounded-full bg-[#daf1f6] border border-[#b2e2ec] flex items-center justify-center font-bold text-xs text-[#005a75] shadow-xs shrink-0">
                  ES
                </div>
                <div className="min-w-0">
                  <h4 className="font-sans text-sm font-bold text-[#061a22] truncate">
                    ElementSkill Advisory
                  </h4>
                  <p className="text-xs text-[#708894] font-mono truncate">
                    sales@elementskill.com
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleClosePopup}
                className="px-7 py-2.5 rounded-full bg-[#005a75] hover:bg-[#004358] text-white font-semibold text-xs tracking-wide shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
