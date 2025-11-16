import React from 'react'
import Spline from '@splinetool/react-spline'

function HoloTablet() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/60 via-blue-500/50 to-indigo-500/40 rounded-2xl blur-xl opacity-80" />
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl">
        <div className="flex items-center justify-between mb-3">
          <div className="h-2 w-8 rounded bg-white/40" />
          <div className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
        </div>
        <svg viewBox="0 0 320 180" className="w-full h-44">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#2563eb" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#111827" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="320" height="180" fill="url(#glow)" />
          {/* House outline */}
          <g stroke="#a5b4fc" strokeWidth="2" fill="none" opacity="0.9">
            <path d="M40 110 L100 60 L160 110" />
            <rect x="60" y="110" width="80" height="40" rx="4" />
            <rect x="95" y="120" width="20" height="30" rx="2" />
          </g>
          {/* Pie chart */}
          <g transform="translate(230, 90)">
            <circle r="40" fill="none" stroke="#1e293b" strokeWidth="8" />
            <path d="M 0 0 L 40 0 A 40 40 0 0 1 0 40 Z" fill="#22d3ee" opacity="0.9" />
            <path d="M 0 0 L 0 40 A 40 40 0 0 1 -34.64 20 Z" fill="#38bdf8" opacity="0.9" />
            <path d="M 0 0 L -34.64 20 A 40 40 0 0 1 -40 0 Z" fill="#60a5fa" opacity="0.9" />
            <circle r="18" fill="#0b1220" stroke="#22d3ee" strokeWidth="2" />
          </g>
          {/* Data ticks */}
          <g stroke="#22d3ee" strokeOpacity="0.6">
            <line x1="10" y1="20" x2="120" y2="20" />
            <line x1="10" y1="32" x2="140" y2="32" />
            <line x1="10" y1="44" x2="100" y2="44" />
          </g>
        </svg>
        <div className="mt-3 flex items-center gap-2 text-cyan-200/90">
          <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
          <p className="text-sm">Holographic ownership split • Live market signals</p>
        </div>
      </div>
    </div>
  )
}

function PeopleGroup() {
  return (
    <div className="flex -space-x-3">
      {[
        'bg-gradient-to-br from-amber-200 to-rose-300',
        'bg-gradient-to-br from-emerald-200 to-cyan-300',
        'bg-gradient-to-br from-sky-200 to-indigo-300',
        'bg-gradient-to-br from-rose-200 to-fuchsia-300',
      ].map((cls, i) => (
        <div
          key={i}
          className={`relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 shadow-md ${cls}`}
          title="Co-owners"
        >
          <span className="text-xs font-semibold text-slate-800 drop-shadow">{['AM','JR','SK','LI'][i]}</span>
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/KeusF4lUkfKzhtGY/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Electric flame glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/40 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/40 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 bg-gradient-to-tr from-cyan-300/30 via-blue-500/30 to-indigo-500/30 rounded-full blur-3xl" />
      </div>

      {/* Architectural lines overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />
        <div className="absolute right-24 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent" />
        <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 pt-24 pb-16 md:flex-row md:items-center">
        <div className="max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-ping" />
            <span className="text-xs tracking-wide text-cyan-100">Real Estate Co‑Ownership OS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
            Co‑Own Your Dream Home
          </h1>
          <p className="mt-4 text-lg md:text-xl text-sky-100/90">
            Smarter Together. Build equity with friends and family through a transparent, data‑driven platform that makes co‑ownership effortless and secure.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#learn" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 hover:from-cyan-300 hover:to-blue-500 transition-colors">
              Get Started
            </a>
            <button className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-white/90 hover:bg-white/15 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              See How It Works
            </button>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <PeopleGroup />
            <p className="text-sm text-sky-100/80">
              A community of co‑owners building wealth together
            </p>
          </div>
        </div>
        <div className="pointer-events-auto w-full md:w-auto">
          <HoloTablet />
        </div>
      </div>
    </section>
  )
}
