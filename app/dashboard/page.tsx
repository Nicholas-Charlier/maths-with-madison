import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard · Maths with Madison",
};

const topics = [
  { name: "Algebra", questions: 240, mastery: 72 },
  { name: "Number", questions: 180, mastery: 88 },
  { name: "Geometry", questions: 200, mastery: 55 },
  { name: "Statistics", questions: 160, mastery: 91 },
  { name: "Ratio & Proportion", questions: 140, mastery: 63 },
  { name: "Probability", questions: 120, mastery: 47 },
];

export default function DashboardPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10">

      {/* ── Welcome ──────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Good morning, Amara.</h1>
          <p className="text-sm text-gray-500 mt-1">Pick up where you left off.</p>
        </div>
        <div className="hidden sm:flex items-center justify-between bg-gray-900 text-white rounded-xl px-5 py-3 gap-8">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Predicted grade</p>
            <p className="text-2xl font-bold">7</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 mb-0.5">XP this week</p>
            <p className="text-2xl font-bold text-blue-500">1,240</p>
          </div>
        </div>
      </div>

      {/* ── Continue ─────────────────────────────────────────────── */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Continue</p>
        <Link
          href="/dashboard/topics/algebra"
          className="flex items-center justify-between bg-white border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all group"
        >
          <div>
            <p className="font-semibold text-gray-900 mb-1">Algebra</p>
            <p className="text-sm text-gray-400">Last session: Solving quadratics</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-gray-400 mb-1">Mastery</p>
              <p className="text-sm font-semibold text-gray-900">72%</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-300 group-hover:text-blue-500 transition-colors">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      {/* ── Topics ───────────────────────────────────────────────── */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">All topics</p>
          <Link href="/dashboard/topics" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">View all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((t) => (
            <Link
              key={t.name}
              href={`/dashboard/topics/${t.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group bg-white border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                <span className="text-xs text-gray-400 group-hover:text-blue-600 transition-colors">{t.mastery}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${t.mastery}%` }} />
              </div>
              <p className="text-xs text-gray-400 mt-2">{t.questions} questions</p>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}