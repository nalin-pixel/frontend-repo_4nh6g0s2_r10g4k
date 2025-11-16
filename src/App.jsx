import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white">
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(56,189,248,0.6)]" />
          <span className="text-sm tracking-wider text-sky-100/90">Co‑Ownership OS</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sky-100/80">
          <a href="#learn" className="hover:text-white">How it works</a>
          <a href="/test" className="hover:text-white">System Check</a>
          <a href="#" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 hover:bg-white/15">Sign in</a>
        </nav>
      </header>

      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#04070f]/60 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sky-100/70">
          <p>© {new Date().getFullYear()} Co‑Ownership OS. Smarter Together.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
