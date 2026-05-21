import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About · Maths with Madison",
  description: "Meet Madison — LSE Mathematics graduate and the person behind Maths with Madison.",
};

const values = [
  {
    title: "Clarity over complexity",
    description: "If an explanation isn't simple, it isn't finished. Every topic is taught the way it should have been the first time.",
  },
  {
    title: "Relatable mentorship",
    description: "Madison went through these exact exams and knows what trips students up — and how to fix it.",
  },
  {
    title: "Results-focused",
    description: "Every question, solution, and lesson is built around one outcome — performing on exam day.",
  },
];

const credentials = [
  "BSc Mathematics & Economics — LSE",
  "Investment Banking — Goldman Sachs",
  "500+ hours of 1-to-1 tutoring",
  "AQA · Edexcel · OCR · CAIE · WJEC",
];

export default function AboutPage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            About
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Maths doesn&apos;t have<br />
            <span className="text-blue-500">to feel this hard.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Maths with Madison was built on a simple idea — that the right explanation, delivered by the right person, changes everything.
          </p>
        </div>
      </section>

      {/* ── Founder ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">The founder</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Meet Madison.</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Madison graduated from the <strong className="text-gray-900 font-semibold">London School of Economics </strong>with a degree in Mathematics and Economics, and works in investment banking. But this isn&apos;t about credentials.
                </p>
                <p>
                  It&apos;s about the hundreds of hours she spent tutoring students — watching smart, capable people convinced they were &ldquo;just bad at maths.&rdquo; She knew that wasn&apos;t true. They&apos;d never had it explained properly.
                </p>
                <p className="border-l-2 border-blue-500 pl-4 italic text-gray-700">
                  &ldquo;Most students aren&apos;t bad at maths. They just haven&apos;t had someone explain it in a way that actually clicks.&rdquo;
                </p>
                <p>
                  Maths with Madison is her answer to that — the tutor she wishes every student could have access to.
                </p>
              </div>
            </div>

            {/* Profile card */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-50 text-blue-800 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Madison</p>
                  <p className="text-sm text-gray-400">Founder &amp; Lead Educator</p>
                </div>
              </div>
              <div className="h-px bg-gray-100" />
              <div className="space-y-2.5">
                {credentials.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500 shrink-0">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">How we teach</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built on three things.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={v.title} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
              <p className="text-2xl font-bold text-blue-500 mb-4">0{i + 1}</p>
              <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to start?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              No credit card required. Try a lesson and see if it clicks — most students know within the first session.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Start for free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}