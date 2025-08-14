
import React from 'react';
import { Link, useNavigate } from 'react-router';
import { XMarkIcon } from './icons'; // Assuming XMarkIcon is in your icons file

interface AuthLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  isSignIn: boolean; // To conditionally render some text specific to sign in / sign up
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, pageTitle, isSignIn }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Navigate to homepage or previous page
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-900 text-white relative">
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-sky-300 z-20 p-2 bg-black/20 rounded-full"
        aria-label="Close"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>

      {/* Left Pane */}
      <div className="w-full md:w-2/5 bg-gradient-to-br from-sky-500 to-indigo-700 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden min-h-[300px] md:min-h-screen">
        {/* Abstract shapes for background decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-sky-400 opacity-20 rounded-full -translate-x-1/3 -translate-y-1/3 filter blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 opacity-20 rounded-full translate-x-1/4 translate-y-1/4 filter blur-2xl"></div>
        
        <div className="z-10">
          <Link to="/" className="text-3xl font-bold tracking-tight text-white">
            NexusByte
          </Link>
        </div>
        
        <div className="z-10 my-auto md:my-0 md:mt-16 lg:mt-24">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Let's Grow your <br /> Business
          </h1>
          <p className="text-lg lg:text-xl text-sky-100 opacity-90 mb-8">
            Social Media Marketing & Management
          </p>
          <Link
            to="/solutions" // Or a more relevant "Start Now" page
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-sky-500 text-white font-semibold rounded-full shadow-lg hover:from-cyan-500 hover:to-sky-600 transition-all duration-300 transform hover:scale-105"
          >
            Start Now
          </Link>
        </div>
        
        <div className="z-10 mt-auto">
          <p className="text-sm text-sky-200 opacity-70">&copy; {new Date().getFullYear()} NexusByte Solutions</p>
        </div>
      </div>

      {/* Right Pane */}
      <div className="w-full md:w-3/5 flex items-center justify-center p-6 md:p-12 bg-slate-800 md:bg-transparent md:relative">
         {/* Background for right pane on md+ screens, if needed for visual separation. For now, AuthLayout has bg-slate-900 */}
         {/* <div className="absolute inset-0 bg-slate-900 hidden md:block"></div>  */}
        <div className="w-full max-w-md bg-white text-slate-800 rounded-2xl shadow-2xl p-8 md:p-10 z-10">
          <h2 className="text-3xl font-bold mb-2 text-slate-900">
            {pageTitle}
          </h2>
          <p className="text-slate-600 mb-8">
            {isSignIn ? "Welcome back! Please enter your details." : "Let's get you set up with an account."}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
