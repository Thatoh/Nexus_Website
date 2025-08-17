import React from 'react';

export default function NewsletterContent() {
  return (
         <div className="mx-auto max-w-3xl rounded-2xl bg-white/20 backdrop-blur-md ring-1 ring-white/30 p-8 shadow-xl">
       <h3 className="text-2xl font-semibold" style={{ color: '#a8b545' }}>Elevate Your Productivity</h3>
       <p className="mt-2" style={{ color: '#a8b545' }}>
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
          className="rounded-lg px-5 py-3 font-semibold text-white transition-colors"
          style={{ backgroundColor: '#a8b545' }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
