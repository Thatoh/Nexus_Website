
import React from 'react';

const MockWindow: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
  <div className={`w-full h-full bg-slate-800 rounded-md shadow-lg flex flex-col p-2.5 text-xs text-slate-300 ${className}`}>
    <div className="flex items-center justify-between mb-2 text-[10px] text-slate-400">
      <span>{title}</span>
      <div className="w-2.5 h-2.5 bg-slate-600 rounded-full hover:bg-red-500 transition-colors"></div>
    </div>
    <div className="flex-grow overflow-hidden relative bg-slate-700/30 rounded-sm p-2">
      {children}
    </div>
  </div>
);

const Avatar: React.FC<{ color: string }> = ({ color }) => (
  <div className={`w-3 h-3 rounded-full ${color} border-slate-800 border -ml-1 first:ml-0`}></div>
);

const TaskItem: React.FC<{ title: string; time: string; avatars: string[] }> = ({ title, time, avatars }) => (
  <div className="bg-slate-600/70 p-1.5 rounded-md mb-1.5">
    <div className="flex justify-between items-start">
      <p className="text-[10px] font-semibold text-slate-100 leading-tight">{title}</p>
      <div className="flex">
        {avatars.map((color, i) => <Avatar key={i} color={color} />)}
      </div>
    </div>
    <p className="text-[8px] text-slate-400 mt-0.5">{time}</p>
  </div>
);

export const TaskControlInitial: React.FC = () => (
  <MockWindow title="ALL TASK">
    <div className="flex flex-col items-center justify-center h-full">
      {/* Folder Mock */}
      <div className="relative w-3/5 aspect-[4/3]">
        <div className="absolute top-2 left-0 w-1/4 h-2 bg-blue-500 rounded-t-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-blue-600 rounded-md pt-4">
        </div>
        <div className="absolute top-1 left-0 w-full h-full bg-blue-500 rounded-md pt-4 shadow-inner">
            <div className="text-center mt-2">
                 <p className="text-sm font-bold text-white">PRIORITY TASK</p>
                 <p className="text-[10px] text-blue-200">4 Task</p>
            </div>
        </div>
      </div>
       <p className="text-[9px] text-slate-500 mt-2">Me <span className="text-slate-400">18-05-2024</span></p>
    </div>
  </MockWindow>
);

export const TaskControlHover: React.FC = () => (
  <MockWindow title="PRIORITY TASK">
    <div className="space-y-1">
      <TaskItem title="Mobile App" time="10:00 AM - 06:00 PM" avatars={['bg-red-400', 'bg-green-400', 'bg-yellow-400']} />
      <TaskItem title="Design System" time="10:00 AM - 12:00 AM" avatars={['bg-purple-400', 'bg-pink-400']} />
      <TaskItem title="Moodboarding" time="03:00 PM - 05:00 PM" avatars={['bg-teal-400']} />
      <TaskItem title="Research" time="09:00 AM - 09:00 AM" avatars={['bg-orange-400', 'bg-cyan-400']} />
    </div>
  </MockWindow>
);
