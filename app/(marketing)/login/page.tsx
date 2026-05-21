import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in · Maths with Madison",
};

export default function LoginPage() {
  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold tracking-tight mb-2">Welcome back</h1>
        <p className="text-sm text-gray-500 mb-8">Log in to continue your revision.</p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
          <Link
            href="/dashboard"
            className="block w-full bg-gray-900 text-white text-sm font-semibold text-center px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Log in →
          </Link>
        </div>
        <p className="text-xs text-gray-400 text-center mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">Start for free</Link>
        </p>
      </div>
    </main>
  );
}