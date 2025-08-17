import React from 'react';

export default function NewsletterContent() {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 p-8 text-white shadow-lg">
      <h3 className="text-2xl font-semibold">Elevate Your Productivity</h3>
      <p className="mt-2 text-white/80">
        Discover Microsoft solutions designed to empower your team, streamline workflows, and drive innovation.
      </p>

      <form className="mt-6 flex gap-3">
        <input
          type="email"
          placeholder="you@company.com"
          className="w-full rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30"
        />
        <button
          type="submit"
          className="rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-white hover:bg-emerald-400"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
