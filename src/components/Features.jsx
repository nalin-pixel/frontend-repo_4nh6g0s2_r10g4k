import React from 'react'

const features = [
  {
    title: 'Fractional Ownership',
    desc: 'Own a real share of the home with transparent equity tracking and automated payouts.',
  },
  {
    title: 'Legal & Secure',
    desc: 'Bank‑grade security, compliant contracts, and escrow built in for peace of mind.',
  },
  {
    title: 'Smart Insights',
    desc: 'See live market signals, projections, and fair‑use scheduling optimized by AI.',
  },
]

export default function Features() {
  return (
    <section id="learn" className="relative z-10 py-16 md:py-24 bg-gradient-to-b from-transparent to-[#04070f]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
              <h3 className="text-xl font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sky-100/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
