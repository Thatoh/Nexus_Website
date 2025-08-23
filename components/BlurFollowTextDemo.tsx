import React from 'react';
import BlurFollowText from './BlurFollowText';

export default function BlurFollowTextDemo() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <BlurFollowText text="Hybrid Work" radius={150} blur={15} />
        <p className="text-white mt-8 text-lg opacity-70">
          Move your mouse around to see the blur effect
        </p>
      </div>
    </div>
  );
}

