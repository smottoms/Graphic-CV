"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Sparkles, Sliders, Film } from "lucide-react";

const scenes = [
  {
    id: "kinetic",
    label: "01 / Kinetic Brand Story",
    client: "Zilicon Network Solution",
    headline: "DESIGN. MOTION. CREATE.",
    subline: "Clear Layouts • Visual Storytelling • Engaging Design",
    fps: "60 FPS",
    duration: "00:15",
    accent: "#9E7B56",
  },
  {
    id: "event",
    label: "02 / Luxury Event Reel",
    client: "Knot with Style & Vama",
    headline: "BESPOKE VISUAL EXPERIENCES",
    subline: "Event Branding • Stage Graphics • Animated Invites",
    fps: "60 FPS",
    duration: "00:20",
    accent: "#DDBEA0",
  },
  {
    id: "social",
    label: "03 / Social Motion System",
    client: "Brand Digital Campaigns",
    headline: "SCROLL-STOPPING CREATIVES",
    subline: "Identity Systems • Typography • Digital Platforms",
    fps: "60 FPS",
    duration: "00:12",
    accent: "#C89D70",
  },
];

export default function MotionReelPreview() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(32);

  const activeScene = scenes[activeSceneIndex];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSceneIndex((idx) => (idx + 1) % scenes.length);
          return 0;
        }
        return prev + 2;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="rounded-3xl bg-[#191716] text-[#FAF8F5] border border-[#9E7B56]/35 shadow-2xl overflow-hidden">
      {/* Top Studio Bar */}
      <div className="px-5 py-3.5 bg-[#141210] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#9E7B56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#DDBEA0]/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="ml-2 text-xs font-mono tracking-wider uppercase text-[#DDBEA0] flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5" />
            Motion Comp Viewer — Toms_Showreel_2026.aep
          </span>
        </div>

        <div className="flex items-center gap-2">
          {scenes.map((scene, idx) => (
            <button
              key={scene.id}
              type="button"
              onClick={() => {
                setActiveSceneIndex(idx);
                setProgress(0);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeSceneIndex === idx
                  ? "bg-[#9E7B56] text-white"
                  : "bg-white/5 text-[#DDBEA0]/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              {scene.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Motion Stage */}
      <div className="relative p-8 sm:p-12 min-h-[290px] flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1C1917] via-[#231E1A] to-[#141210]">
        {/* Animated Orbital Rings */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 w-72 h-72 rounded-full border border-[#9E7B56]/30 transition-transform duration-300"
          style={{
            transform: `scale(${1 + (progress / 100) * 0.18}) rotate(${progress * 1.8}deg)`,
          }}
        />
        <div
          className="pointer-events-none absolute right-10 bottom-6 w-40 h-40 rounded-full bg-[#9E7B56]/15 blur-2xl"
          aria-hidden="true"
        />

        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#DDBEA0]/80">
          <span>CLIENT // {activeScene.client.toUpperCase()}</span>
          <span className="px-2.5 py-0.5 rounded bg-white/10 text-[#DDBEA0]">
            {activeScene.fps} • {activeScene.duration}
          </span>
        </div>

        {/* Center Kinetic Headline */}
        <div className="relative z-10 my-6">
          <p className="font-script text-3xl sm:text-4xl text-[#DDBEA0] mb-1 -rotate-2 inline-block">
            Design • Motion • Create
          </p>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-none mb-3 transition-all duration-300">
            {activeScene.headline}
          </h3>
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#DDBEA0]">
            {activeScene.subline}
          </p>
        </div>

        {/* Keyframe Timeline Scrubber */}
        <div className="relative z-10 space-y-3 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-9 h-9 rounded-xl bg-[#9E7B56] hover:bg-[#7C5E3F] text-white flex items-center justify-center transition-colors shrink-0"
              aria-label={isPlaying ? "Pause animation" : "Play animation"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 ml-0.5" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setProgress(0)}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-[#DDBEA0] flex items-center justify-center transition-colors shrink-0"
              aria-label="Restart timeline"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Progress Track with Keyframe Diamonds */}
            <div
              className="flex-1 h-2.5 bg-white/10 rounded-full overflow-hidden relative cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickPos = ((e.clientX - rect.left) / rect.width) * 100;
                setProgress(Math.max(0, Math.min(100, Math.round(clickPos))));
              }}
            >
              <div
                className="h-full bg-gradient-to-r from-[#9E7B56] to-[#DDBEA0] transition-all duration-100 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-xs font-mono text-[#DDBEA0] w-14 text-right">
              {String(Math.floor((progress / 100) * 15)).padStart(2, "0")}:
              {String(Math.floor(((progress / 100) * 60) % 60)).padStart(2, "0")}f
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

