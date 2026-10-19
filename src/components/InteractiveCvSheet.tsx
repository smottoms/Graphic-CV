"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  PenTool,
  PlaySquare,
  Layers,
  Instagram,
  Calendar,
  Lightbulb,
  Type,
  MessageCircle,
  Target,
  Users,
  Settings,
  Handshake,
  Download,
  Printer,
  Eye,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function InteractiveCvSheet() {
  const [viewMode, setViewMode] = useState<"interactive" | "original">("interactive");

  const skillIcons: Record<string, React.ReactNode> = {
    "pen-tool": <PenTool className="w-4 h-4 text-[#1C1917]" />,
    "play-square": <PlaySquare className="w-4 h-4 text-[#1C1917]" />,
    layers: <Layers className="w-4 h-4 text-[#1C1917]" />,
    instagram: <Instagram className="w-4 h-4 text-[#1C1917]" />,
    calendar: <Calendar className="w-4 h-4 text-[#1C1917]" />,
    lightbulb: <Lightbulb className="w-4 h-4 text-[#1C1917]" />,
    type: <Type className="w-4 h-4 text-[#1C1917]" />,
  };

  const strengthIcons: Record<string, React.ReactNode> = {
    lightbulb: <Lightbulb className="w-6 h-6 text-[#1C1917] stroke-[1.6]" />,
    target: <Target className="w-6 h-6 text-[#1C1917] stroke-[1.6]" />,
    users: <Users className="w-6 h-6 text-[#1C1917] stroke-[1.6]" />,
    cog: <Settings className="w-6 h-6 text-[#1C1917] stroke-[1.6]" />,
    handshake: <Handshake className="w-6 h-6 text-[#1C1917] stroke-[1.6]" />,
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full">
      {/* Controls Bar (hidden on print) */}
      <div className="no-print flex flex-wrap items-center justify-between gap-4 mb-8 bg-[#1C1917] text-[#FAF8F5] p-4 sm:px-6 rounded-2xl border border-[#9E7B56]/30 shadow-xl">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#9E7B56]/20 text-[#DDBEA0]">
            <Sparkles className="w-4 h-4" />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">
              Curriculum Vitae — Interactive & Print-Ready
            </p>
            <p className="text-xs text-[#DDBEA0]/80">
              Switch between the live HTML/CSS replica and original CV artwork
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex rounded-xl bg-[#26221F] p-1 border border-white/10">
            <button
              type="button"
              onClick={() => setViewMode("interactive")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === "interactive"
                  ? "bg-[#9E7B56] text-white shadow"
                  : "text-[#DDBEA0] hover:text-white"
              }`}
            >
              Live Web Replica
            </button>
            <button
              type="button"
              onClick={() => setViewMode("original")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                viewMode === "original"
                  ? "bg-[#9E7B56] text-white shadow"
                  : "text-[#DDBEA0] hover:text-white"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              Original CV Scan
            </button>
          </div>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF8F5] text-[#1C1917] hover:bg-[#DDBEA0] text-xs font-semibold transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / PDF
          </button>

          <a
            href="/toms-johnson-cv.png"
            download="Toms-Johnson-Graphic-Designer-CV.png"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#9E7B56] hover:bg-[#7C5E3F] text-white text-xs font-semibold transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download CV
          </a>
        </div>
      </div>

      {viewMode === "original" ? (
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[#9E7B56]/30 bg-[#1C1917] p-3 sm:p-6">
          <img
            src="/toms-johnson-cv.png"
            alt="Toms Johnson Original CV"
            className="w-full h-auto rounded-xl mx-auto shadow-lg"
          />
        </div>
      ) : (
        /* Faithful Two-Column CV Replica */
        <div
          id="printable-cv"
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-[0_25px_70px_-15px_rgba(28,25,23,0.35)] border border-[#9E7B56]/25 grid grid-cols-1 md:grid-cols-12 bg-[#FAF8F5] relative"
        >
          {/* LEFT SIDEBAR COLUMN (Charcoal with warm bronze organic curves) */}
          <aside className="md:col-span-5 lg:col-span-4 bg-[#191716] text-[#FAF8F5] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden">
            {/* Top-left subtle organic curve */}
            <div
              className="pointer-events-none absolute -top-20 -left-20 w-56 h-56 rounded-full bg-[#3A312A]/45"
              aria-hidden="true"
            />
            {/* Mid-right subtle curved wave */}
            <div
              className="pointer-events-none absolute top-44 -right-24 w-52 h-80 rounded-full bg-[#2E2722]/60"
              aria-hidden="true"
            />
            {/* Bottom-right organic bronze curve matching the CV */}
            <div
              className="pointer-events-none absolute -bottom-24 -right-20 w-72 h-96 rounded-full bg-[#43372E]/55"
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Circular Portrait with bronze rim & floating dot */}
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-10">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#DDBEA0] shadow-2xl bg-[#2A2420]">
                  <img
                    src="/toms-portrait.png"
                    alt="Toms Johnson"
                    className="w-full h-full object-cover object-center scale-105"
                  />
                </div>
                {/* Signature overlapping warm sand circle on lower-right edge of portrait */}
                <span
                  className="absolute bottom-8 -right-2.5 w-8 h-8 rounded-full bg-[#DEC09E] shadow-md"
                  aria-hidden="true"
                />
              </div>

              {/* CONTACT SECTION */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-5">
                  <h3 className="text-sm sm:text-base font-bold tracking-[0.22em] text-[#DDBEA0] uppercase">
                    CONTACT
                  </h3>
                  <div className="flex-1 h-[1.5px] bg-[#9E7B56]/60" />
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3.5">
                    <span className="w-9 h-9 rounded-full bg-[#DEC09E] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#1C1917]" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white">Phone</p>
                      <a
                        href={`tel:${portfolioData.contact.phone}`}
                        className="text-xs sm:text-sm text-[#E7E2DC] hover:text-[#DDBEA0] transition-colors"
                      >
                        {portfolioData.contact.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-3.5">
                    <span className="w-9 h-9 rounded-full bg-[#DEC09E] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#1C1917]" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white">Email</p>
                      <a
                        href={`mailto:${portfolioData.contact.email}`}
                        className="text-xs sm:text-sm text-[#E7E2DC] hover:text-[#DDBEA0] transition-colors break-all"
                      >
                        {portfolioData.contact.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-3.5">
                    <span className="w-9 h-9 rounded-full bg-[#DEC09E] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#1C1917]" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white">Location</p>
                      <p className="text-xs sm:text-sm text-[#E7E2DC]">
                        {portfolioData.contact.location}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CORE SKILLS SECTION */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-5">
                  <h3 className="text-sm sm:text-base font-bold tracking-[0.22em] text-[#DDBEA0] uppercase">
                    CORE SKILLS
                  </h3>
                  <div className="flex-1 h-[1.5px] bg-[#9E7B56]/60" />
                </div>

                <ul className="space-y-3.5">
                  {portfolioData.coreSkills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-3.5 group">
                      <span className="w-9 h-9 rounded-full bg-[#DEC09E] group-hover:bg-[#9E7B56] transition-colors flex items-center justify-center shrink-0">
                        {skillIcons[skill.icon]}
                      </span>
                      <span className="text-xs sm:text-sm text-[#F5F2EE] font-medium">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* LANGUAGES SECTION */}
            <div className="relative z-10 pt-4 border-t border-[#9E7B56]/40">
              <h3 className="text-sm sm:text-base font-bold tracking-[0.22em] text-[#DDBEA0] uppercase mb-5">
                LANGUAGES
              </h3>
              <ul className="space-y-3.5">
                {portfolioData.languages.map((lang) => (
                  <li key={lang.name} className="flex items-center gap-3.5">
                    <span className="w-9 h-9 rounded-full bg-[#DEC09E] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-[#1C1917]" />
                    </span>
                    <span className="text-xs sm:text-sm text-[#F5F2EE] font-medium">
                      {lang.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* RIGHT MAIN CONTENT COLUMN (Warm Cream with Bronze & Charcoal Typography) */}
          <div className="md:col-span-7 lg:col-span-8 bg-[#FAF8F5] text-[#1C1917] p-7 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Top-right Pillar Stack (CREATIVE / VISUALS / BRANDS / STORIES) */}
            <div className="flex justify-end mb-4">
              <div className="text-right pr-3 border-r-2 border-[#9E7B56]/60 space-y-0.5">
                {portfolioData.pillars.map((pillar) => (
                  <p
                    key={pillar}
                    className="text-[10px] tracking-[0.25em] text-[#78716C] font-medium uppercase leading-tight"
                  >
                    {pillar}
                  </p>
                ))}
              </div>
            </div>

            {/* NAME & TITLE HEADER */}
            <div className="mb-9">
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none mb-3">
                <span className="text-[#1C1917]">{portfolioData.firstName} </span>
                <span className="text-[#9E7B56]">{portfolioData.lastName}</span>
              </h2>
              <p className="text-xs sm:text-base tracking-[0.26em] text-[#292524] font-medium uppercase">
                {portfolioData.role}
              </p>
            </div>

            {/* ABOUT ME + CALLIGRAPHIC SCRIPT ("Design Motion Create") */}
            <div className="relative mb-9 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-sm sm:text-base font-extrabold tracking-[0.2em] text-[#1C1917] uppercase">
                    ABOUT ME
                  </h3>
                  <div className="w-32 h-[1.5px] bg-[#57534E]/60" />
                </div>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#292524]">
                  {portfolioData.aboutMe}
                </p>
              </div>

              {/* Expressive tilted script callout */}
              <div className="lg:col-span-4 flex justify-end lg:justify-center select-none pointer-events-none">
                <div className="-rotate-12 text-[#C8B29B] font-script text-4xl sm:text-5xl leading-[0.95] tracking-wide text-center">
                  <span className="block">Design</span>
                  <span className="block ml-4">Motion</span>
                  <span className="block -ml-2">Create</span>
                </div>
              </div>
            </div>

            {/* PROFILE */}
            <div className="mb-9">
              <div className="flex items-center gap-4 mb-3">
                <h3 className="text-sm sm:text-base font-extrabold tracking-[0.2em] text-[#1C1917] uppercase">
                  PROFILE
                </h3>
                <div className="w-44 h-[1.5px] bg-[#57534E]/60" />
              </div>
              <p className="text-sm sm:text-[15px] leading-relaxed text-[#292524]">
                {portfolioData.profile}
              </p>
            </div>

            {/* WORK EXPERIENCE TIMELINE */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm sm:text-base font-extrabold tracking-[0.2em] text-[#1C1917] uppercase">
                  WORK EXPERIENCE
                </h3>
                <div className="w-28 h-[1.5px] bg-[#57534E]/60" />
              </div>

              <div className="relative pl-7 border-l-[1.5px] border-[#57534E]/70 ml-2 space-y-8">
                {portfolioData.experiences.map((exp) => (
                  <div key={exp.period} className="relative">
                    {/* Bronze Timeline Node */}
                    <span
                      className="absolute -left-[35px] top-1 w-3.5 h-3.5 rounded-full bg-[#9E7B56] ring-4 ring-[#FAF8F5]"
                      aria-hidden="true"
                    />
                    <p className="text-sm sm:text-base font-extrabold text-[#1C1917] mb-0.5">
                      {exp.period}
                    </p>
                    <h4 className="text-xs sm:text-sm font-bold tracking-wider text-[#1C1917] uppercase mb-0.5">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-[#9E7B56] mb-2.5">
                      {exp.company}
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#292524] leading-relaxed">
                      {exp.highlights.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ADDITIONAL STRENGTHS */}
            <div className="relative z-10 pt-2">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm sm:text-base font-extrabold tracking-[0.2em] text-[#1C1917] uppercase">
                  ADDITIONAL STRENGTHS
                </h3>
                <div className="w-24 h-[1.5px] bg-[#57534E]/60" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
                {portfolioData.additionalStrengths.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center p-2.5 rounded-xl hover:bg-[#F3E7D8]/50 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#F4EFE8] border border-[#9E7B56]/25 flex items-center justify-center mb-2">
                      {strengthIcons[item.icon]}
                    </div>
                    <p className="text-xs font-medium text-[#292524] leading-snug">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom-right subtle "design" watermark */}
            <div
              className="pointer-events-none select-none absolute -bottom-5 right-3 text-7xl sm:text-8xl font-extrabold text-[#1C1917]/[0.04] tracking-tight"
              aria-hidden="true"
            >
              design
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

