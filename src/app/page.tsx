"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Download,
  ArrowUpRight,
  Sparkles,
  PenTool,
  PlaySquare,
  Layers,
  Instagram,
  Calendar,
  Lightbulb,
  Type,
  Target,
  Users,
  Settings,
  Handshake,
  MessageCircle,
  Check,
  Copy,
  Send,
  FileText,
  Briefcase,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import ProjectShowcase from "@/components/ProjectShowcase";
import MotionReelPreview from "@/components/MotionReelPreview";
import InteractiveCvSheet from "@/components/InteractiveCvSheet";

export default function HomePage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryProjectType, setInquiryProjectType] = useState("Motion Graphics & Video");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [inquirySent, setInquirySent] = useState(false);

  const copyToClipboard = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Inquiry: ${inquiryProjectType} — from ${inquiryName || "Client"}`
    );
    const body = encodeURIComponent(
      `Hi Toms,\n\nName: ${inquiryName}\nEmail: ${inquiryEmail}\nProject Scope: ${inquiryProjectType}\n\nDetails:\n${inquiryMessage}`
    );
    window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;
    setInquirySent(true);
  };

  const skillIcons: Record<string, React.ReactNode> = {
    "pen-tool": <PenTool className="w-5 h-5" />,
    "play-square": <PlaySquare className="w-5 h-5" />,
    layers: <Layers className="w-5 h-5" />,
    instagram: <Instagram className="w-5 h-5" />,
    calendar: <Calendar className="w-5 h-5" />,
    lightbulb: <Lightbulb className="w-5 h-5" />,
    type: <Type className="w-5 h-5" />,
  };

  const strengthIcons: Record<string, React.ReactNode> = {
    lightbulb: <Lightbulb className="w-6 h-6 text-[#9E7B56]" />,
    target: <Target className="w-6 h-6 text-[#9E7B56]" />,
    users: <Users className="w-6 h-6 text-[#9E7B56]" />,
    cog: <Settings className="w-6 h-6 text-[#9E7B56]" />,
    handshake: <Handshake className="w-6 h-6 text-[#9E7B56]" />,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917]">
      {/* STICKY HEADER (Hidden when printing CV) */}
      <header className="no-print sticky top-0 z-40 backdrop-blur-md bg-[#FAF8F5]/90 border-b border-[#9E7B56]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo matching CV Typography */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#9E7B56] bg-[#1C1917] shrink-0">
              <img
                src="/toms-portrait.png"
                alt="Toms Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight block leading-none">
                <span className="text-[#1C1917]">Toms </span>
                <span className="text-[#9E7B56]">Johnson</span>
              </span>
              <span className="text-[10px] tracking-[0.22em] text-[#57534E] uppercase font-semibold block mt-1">
                Graphic &amp; Motion Designer
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#292524]">
            <a href="#about" className="hover:text-[#9E7B56] transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-[#9E7B56] transition-colors">
              Selected Work
            </a>
            <a href="#skills" className="hover:text-[#9E7B56] transition-colors">
              Core Skills
            </a>
            <a href="#experience" className="hover:text-[#9E7B56] transition-colors">
              Experience
            </a>
            <a href="#cv-sheet" className="hover:text-[#9E7B56] transition-colors">
              Interactive CV
            </a>
            <a href="#contact" className="hover:text-[#9E7B56] transition-colors">
              Contact
            </a>
          </nav>

          {/* Header CTA Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href="#cv-sheet"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#F4EFE8] hover:bg-[#E6D9C8] text-[#1C1917] text-xs font-bold tracking-wide transition-colors border border-[#9E7B56]/25"
            >
              <FileText className="w-3.5 h-3.5 text-[#9E7B56]" />
              View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#1C1917] hover:bg-[#9E7B56] text-[#FAF8F5] text-xs font-bold tracking-wider uppercase transition-colors shadow-sm"
            >
              Hire Toms
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION (Hidden on print) */}
      <section
        id="top"
        className="no-print relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-24 border-b border-[#9E7B56]/20"
      >
        {/* Subtle Warm Background Accents */}
        <div
          className="pointer-events-none absolute top-12 right-0 w-96 h-96 rounded-full bg-[#DDBEA0]/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-[#9E7B56]/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Portrait + Intro + Calligraphic Motif */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1C1917] text-[#DDBEA0] text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {portfolioData.contact.availability}
                </div>

                {/* Top-right style pillar stack from CV */}
                <div className="flex items-center gap-3 pr-3 border-r-2 border-[#9E7B56]">
                  {portfolioData.pillars.map((pillar, i) => (
                    <span
                      key={pillar}
                      className="text-[11px] font-bold tracking-[0.22em] text-[#78716C]"
                    >
                      {pillar}
                      {i < portfolioData.pillars.length - 1 ? " •" : ""}
                    </span>
                  ))}
                </div>
              </div>

              {/* Portrait + Main Name Lockup */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-7">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-[#9E7B56] shadow-2xl bg-[#1C1917]">
                    <img
                      src="/toms-portrait.png"
                      alt="Toms Johnson — Graphic & Motion Graphic Designer"
                      className="w-full h-full object-cover object-center scale-105"
                    />
                  </div>
                  {/* Signature warm bronze dot from CV */}
                  <span
                    className="absolute bottom-5 -right-2 w-7 h-7 rounded-full bg-[#DEC09E] border-2 border-[#FAF8F5] shadow"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[0.95] mb-3">
                    <span className="text-[#1C1917]">{portfolioData.firstName} </span>
                    <span className="text-[#9E7B56]">{portfolioData.lastName}</span>
                  </h1>
                  <p className="text-sm sm:text-lg tracking-[0.25em] text-[#292524] font-semibold uppercase">
                    {portfolioData.role}
                  </p>
                </div>
              </div>

              {/* About + Profile with Script Watermark */}
              <div id="about" className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#9E7B56]/25 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-extrabold tracking-[0.22em] uppercase text-[#9E7B56]">
                        ABOUT ME &amp; PROFILE
                      </span>
                      <span className="w-16 h-[1.5px] bg-[#9E7B56]/50" />
                    </div>
                    <p className="text-base sm:text-lg text-[#1C1917] font-medium leading-relaxed">
                      {portfolioData.aboutMe}
                    </p>
                    <p className="text-sm text-[#57534E] leading-relaxed">
                      {portfolioData.profile}
                    </p>
                  </div>

                  {/* Calligraphic Script from CV */}
                  <div className="sm:col-span-4 flex justify-center">
                    <div className="-rotate-12 text-[#9E7B56] font-script text-5xl leading-[0.9] select-none text-center">
                      <span className="block">Design</span>
                      <span className="block ml-4">Motion</span>
                      <span className="block -ml-2">Create</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact & CTA Row */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#1C1917] hover:bg-[#9E7B56] text-white text-sm font-bold transition-colors shadow-lg"
                >
                  Explore Selected Works
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="/toms-johnson-cv.png"
                  download="Toms-Johnson-Graphic-Designer-CV.png"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#9E7B56] hover:bg-[#7C5E3F] text-white text-sm font-bold transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Download Original CV
                </a>

                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#F4EFE8] border border-[#9E7B56]/25 text-xs font-semibold text-[#292524]">
                  <MapPin className="w-4 h-4 text-[#9E7B56]" />
                  {portfolioData.contact.location}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Motion Reel Preview */}
            <div className="lg:col-span-5">
              <MotionReelPreview />
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK / PORTFOLIO SHOWCASE (Hidden on print) */}
      <div className="no-print">
        <ProjectShowcase />
      </div>

      {/* CORE SKILLS & ADDITIONAL STRENGTHS SECTION (Hidden on print) */}
      <section
        id="skills"
        className="no-print py-24 bg-[#191716] text-[#FAF8F5] relative overflow-hidden"
      >
        {/* Warm organic background curves matching left sidebar of CV */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#3A312A]/40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -right-20 w-[28rem] h-[28rem] rounded-full bg-[#43372E]/45"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#DDBEA0]">
                  CORE SKILLS &amp; STRENGTHS
                </span>
                <span className="w-20 h-[1.5px] bg-[#9E7B56]" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Crafted for <span className="text-[#DDBEA0]">Brands, Events &amp; Motion</span>
              </h2>
            </div>
            <p className="text-sm text-[#DDBEA0]/85 max-w-md">
              Combining structured typographic layouts with expressive motion graphics to deliver cohesive visual identities across print and digital platforms.
            </p>
          </div>

          {/* 7 Core Skills Grid from CV */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {portfolioData.coreSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-6 rounded-3xl bg-[#24201D]/90 border border-[#9E7B56]/25 hover:border-[#DDBEA0]/60 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-full bg-[#DEC09E] text-[#1C1917] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      {skillIcons[skill.icon]}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#DDBEA0]">
                      {skill.level}%
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-[#E7E2DC]/75 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#9E7B56] to-[#DEC09E]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}

            {/* Languages & Software Card in the 8th slot */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#9E7B56] to-[#7C5E3F] text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#FAF8F5]/80 block mb-3">
                  LANGUAGES &amp; FLUENCY
                </span>
                <div className="space-y-3 mb-6">
                  {portfolioData.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center gap-3 bg-black/20 px-3.5 py-2.5 rounded-2xl"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#DEC09E] text-[#1C1917] flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white leading-none">
                          {lang.name}
                        </p>
                        <p className="text-[11px] text-[#FAF8F5]/80 mt-0.5">
                          {lang.proficiency}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#FAF8F5]/90 mb-2">
                  Creative Suite
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["After Effects", "Illustrator", "Photoshop", "Premiere", "InDesign"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-lg bg-black/25 text-[11px] font-semibold text-white"
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 5 Additional Strengths Bar (from bottom of CV) */}
          <div className="rounded-3xl bg-[#FAF8F5] text-[#1C1917] p-7 sm:p-10 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-sm sm:text-base font-extrabold tracking-[0.22em] uppercase text-[#1C1917]">
                ADDITIONAL STRENGTHS
              </h3>
              <div className="w-28 h-[1.5px] bg-[#9E7B56]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {portfolioData.additionalStrengths.map((strength) => (
                <div
                  key={strength.title}
                  className="p-5 rounded-2xl bg-[#F4EFE8] border border-[#9E7B56]/20 flex flex-col items-start hover:border-[#9E7B56] transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#9E7B56]/25 flex items-center justify-center mb-4 shadow-sm">
                    {strengthIcons[strength.icon]}
                  </div>
                  <h4 className="text-base font-extrabold text-[#1C1917] mb-1.5">
                    {strength.title}
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {strength.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE TIMELINE SECTION (Hidden on print) */}
      <section
        id="experience"
        className="no-print py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9E7B56]/15 text-[#7C5E3F] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              Career Journey
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1C1917] mb-4">
              Work <span className="text-[#9E7B56]">Experience</span>
            </h2>
            <p className="text-base text-[#57534E] leading-relaxed mb-6">
              Proven track record across full-time corporate graphic &amp; motion design and bespoke event branding projects in Mumbai.
            </p>

            {/* Quick Summary Metric Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#F4EFE8] border border-[#9E7B56]/25">
                <p className="text-3xl font-extrabold text-[#1C1917]">2021–26</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9E7B56] mt-1">
                  Active Industry Experience
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#F4EFE8] border border-[#9E7B56]/25">
                <p className="text-3xl font-extrabold text-[#1C1917]">2 Pillars</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9E7B56] mt-1">
                  Graphic + Motion Design
                </p>
              </div>
            </div>
          </div>

          {/* Right Timeline Column matching the CV structure */}
          <div className="lg:col-span-7">
            <div className="relative pl-8 sm:pl-10 border-l-2 border-[#9E7B56]/60 space-y-10 ml-3">
              {portfolioData.experiences.map((exp) => (
                <div
                  key={exp.period}
                  className="relative bg-white p-7 sm:p-8 rounded-3xl border border-[#9E7B56]/25 shadow-sm hover:shadow-xl transition-shadow"
                >
                  {/* Bronze Timeline Dot */}
                  <span
                    className="absolute -left-[41px] sm:-left-[49px] top-8 w-5 h-5 rounded-full bg-[#9E7B56] ring-8 ring-[#FAF8F5]"
                    aria-hidden="true"
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-lg sm:text-xl font-extrabold text-[#1C1917]">
                      {exp.period}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F4EFE8] text-[#7C5E3F]">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold tracking-wider text-[#1C1917] uppercase mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-base font-bold text-[#9E7B56] mb-4">
                    {exp.company}
                  </p>

                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm sm:text-base text-[#292524] leading-relaxed"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#9E7B56] mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-[#F4EFE8]">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#9E7B56]/20 text-xs font-semibold text-[#57534E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED INTERACTIVE TWO-COLUMN CV REPLICA SECTION */}
      <section
        id="cv-sheet"
        className="py-20 bg-[#F4EFE8] border-y border-[#9E7B56]/25 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="no-print text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-[#9E7B56] block mb-2">
              OFFICIAL CURRICULUM VITAE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] mb-3">
              Two-Column Resume Layout
            </h2>
            <p className="text-sm text-[#57534E]">
              Faithfully recreated from Toms Johnson&apos;s graphic designer CV. Inspect interactively, view the original scan, or print directly to PDF.
            </p>
          </div>

          <InteractiveCvSheet />
        </div>
      </section>

      {/* CONTACT & COLLABORATION SECTION (Hidden on print) */}
      <section
        id="contact"
        className="no-print py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-[2.5rem] bg-[#191716] text-[#FAF8F5] p-8 sm:p-14 relative overflow-hidden border border-[#9E7B56]/35 shadow-2xl">
          <div
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#9E7B56]/20 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Contact Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9E7B56]/20 text-[#DDBEA0] text-xs font-bold tracking-[0.2em] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Let&apos;s Create Together
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready to elevate your{" "}
                <span className="text-[#DDBEA0]">brand visuals &amp; motion stories?</span>
              </h2>

              <p className="text-sm sm:text-base text-[#E7E2DC]/80 leading-relaxed">
                Available for Graphic Design &amp; Motion Graphic Design roles, brand identity systems, social media creative suites, and event visual direction in Mumbai or remote.
              </p>

              {/* Direct Contact Cards matching CV details */}
              <div className="space-y-3.5 pt-2">
                {/* Phone */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#24201D] border border-white/10">
                  <div className="flex items-center gap-3.5">
                    <span className="w-11 h-11 rounded-full bg-[#DEC09E] text-[#1C1917] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-xs text-[#DDBEA0] font-semibold uppercase tracking-wider">
                        Phone
                      </p>
                      <a
                        href={`tel:${portfolioData.contact.phone}`}
                        className="text-base font-bold text-white hover:text-[#DDBEA0] transition-colors"
                      >
                        {portfolioData.contact.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(portfolioData.contact.phone, "phone")
                    }
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#9E7B56] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
                  >
                    {copiedField === "phone" ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy
                      </>
                    )}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#24201D] border border-white/10">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="w-11 h-11 rounded-full bg-[#DEC09E] text-[#1C1917] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-[#DDBEA0] font-semibold uppercase tracking-wider">
                        Email
                      </p>
                      <a
                        href={`mailto:${portfolioData.contact.email}`}
                        className="text-sm sm:text-base font-bold text-white hover:text-[#DDBEA0] transition-colors truncate block"
                      >
                        {portfolioData.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(portfolioData.contact.email, "email")
                    }
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#9E7B56] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors shrink-0 ml-2"
                  >
                    {copiedField === "email" ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy
                      </>
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#24201D] border border-white/10">
                  <span className="w-11 h-11 rounded-full bg-[#DEC09E] text-[#1C1917] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs text-[#DDBEA0] font-semibold uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-base font-bold text-white">
                      {portfolioData.contact.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Project Brief / Message Form */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handleInquirySubmit}
                className="bg-[#FAF8F5] text-[#1C1917] p-7 sm:p-9 rounded-3xl shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-extrabold text-[#1C1917]">
                    Send a Quick Brief
                  </h3>
                  <span className="font-script text-2xl text-[#9E7B56]">
                    Design • Motion • Create
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#57534E] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-[#F4EFE8] border border-[#9E7B56]/25 text-sm text-[#1C1917] focus:outline-none focus:border-[#9E7B56]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#57534E] mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F4EFE8] border border-[#9E7B56]/25 text-sm text-[#1C1917] focus:outline-none focus:border-[#9E7B56]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#57534E] mb-1.5">
                    Service / Opportunity Type
                  </label>
                  <select
                    value={inquiryProjectType}
                    onChange={(e) => setInquiryProjectType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4EFE8] border border-[#9E7B56]/25 text-sm font-medium text-[#1C1917] focus:outline-none focus:border-[#9E7B56]"
                  >
                    <option value="Full-Time Graphic / Motion Designer Role">
                      Full-Time Graphic / Motion Designer Role
                    </option>
                    <option value="Motion Graphics & Video">
                      Motion Graphics &amp; Animated Reels
                    </option>
                    <option value="Brand Identity & Visual System">
                      Brand Identity &amp; Visual System
                    </option>
                    <option value="Event Design & Print Collateral">
                      Event Design &amp; Print Collateral
                    </option>
                    <option value="Social Media Creatives">
                      Social Media Creatives Campaign
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#57534E] mb-1.5">
                    Project or Role Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Tell Toms about your timeline, goals, or creative team..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F4EFE8] border border-[#9E7B56]/25 text-sm text-[#1C1917] focus:outline-none focus:border-[#9E7B56]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#1C1917] hover:bg-[#9E7B56] text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  {inquirySent
                    ? "Opening Mail Client..."
                    : "Send Message to Toms Johnson"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (Hidden on print) */}
      <footer className="no-print border-t border-[#9E7B56]/20 py-10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#57534E]">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#1C1917]">Toms</span>
            <span className="font-extrabold text-[#9E7B56]">Johnson</span>
            <span>— Graphic &amp; Motion Graphic Designer • Andheri East, Mumbai</span>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <span>CREATIVE</span>
            <span>•</span>
            <span>VISUALS</span>
            <span>•</span>
            <span>BRANDS</span>
            <span>•</span>
            <span>STORIES</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

