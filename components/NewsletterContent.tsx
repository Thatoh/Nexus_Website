import React from 'react';

const NewsletterContent: React.FC = () => {
  return (
    <div className="relative isolate flex flex-col gap-10 overflow-hidden bg-white/10 backdrop-blur-sm px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
      <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl xl:flex-auto drop-shadow-lg">
        Want our product updates? Sign up for our newsletter.
      </h2>
      <form className="w-full max-w-md">
        <div className="flex gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
            className="min-w-0 flex-auto rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/20 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6 backdrop-blur-sm"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Notify me
          </button>
        </div>
        <p className="mt-4 text-sm/6 text-gray-200">
          We care about your data. Read our{' '}
          <a
            href="#"
            className="font-semibold whitespace-nowrap text-white hover:text-gray-100"
          >
            privacy policy
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default NewsletterContent;
