"use client";

import React, { useState } from "react";
import {
  Play,
  ArrowUpRight,
  Layers,
  Sparkles,
  CheckCircle2,
  X,
  Film,
  Palette,
  LayoutGrid,
  Calendar,
} from "lucide-react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";

const categories = [
  "All",
  "Motion Graphics",
  "Event Design",
  "Brand Identity",
  "Social & Digital",
] as const;

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9E7B56]/15 text-[#7C5E3F] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Selected Works & Case Studies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1C1917]">
            Visual Storytelling{" "}
            <span className="text-[#9E7B56]">&amp; Motion Craft</span>
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[#1C1917] text-[#FAF8F5] shadow-md"
                  : "bg-[#F4EFE8] text-[#57534E] hover:bg-[#E7DDD0] hover:text-[#1C1917]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer rounded-3xl bg-white border border-[#9E7B56]/20 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
          >
            {/* Custom Graphic / Motion Artwork Canvas */}
            <div>
              <div className="relative h-60 overflow-hidden bg-[#1C1917] p-6 flex flex-col justify-between">
                {/* Ambient warm bronze geometric art */}
                <div
                  className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full opacity-35 transition-transform duration-500 group-hover:scale-125"
                  style={{ backgroundColor: project.palette[1] }}
                />
                <div
                  className="pointer-events-none absolute -bottom-16 -left-10 w-52 h-52 rounded-full opacity-20 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: project.palette[2] }}
                />

                {/* Top bar inside visual */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/10 text-[#DDBEA0] backdrop-blur-sm border border-white/10">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#DDBEA0]/80">
                    {project.year}
                  </span>
                </div>

                {/* Center Visual Motif per aspectType */}
                <div className="relative z-10 my-auto py-3">
                  {project.aspectType === "motion" ? (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#9E7B56] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-12 rounded-full bg-[#DDBEA0] animate-pulse" />
                          <span className="h-1.5 w-20 rounded-full bg-[#9E7B56]/70" />
                          <span className="h-1.5 w-8 rounded-full bg-white/30" />
                        </div>
                        <p className="text-xs uppercase tracking-[0.22em] text-[#DDBEA0] font-semibold">
                          60 FPS Motion System
                        </p>
                      </div>
                    </div>
                  ) : project.aspectType === "event" ? (
                    <div className="border border-[#DDBEA0]/35 rounded-2xl p-3.5 bg-white/[0.03] backdrop-blur-sm">
                      <p className="font-script text-3xl text-[#DDBEA0] leading-none mb-1">
                        {project.client}
                      </p>
                      <p className="text-[11px] tracking-[0.24em] uppercase text-white/75">
                        Bespoke Event Identity &amp; Print
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-2 rounded-xl bg-white/[0.06] border border-white/10 p-3">
                        <span className="block text-[10px] tracking-[0.2em] text-[#DDBEA0] uppercase">
                          Grid &amp; Type
                        </span>
                        <span className="text-lg font-extrabold text-white tracking-tight">
                          Aa Bb Cc
                        </span>
                      </div>
                      <div className="rounded-xl bg-[#9E7B56]/30 border border-[#DDBEA0]/30 flex items-center justify-center">
                        <Layers className="w-6 h-6 text-[#DDBEA0]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Color Swatches + Metric */}
                <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10">
                  <div className="flex items-center -space-x-1.5">
                    {project.palette.map((hex) => (
                      <span
                        key={hex}
                        className="w-5 h-5 rounded-full border border-white/30 shadow-sm"
                        style={{ backgroundColor: hex }}
                        title={`Palette ${hex}`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#FAF8F5]/85">
                    {project.featuredMetric}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-xs font-bold tracking-wider uppercase text-[#9E7B56] mb-1">
                  {project.client}
                </p>
                <h3 className="text-xl font-extrabold text-[#1C1917] group-hover:text-[#9E7B56] transition-colors mb-2.5">
                  {project.title}
                </h3>
                <p className="text-sm text-[#57534E] leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#F4EFE8]">
              <div className="flex flex-wrap gap-1.5">
                {project.tools.slice(0, 3).map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#F4EFE8] text-[#57534E]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1C1917] group-hover:text-[#9E7B56] transition-colors">
                Case Study
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#FAF8F5] text-[#1C1917] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#9E7B56]/30 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Banner */}
            <div className="bg-[#1C1917] text-[#FAF8F5] p-6 sm:p-8 relative overflow-hidden">
              <div
                className="pointer-events-none absolute -right-12 -bottom-16 w-64 h-64 rounded-full bg-[#9E7B56]/25"
                aria-hidden="true"
              />
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#9E7B56] text-white">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-[#DDBEA0] font-mono">
                      {selectedProject.year} • {selectedProject.client}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-[#9E7B56] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-base text-[#292524] leading-relaxed font-medium">
                {selectedProject.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#F4EFE8] border border-[#9E7B56]/20">
                  <h4 className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#9E7B56] mb-2">
                    The Challenge
                  </h4>
                  <p className="text-sm text-[#292524] leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#F4EFE8] border border-[#9E7B56]/20">
                  <h4 className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#9E7B56] mb-2">
                    Visual Solution &amp; Impact
                  </h4>
                  <p className="text-sm text-[#292524] leading-relaxed">
                    {selectedProject.outcome}
                  </p>
                </div>
              </div>

              {/* Deliverables & Color System */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <h4 className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#1C1917] mb-3 flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4 text-[#9E7B56]" />
                    Key Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-[#292524]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#9E7B56] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#1C1917] mb-3 flex items-center gap-2">
                      <Palette className="w-4 h-4 text-[#9E7B56]" />
                      Project Color Architecture
                    </h4>
                    <div className="flex items-center gap-3">
                      {selectedProject.palette.map((hex) => (
                        <div key={hex} className="flex items-center gap-1.5">
                          <span
                            className="w-7 h-7 rounded-lg border border-black/15 shadow-sm"
                            style={{ backgroundColor: hex }}
                          />
                          <span className="text-xs font-mono text-[#57534E]">
                            {hex}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#1C1917] mb-2 flex items-center gap-2">
                      <Film className="w-4 h-4 text-[#9E7B56]" />
                      Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-lg bg-[#1C1917] text-[#DDBEA0] text-xs font-semibold"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

