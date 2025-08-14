
import React from 'react';
import { CheckIcon } from '../icons'; // Assuming CheckIcon is available

const Notification: React.FC<{ appName: string; title: string; subtext?: string; icon?: React.ReactNode; time: string; bgColor?: string }> = ({ appName, title, subtext, icon, time, bgColor = "bg-slate-700/80 backdrop-blur-sm" }) => (
  <div className={`p-2 rounded-lg shadow-md ${bgColor} mb-1.5`}>
    <div className="flex items-center justify-between text-[9px] text-slate-400 mb-0.5">
      <div className="flex items-center">
        {/* Simple app icon placeholder */}
        <div className="w-2.5 h-2.5 bg-indigo-500 rounded-sm mr-1"></div> 
        <span>{appName}</span>
      </div>
      <span>{time}</span>
    </div>
    <p className="text-[10px] font-semibold text-slate-100">{icon && <span className="inline-block mr-1">{icon}</span>}{title}</p>
    {subtext && <p className="text-[8px] text-slate-300 mt-0.5 truncate">{subtext}</p>}
  </div>
);

const PhoneMock: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div className="w-full h-full bg-slate-800 rounded-md shadow-lg flex flex-col p-1.5 text-xs text-slate-300">
    {/* Phone top bar */}
    <div className="h-4 flex items-center justify-center px-2 mb-1">
      <div className="w-10 h-1 bg-slate-700 rounded-full"></div> {/* Notch placeholder */}
    </div>
    {/* Blurred background apps */}
    <div className="absolute inset-0 top-6 grid grid-cols-4 gap-2 p-4 opacity-10 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="aspect-square bg-slate-600 rounded-md"></div>
      ))}
    </div>
    {/* Notifications area */}
    <div className="relative flex-grow px-2 py-1 space-y-1 overflow-hidden">
      {children}
    </div>
  </div>
);

export const MonitoringInitial: React.FC = () => (
  <PhoneMock>
    <Notification 
      appName="Syntra"
      title="Deadline Reached"
      time="now"
    />
  </PhoneMock>
);

export const MonitoringHover: React.FC = () => (
  <PhoneMock>
    <Notification 
      appName="Syntra"
      title="Deadline Reached"
      subtext="The allocated time for 'Client Proposal Review' is up. Action required."
      time="now"
    />
    <Notification 
      appName="Syntra"
      title="Task Time Completed"
      icon={<CheckIcon className="w-2.5 h-2.5 text-nexusbyte-accent-green inline"/>}
      time="now"
      bgColor="bg-slate-650/80 backdrop-blur-sm" // Slightly different bg for variation
    />
    <Notification 
      appName="Syntra"
      title="Task Reminder"
      subtext="Project Kick-off meeting in 15 minutes."
      time="now"
      bgColor="bg-slate-600/80 backdrop-blur-sm"
    />
  </PhoneMock>
);
