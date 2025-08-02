
import React from 'react';
import { PaperAirplaneIcon } from '../icons'; // Assuming mic icon is not available, will skip or use generic

const MockWindow: React.FC<{ title?: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
  <div className={`w-full h-full bg-slate-800 rounded-md shadow-lg flex flex-col p-3 text-xs text-slate-300 ${className}`}>
    {title && (
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-400 font-medium">{title}</span>
        <div className="w-2.5 h-2.5 bg-slate-600 rounded-full hover:bg-red-500 transition-colors"></div>
      </div>
    )}
    <div className="flex-grow overflow-hidden relative">
      {children}
    </div>
  </div>
);

export const AISupportInitial: React.FC = () => (
  <MockWindow>
    <div className="flex flex-col h-full justify-between">
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full mx-auto mb-2 shadow-inner border-2 border-slate-700"></div>
        <p className="text-[10px] leading-tight mb-3">What do you want to know on <span className="font-semibold text-slate-100">20 June 2025?</span></p>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-[9px] mb-2">
        <div className="bg-slate-700/70 p-1.5 rounded">
          <p className="font-semibold text-slate-200 mb-0.5">Is this week on target?</p>
          <p className="text-slate-400">Growing with simple chart</p>
        </div>
        <div className="bg-slate-700/70 p-1.5 rounded">
          <p className="font-semibold text-slate-200 mb-0.5">Summarize key points</p>
          <p className="text-slate-400">There are 3 important points</p>
        </div>
      </div>

      <div className="bg-slate-700 p-1.5 rounded flex items-center text-[10px]">
        <input type="text" readOnly value="Ask Anything..." className="bg-transparent flex-grow outline-none placeholder-slate-400 text-slate-300" />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-slate-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
        <PaperAirplaneIcon className="h-3 w-3 text-slate-400 transform rotate-45" />
      </div>
    </div>
  </MockWindow>
);

export const AISupportHover: React.FC = () => (
  <MockWindow>
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-1">
         <div className="w-6 h-1.5 bg-slate-700 rounded-sm"></div> {/* Placeholder for logo/name */}
         <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> {/* Minimized control */}
      </div>
      <p className="text-[10px] font-semibold text-slate-100 mb-1">Is this week on target?</p>
      
      <div className="flex-grow flex items-end justify-between px-1 space-x-0.5 my-2">
        {[30, 50, 20, 70, 40, 85, 60].map((height, i) => (
          <div key={i} className={`w-1.5 rounded-t-sm ${i === 5 ? 'bg-blue-500' : 'bg-slate-600'}`} style={{ height: `${height}%` }}></div>
        ))}
      </div>
      
      <div className="border-t border-slate-700 pt-1.5 text-[9px]">
        <div className="flex items-center">
          <div className="w-1 h-full bg-teal-500 mr-1.5 rounded-sm"></div>
          <p className="font-semibold text-slate-100">Yes! This Week is <span className="text-teal-400">on target</span></p>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="font-bold text-lg text-slate-100">37 <span className="text-xs text-slate-400 font-normal">Task</span></span>
           <div className="w-4 h-1.5 bg-slate-700 rounded-sm"></div> {/* Placeholder */}
        </div>
      </div>
    </div>
  </MockWindow>
);
