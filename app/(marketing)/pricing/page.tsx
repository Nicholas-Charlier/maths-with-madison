const plans = [
    {
      name: "Monthly",
      price: "£29.99",
      period: "per month",
      description: "Perfect for short-term revision bursts before exams.",
      features: [
        "Full access to all topics",
        "Adaptive practice questions",
        "Worked solutions",
        "Progress tracking & streaks",
        "Exam-board aligned content",
      ],
      cta: "Start monthly",
      href: "/signup?plan=monthly",
      highlight: false,
    },
    {
      name: "3 Months",
      price: "£74.99",
      period: "per 3 months",
      description: "The most popular choice. Ideal for a full revision cycle.",
      badge: "Most popular",
      features: [
        "Everything in Monthly",
        "Save £15 vs monthly",
        "Predicted grade tracker",
        "Weekly parent progress emails",
        "Priority support",
      ],
      cta: "Start 3-month plan",
      href: "/signup?plan=3month",
      highlight: true,
    },
    {
      name: "Annual",
      price: "£149.99",
      period: "per year",
      description: "Best value. Study at your own pace across the full year.",
      badge: "Best value",
      features: [
        "Everything in 3 Months",
        "Save £210 vs monthly",
        "Early access to new topics",
        "Leaderboard & class features",
        "Dedicated revision planner",
      ],
      cta: "Start annual plan",
      href: "/signup?plan=annual",
      highlight: false,
    },
  ];
  
  export default function PricingPage() {
    return (
      <main className="min-h-screen bg-white">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">
            Pricing
          </p>
  
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Simple, honest pricing.
          </h1>
  
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            No hidden fees. Cancel any time. Every plan includes a 14-day free
            trial.
          </p>
        </section>
  
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.highlight
                    ? "border-blue-500 shadow-lg shadow-blue-100"
                    : "border-gray-200"
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full ${
                      plan.highlight
                        ? "bg-blue-500 text-white"
                        : "bg-gray-900 text-white"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}
  
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 mb-1">
                    {plan.name}
                  </p>
  
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {plan.price}
                    </span>
                  </div>
  
                  <p className="text-xs text-gray-400 mb-3">{plan.period}</p>
  
                  <p className="text-sm text-gray-500">
                    {plan.description}
                  </p>
                </div>
  
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-gray-600"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="text-blue-500 mt-0.5 shrink-0"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
  
                      {f}
                    </li>
                  ))}
                </ul>
  
                <a
                  href={plan.href}
                  className={`w-full text-center font-semibold py-3 rounded-lg text-sm transition-colors ${
                    plan.highlight
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-900 text-white hover:bg-gray-700"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
  
          <div className="mt-10 rounded-2xl bg-gray-50 border border-gray-100 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Buying for a school or tutoring centre?
              </p>
  
              <p className="text-sm text-gray-500">
                We offer class licences and bulk discounts for schools. Get in
                touch for a custom quote.
              </p>
            </div>
  
            <a
              href="/schools"
              className="shrink-0 text-sm font-semibold bg-white border border-gray-200 text-gray-900 px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact us
            </a>
          </div>
  
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">
              Common questions
            </h2>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "Is there really a free trial?",
                  a: "Yes — 14 days, full access, no credit card required. Cancel before the trial ends and you won't be charged.",
                },
                {
                  q: "Which exam boards are covered?",
                  a: "AQA, Edexcel, OCR, WJEC, and CCEA. Both Foundation and Higher tier content.",
                },
                {
                  q: "Can I switch plans?",
                  a: "Yes, you can upgrade or downgrade at any time. We'll prorate any difference.",
                },
                {
                  q: "Is this suitable for Foundation tier?",
                  a: "Absolutely. All content is tagged by tier so students only see what's relevant to them.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="bg-white border border-gray-100 rounded-xl p-5"
                >
                  <p className="font-semibold text-gray-900 mb-2 text-sm">
                    {item.q}
                  </p>
  
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }