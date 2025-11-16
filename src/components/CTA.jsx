import React from 'react'

export default function CTA() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/20 to-blue-700/20 p-8 md:p-12 backdrop-blur-xl">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-700/10 blur-2xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to co‑own smarter?</h2>
            <p className="mt-3 text-sky-100/90">Join the waitlist and get early access to tools that make shared ownership seamless.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="you@example.com" className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 hover:from-cyan-300 hover:to-blue-500">
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
