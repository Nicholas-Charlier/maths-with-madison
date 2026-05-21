"use client";

import { useState } from "react";

const topics = [
  { name: "Algebra", emoji: "𝑥", questions: 240, mastery: 72 },
  { name: "Number", emoji: "#", questions: 180, mastery: 88 },
  { name: "Geometry", emoji: "△", questions: 200, mastery: 55 },
  { name: "Statistics", emoji: "∑", questions: 160, mastery: 91 },
  { name: "Ratio & Proportion", emoji: "%", questions: 140, mastery: 63 },
  { name: "Probability", emoji: "?", questions: 120, mastery: 47 },
];

const features = [
  {
    title: "Adaptive Questions",
    description: "Our system learns your gaps and serves questions at exactly the right difficulty — no wasted time on topics you already know.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Worked Solutions",
    description: "Every question comes with a full step-by-step solution. Understand the method, not just the answer.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Exam-Board Aligned",
    description: "Content mapped to AQA, Edexcel, and OCR. Foundation and Higher tiers. Nothing off-spec, nothing missing.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Progress Tracking",
    description: "Topic mastery scores, predicted grade, and streak tracking keep students motivated and parents informed.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const examBoards = ["AQA", "Edexcel", "OCR", "WJEC", "CCEA"];

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            GCSE and IGCSE Mathematics · Foundation &amp; Higher
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Revise smarter.<br />
            <span className="text-blue-500">Score higher.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
            Adaptive practice questions, full worked solutions, and real-time progress tracking — aligned to every major GCSE and IGCSE exam board.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Start for free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              See how it works
            </a>
            <a href="/lessons/simplifying-fractions" className="inline-flex items-center justify-center gap-2 border border-blue-200 text-blue-700 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm">
              Try a lesson
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
            {["No credit card required", "14-day free trial", "40,000+ students in the UK"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-500"><path d="M20 6L9 17l-5-5" /></svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Exam boards ──────────────────────────────────────────── */}
      <div className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center gap-4">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mr-2">Aligned to</span>
          {examBoards.map((b) => (
            <span key={b} className="text-sm font-bold text-gray-300 tracking-wide">{b}</span>
          ))}
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────────────── */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">Why Maths with Madison</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything a student needs.<br />Nothing they don't.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
              <div className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Topic preview ─────────────────────────────────────────── */}
      <section id="topics" className="bg-gray-50 border-y border-gray-100 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="md:flex md:items-end md:justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">Topics</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Every GCSE and IGCSE topic covered.</h2>
            </div>
            <a href="/topics" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              View all topics →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((t) => (
              <a key={t.name} href={`/topics/${t.name.toLowerCase().replace(/\s+/g, "-")}`} className="group bg-white border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-50 text-blue-800 rounded-lg flex items-center justify-center font-bold text-sm">{t.emoji}</div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.questions} questions</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-blue-700 transition-colors">{t.mastery}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${t.mastery}%` }} />
                </div>
                <p className="text-xs text-gray-400 mt-2">Mastery</p>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <a href="/topics" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">View all topics →</a>
          </div>
        </div>
      </section>

      {/* ── Progress / Gamification ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">Progress &amp; Gamification</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Stay motivated,<br />every session.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Daily streaks, XP points, and a live predicted grade keep you coming back. A weekly summary email keeps parents in the loop — no nagging required.
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              {["Daily streaks and XP rewards", "Live predicted grade (Foundation / Higher)", "Topic mastery scores per session", "Leaderboard among friends or class", "Weekly progress emails for parents"].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500 mt-0.5 shrink-0"><path d="M20 6L9 17l-5-5" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard mockup */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">Amara's Dashboard</p>
                <p className="text-xs text-gray-400">Updated just now</p>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold px-3 py-1.5 rounded-full">
                <span>🔥</span><span>7-day streak</span>
              </div>
            </div>
            <div className="flex items-center justify-between bg-gray-900 text-white rounded-xl px-5 py-4">
              <div>
                <p className="text-xs text-gray-400 mb-1">Predicted grade</p>
                <p className="text-3xl font-bold">7</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-1">XP this week</p>
                <p className="text-2xl font-bold text-blue-500">1,240</p>
              </div>
            </div>
            <div className="space-y-3">
              {topics.slice(0, 4).map((t) => (
                <div key={t.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600 font-medium">{t.name}</span>
                    <span className="text-gray-400">{t.mastery}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${t.mastery}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5 pt-1">
              <p className="text-xs text-gray-400 mr-1">This week</p>
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
                <div key={d} className="flex flex-col items-center gap-1">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${i < 5 ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-300"}`}>
                    {i < 5 ? "✓" : ""}
                  </div>
                  <span className="text-gray-300 text-[9px]">{d[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to hit your<br />
              <span className="text-blue-500">target grade?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Join 40,000+ students already using Maths with Madison. Free for the first 14 days — no credit card needed.
            </p>
          </div>
          <div>
            {submitted ? (
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
                <p className="text-2xl mb-2">🎉</p>
                <p className="font-semibold text-blue-500 mb-1">You're on the list!</p>
                <p className="text-sm text-gray-400">Check your inbox for next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-300 text-gray-900 font-bold py-3 rounded-lg text-sm transition-colors">
                  Get started free →
                </button>
                <p className="text-xs text-gray-500 text-center">No spam. Free 14-day trial. Cancel any time.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="font-bold text-gray-900 text-base">Maths with <span className="text-blue-600">Madison</span></div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="/privacy" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="/contact" className="hover:text-gray-900 transition-colors">Contact</a>
            <a href="/schools" className="hover:text-gray-900 transition-colors">Schools</a>
          </nav>
          <p className="text-gray-300">© 2025 Maths with Madison Ltd.</p>
        </div>
      </footer>

    </main>
  );
}